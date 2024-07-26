import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./ChronoTimelineItem.css"

function ChronoTimelineItem({ children, type, data, lastItem = false }) {
    function returnContentType() {
        switch (type) {
            case "ExperienceCard":
                return <ExperienceCard data={data} />
        
            default:
                break;
        }
    }

    return <TimelineItem className="chrono-timeline-item">
        <TimelineSeparator>
            <TimelineDot variant="outlined" />
            {lastItem ? "" : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
            { returnContentType() }
        </TimelineContent>
    </TimelineItem>
}

export default ChronoTimelineItem;
