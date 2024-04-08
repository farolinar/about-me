import BlinkingComponent from "../../../components/BlinkingComponent/BlinkingComponent";
import Typewriter from "../../../components/Typewriter/Typewriter";
import Page from "../../layouts/Page/Page";
import "./About-min.css";

function About() {
  return (
    <>
      <Page>
        <div className="about-outer">
          <div className="section text">
            <div className="headline">
              <BlinkingComponent>
                  <div className="text-prompt">&gt;&nbsp;</div>
              </BlinkingComponent>
              <div>
                Greetings,
              </div>
            </div>
            <div className="headline">
              My name is Farolina Rahmatunnisa
            </div>
            <div className="introduction">
              I am a <Typewriter dataTypes={[ "Back End Developer", "Front End Developer", "Full Stack Developer", "Programmer", "Student", "Gamer" ]}/>
              {/* <Typewriter dataTypes={[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]}/> */}
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet aliquam orci, ac porta dolor. Curabitur nibh
                velit, volutpat ut turpis vel, convallis venenatis nisi. Cras
                lacinia rhoncus molestie. Nam eget urna convallis, tincidunt
                nulla ac, sagittis ex.
              </p>
              <p>
                Nulla elementum, nibh ut placerat varius, massa turpis varius
                nulla, id bibendum neque felis at nulla. Cras tristique purus
                magna, id faucibus tellus facilisis sed. Nam a felis sem.
              </p>
            </div>
          </div>
          <div className="section visual"></div>
        </div>
      </Page>
    </>
  );
}

export default About;
