import ChronoTimelineItem from "../../../components/ChroneTimelineItem/ChronoTimelineItem";
import ChronoTimeline from "../../../components/ChronoTimeline/ChronoTimeline";
import { Experiences } from "../../../utils/data.jsx";
import Page from "../../layouts/Page/Page";
import "./Experience.css";

function Experience() {
  return (
    <>
      <Page>
        <div className="experience-outer">
          <h1>Experience</h1>
          <ChronoTimeline>
            {Experiences.map((value, index) => {
                return <ChronoTimelineItem type="ExperienceCard" data={value} index={index} lastItem={index == Experiences.length - 1} />
            })}
          </ChronoTimeline>
        </div>
      </Page>
    </>
  );
}

export default Experience;