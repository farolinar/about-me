import { Chip, Grid } from "@mui/material";
import "./ExperienceCard.css"

function ExperienceCard({data}) {
    return <div className="experience-card-outer">
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
                    return <Grid item>
                        <Chip label={value} className="skill" />
                    </Grid>
                })}
            </Grid>
        </div>
        
    </div>
}

export default ExperienceCard;
