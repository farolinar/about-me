pipeline {
    agent { label 'docker' }                 // top-level agent shared by all stages

    tools { nodejs 'node24' }                // managed Node 24 (configured in Phase 2)

    options {
        timestamps()                         // prepend timestamps to console output (Timestamper plugin)
        buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '5'))
        disableConcurrentBuilds()            // one build at a time for this job
        parallelsAlwaysFailFast()            // if any parallel branch fails, abort the others
        timeout(time: 15, unit: 'MINUTES')   // never let a hung build run forever
    }

    environment {
        CI = 'true'                          // many tools (incl. Vite/ESLint) behave differently in CI
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'git --version'
            }
        }

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Verify') {
            parallel {
                stage('Lint') {
                    steps {
                        // Portfolio is NOT lint-clean yet, so lint is ADVISORY:
                        // the stage shows red, but the overall build stays SUCCESS.
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'npm run lint'
                        }
                    }
                }
                stage('Build') {
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Result: ${currentBuild.currentResult} (build #${env.BUILD_NUMBER})"
        }
        success {
            archiveArtifacts artifacts: 'dist/**', fingerprint: true
            script {
                currentBuild.description = "OK • ${env.BUILD_NUMBER} • ${env.GIT_COMMIT?.take(7) ?: 'local'}"
            }
        }
        failure {
            script {
                currentBuild.description = "FAILED • ${env.BUILD_NUMBER}"
            }
        }
        cleanup {
            deleteDir()                      // always clean the workspace, even on failure
        }
    }
}