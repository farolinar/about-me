import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./ChronoTimelineItem.min.css"
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import IntersectionObserverItem from "../IntersectionObserverItem/IntersectionObserverItem";

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

    return <IntersectionObserverItem 
            func = {() => {expCardRef.current.querySelector(".experience-card-outer").classList.add("slide-in");}}
            rootMargin="-300px"
            childRef={expCardRef}
        >
        <TimelineItem className="chrono-timeline-item" key={`timeline-item- ${type}-${index}`}>
        <TimelineSeparator>
            <TimelineDot variant="outlined" />
            {lastItem ? "" : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent ref={expCardRef}>
            { returnContentType() }
        </TimelineContent>
    </TimelineItem>
    </IntersectionObserverItem>
}

export default ChronoTimelineItem;
