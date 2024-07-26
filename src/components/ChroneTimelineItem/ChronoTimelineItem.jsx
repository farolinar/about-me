import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./ChronoTimelineItem.css"
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

function ChronoTimelineItem({ children, type, data, index, lastItem = false }) {
    const expCardRef = useRef()
    function returnContentType() {
        switch (type) {
            case "ExperienceCard":
                return <ExperienceCard data={data} key={`${data}-${index}`} />
        
            default:
                break;
        }
    }

    const { ref, inView, entry } = useInView({
        rootMargin: "-300px",
      });
  
    useEffect(() => {
        if (expCardRef.current !== undefined) {
            if (inView) {
                console.log(inView)
                console.log(expCardRef)
                expCardRef.current.querySelector(".experience-card-outer").classList.add("slide-in");
            }
        }
    }, [inView, expCardRef])

    return <TimelineItem className="chrono-timeline-item" ref={ref} key={`timeline-item- ${type}-${index}`}>
        <TimelineSeparator>
            <TimelineDot variant="outlined" />
            {lastItem ? "" : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent ref={expCardRef}>
            { returnContentType() }
        </TimelineContent>
    </TimelineItem>
}

export default ChronoTimelineItem;
