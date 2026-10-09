import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import './ChronoTimelineItem.min.css';
import { useRef } from 'react';
import IntersectionObserverItem from '../IntersectionObserverItem/IntersectionObserverItem';

function ChronoTimelineItem({ type, data, index, lastItem = false }) {
  const expCardRef = useRef(null);

  function returnContentType() {
    switch (type) {
      case 'ExperienceCard':
        return <ExperienceCard data={data} key={`${data}-${index}`} />;
      default:
        return null;
    }
  }

  return (
    <IntersectionObserverItem
      func={() => {
        if (expCardRef.current) {
          const element = expCardRef.current.querySelector('.experience-card-outer');
          if (element) {
            element.classList.add('slide-in');
          }
        }
      }}
      rootMargin="-300px"
      childRef={expCardRef}
    >
      <TimelineItem className="chrono-timeline-item" key={`timeline-item-${type}-${index}`}>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          {lastItem ? '' : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent ref={expCardRef}>{returnContentType()}</TimelineContent>
      </TimelineItem>
    </IntersectionObserverItem>
  );
}

export default ChronoTimelineItem;
