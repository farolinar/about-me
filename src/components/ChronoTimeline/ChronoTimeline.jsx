import { useEffect, useRef, useState } from "react";
import "./ChronoTimeline.css"
import Timeline from '@mui/lab/Timeline'

function ChronoTimeline({ children }) {

    return <Timeline>
        {children}
    </Timeline>
}

export default ChronoTimeline;