import { Chip, Grid } from "@mui/material";
import "./ExperienceCard.css"
import VaporwaveWindow from "../VaporwaveWindow/VaporwaveWindow";

function ExperienceCard({data, ref}) {
    return <VaporwaveWindow 
        ref={ref}
        className="experience-card-outer"
        title=""
    >
        <div className="head">
            <div className="image">
                <img src={data.img} alt={data.place} />
            </div>
            <div className="text">
                <p className="title">{data.title}</p>
                <p className="place">{data.place}</p>
                <p className="time">{data.time}</p>
            </div>
        </div>
        <p className="description">{data.description}</p>
        <div className="skills">
            <p>Skills</p>
            <Grid container spacing={1} >
                {data.skills.map((value, index) => {
                    return <Grid item key={index}>
                        <Chip label={value} className="skill" />
                    </Grid>
                })}
            </Grid>
        </div>
    </VaporwaveWindow>
}

export default ExperienceCard;
