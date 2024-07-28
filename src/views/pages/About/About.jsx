import BlinkingComponent from "../../../components/BlinkingComponent/BlinkingComponent";
import Typewriter from "../../../components/Typewriter/Typewriter";
import Page from "../../layouts/Page/Page";
import "./About-min.css";

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
          <div className="section visual"></div>
        </div>
      </Page>
    </>
  );
}

export default About;
