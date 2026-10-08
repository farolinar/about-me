pipeline {
    agent { label 'docker' }        // run on our agent (label set in Phase 1)

    tools {
        nodejs 'node20'             // provision the managed tool named "node20" (see Step 2)
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm        // fetch the repo that contains this Jenkinsfile
            }
        }

        stage('Install') {
            steps {
                sh 'node --version' // proves the managed tool is on PATH
                sh 'npm --version'
                sh 'npm ci'         // clean, lockfile-exact install (preferred in CI over npm install)
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'  // runs "vite build" -> produces dist/
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'dist/**', fingerprint: true
        }
    }
}
