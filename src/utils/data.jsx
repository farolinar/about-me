import KitaBisaImg from '../assets/img/experiences/exp-kitabisa.png';
import KlikdokterImg from '../assets/img/experiences/exp-klikdokter.png';
import CBNImg from '../assets/img/experiences/exp-cbn.avif';
import TapTalkImg from '../assets/img/experiences/exp-taptalk.png';
import UniversityOfIndonesiaImg from '../assets/img/university_of_indonesia.png';

// eslint-disable-next-line react-refresh/only-export-components
function CreateExperienceCard(title, place, time, description, img, skills = []) {
  return {
    title: title,
    place: place,
    time: time,
    description: description,
    img: img,
    skills: skills,
  };
}

export var Experiences = [
  CreateExperienceCard(
    'Back End Engineer',
    'Kitabisa',
    'Jul 2024 - Now',
    'Developing insurance service - SalingJaga, a life insurance product featuring a shared-cost system. This innovative approach allows participants to pool their resources collectively, making life insurance more accessible and affordable while providing financial protection to its members.',
    KitaBisaImg,
    ['Go', 'SQL']
  ),
  CreateExperienceCard(
    'Back End Engineer',
    'Klikdokter - Kalbe',
    'Jul 2023 - May 2024',
    'Developed Pregnancy and Publishing microservices using Go for Kalbe\'s Hallobumil app. This API facilitates monitoring of pre-pregnancy, pregnancy, and post-pregnancy stages, providing users with valuable insights throughout their pregnancy journey.',
    KlikdokterImg,
    ['Go', 'RabbitMQ', 'REST APIs', 'SQL']
  ),
  CreateExperienceCard(
    'Application Developer',
    'CBN',
    'Mar 2022 - Jun 2023',
    'Migrated legacy monolithic applications (PHP) to modern microservice architectures using Go for better manageability and flexibility in response to changing business requirements.\nCollaborated closely with frontend developers to develop Medical Claim service using Laravel.',
    CBNImg,
    ['Go', 'Docker', 'Laravel', 'SQL']
  ),
  CreateExperienceCard(
    'Full Stack Developer',
    'TapTalk.io',
    'Sep 2019 - Mar 2022',
    'Developed e-commerce platform - moselo.com - for handcrafted gifts using React, creating a dynamic and user-friendly shopping experience. Additionally, developing API for dashboards and promotional websites for TapTalk.io\'s B2B products, including their omnichannel platform and SMS/OTP services, enhancing visibility and functionality for their business solutions.',
    TapTalkImg,
    ['React', 'Go', 'SQL']
  ),
];

export var CreditsList = [
  <a key="code-icons" target="_blank" href="https://www.flaticon.com/free-icons/code" title="code icons" rel="noreferrer">Code icons</a>,
  <a key="moon-icons" target="_blank" href="https://www.flaticon.com/free-icons/moon" title="moon icons" rel="noreferrer">Moon icons</a>,
  <a key="weather-icons" target="_blank" href="https://www.flaticon.com/free-icons/weather" title="weather icons" rel="noreferrer">Weather icons</a>,
  <a key="linkedin-icons" target="_blank" href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons" rel="noreferrer">Linkedin icons</a>,
  <a key="github-icons" target="_blank" href="https://www.flaticon.com/free-icons/github" title="github icons" rel="noreferrer">Github icons</a>,
  <a key="hamburger-icons" target="_blank" href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons" rel="noreferrer">Hamburger icons</a>,
  <a key="close-icons" target="_blank" href="https://www.flaticon.com/free-icons/close" title="close icons" rel="noreferrer">Close icons</a>,
];

// eslint-disable-next-line react-refresh/only-export-components
function CreateEducationItem(name, year, activities, courses, bg) {
  return { name, year, activities, courses, bg };
}

export var Educations = [
  CreateEducationItem(
    'University of Indonesia',
    '2016 - 2020',
    ['Robotic Team'],
    [
      'Data Structures and Algorithms',
      'Web Design & Programming',
      'Operating Systems',
      'Game Development',
      'Image Processing',
      'Systems Programming',
      'Intelligent Systems',
      'Computer Networks',
      'Natural Language Processing',
      'Machine Learning',
      'Data Science & Analytics',
      'Functional Programming',
      'Cryptography & Information Security',
      'Web Services and Applications',
    ],
    UniversityOfIndonesiaImg
  ),
];
