import BlinkingComponent from "../../../components/BlinkingComponent/BlinkingComponent";
import Typewriter from "../../../components/Typewriter/Typewriter";
import Page from "../../layouts/Page/Page";
import "./About.min.css";
import CodeWindow from "../../../components/CodeWindow/CodeWindow";

function About({thisRef}) {
  return (
    <>
      <Page main={true}>
        <div className="about-outer" ref={thisRef}>
          <div className="section text">
            <div className="headline greeting">
              <BlinkingComponent>
                <div className="text-prompt">&gt;&nbsp;</div>
              </BlinkingComponent>
              <div>Greetings<span>,</span></div>
            </div>
            <div className="headline my-name">My name is Farolina Rahmatunnisa</div>
            <div className="introduction">
              I am a{" "}
              <Typewriter
                dataTypes={[
                  "Back End Developer",
                  "Front End Developer",
                  "Full Stack Developer",
                  "Software Engineer",
                  "Programmer",
                  "Student",
                  "Gamer",
                ]}
              />
              {/* <Typewriter dataTypes={[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]}/> */}
            </div>
            <div className="content">
              <p>
                Software Engineer fueled by curiosity and a passion for
                knowledge, with a solid educational foundation from the
                University of Indonesia. Committed to pushing boundaries in
                technology, I thrive on challenges and am always eager to deepen
                my understanding of the ever-evolving landscape of software
                engineering.
              </p>

              <p>Let's code the future together.</p>
            </div>
          </div>
          <div className="section visual">
            <CodeWindow title="main.go">
              <pre><code>
<span className="keyword">package</span> main{"\n"}
{"\n"}
<span className="keyword">var</span> farol = <span className="type">Profile</span>&#123;{"\n"}
  {"   "}Code: []<span className="type">string</span>&#123;<span className="string">"Go"</span>, <span className="string">"Javascript"</span>, <span className="string">"Python"</span>&#125;,{"\n"}
    {"   "}FrontEnd: []<span className="type">string</span>&#123;<span className="string">"React"</span>, <span className="string">"Next.js"</span>&#125;,{"\n"}
    {"   "}BackEnd: []<span className="type">string</span>&#123;<span className="string">"Go"</span>, <span className="string">"Python"</span>, <span className="string">"Javascript"</span>&#125;,{"\n"}
    {"   "}CloudServices: []<span className="type">string</span>&#123;<span className="string">"GCP"</span>&#125;,{"\n"}
    {"   "}Databases: []<span className="type">string</span>&#123;<span className="string">"PostgreSQL"</span>, <span className="string">"MySQL"</span>, <span className="string">"redis"</span>&#125;,{"\n"}
    {"   "}Misc: []<span className="type">string</span>&#123;&#125;,{"\n"}
  {"\n"}
  {"   "}CurrentFocus: <span className="string">"Cybersecurity would be fun, I think."</span>,{"\n"}
  {"   "}FunFact:      <span className="string">"I'm training to be a sword master"</span>,{"\n"}
&#125;
              </code></pre>
            </CodeWindow>
          </div>
        </div>
      </Page>
    </>
  );
}

export default About;
