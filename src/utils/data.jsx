import KitaBisaImg from "../assets/img/experiences/exp-kitabisa.png"
import KlikdokterImg from "../assets/img/experiences/exp-klikdokter.png"
import CBNImg from "../assets/img/experiences/exp-cbn.avif"
import TapTalkImg from "../assets/img/experiences/exp-taptalk.png"
import { Fragment } from "react"

function CreateExperienceCard(title, place, time, description, img, skills = []) {
    return {
        title: title,
        place: place,
        time: time,
        description: description,
        img: img,
        skills: skills
    }
}

export var Experiences = [
    CreateExperienceCard("Back End Engineer", "Kitabisa", "Jul 2024 - Now", "Developing insurance service - SalingJaga.", KitaBisaImg, ["Go", "SQL"]),
    CreateExperienceCard("Back End Engineer", "Klikdokter - Kalbe", "Jul 2023 - May 2024", "Developed API using Go for Pregnancy and Publishing microservice.", KlikdokterImg, ["Go", "RabbitMQ", "REST APIs", "SQL"]),
    CreateExperienceCard("Application Developer", "CBN", "Mar 2022 - Jun 2023", "Migrated legacy monolithic applications (PHP) to modern microservice architectures using Go for better manageability and flexibility in response to changing business requirements.\nCollaborated closely with frontend developers to develop Medical Claim service using Laravel.", CBNImg, ["Go", "Docker", "Laravel", "SQL"]),
    CreateExperienceCard("Full Stack Developer", "TapTalk.io", "Sep 2019 - Mar 2022", "Developing e-Commerce, Moselo, using React and TapTalk.io products using Go.", TapTalkImg, ["React", "Go", "SQL"])
]

export var CreditsList = [
    <Fragment>Inspirations from <a href="https://pedrorfpacheco.github.io/portfolio/" title="Pedro Pacheco">Pedro</a></Fragment>,
    <a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons</a>,
    <a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons</a>,
    <a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons</a>,
    <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons</a>,
    <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons</a>,
    <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons</a>,
    <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons</a>
]
