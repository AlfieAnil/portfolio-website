import MilesEaserImage from '../assets/MilesEasier.png';
import URLFlowChart from '../assets/URLFlowChart.png';
import ParishNavigatorImage from '../assets/ParishNavigators.png';
import ParishionerPortal from '../assets/ParishionerPortal.png';
import Pravachakasabdam from '../assets/Pravachakasabdam.png';
import ParishWebsite from '../assets/StEdwardTheConfessor.png';

export default [
    {
        title: 'Miles Easier',
        description: 'I would always forget to track my mileage when I went for travels during work, therefore, I made an app to solve this problem. My mileage is tracked and recorded for me',
        stack: ['React-Native', 'Firebase', 'Firestore'],
        github: 'https://github.com/AlfieAnil/mileage-tracker',
        link: 'https://apps.apple.com/gb/app/miles-easier/id6504173823',
        img: MilesEaserImage
    },
    {
        title: 'URL Shortener',
        description: 'While implementing SMS funtionality into my Parish Management Software, I noticed that sending attachments was difficult, as the attachment URL was too long to look clean. Therefore I made a quick and simple URL Shortener',
        stack: ['React-Native', 'Mongo-DB'],
        github: 'https://github.com/AlfieAnil/generate-short-url',
        img: URLFlowChart
    },
    {
        title: "ParishNavigator",
        description: "Working part-time as a Parish Administrator, I noticed that there were several tasks which would be made easier through software. I developed this software to make my life easier at work (now others are using it also!).\n Some Features: Auto-Replies to contact forms, Member Management, Online Sacramental Application Forms, Collection Management (and much more...!)",
        stack: ['ReactJS', 'Python-Flask', 'Firebase', 'Firestore'],
        link: "https://app.parishnavigator.com",
        img: ParishNavigatorImage
    },
    {
        title: "Parishioner Portal",
        description: "An app to allow Parishioners to change their personal information, roles they sign up to, and view the Readings of the day for Holy Mass. An extension of the ParishNavigator Software.",
        stack: ['ReactJS', 'Python-Flask', 'Firebase', 'Firestore'],
        link: "https://parishioner.parishnavigator.com/sign-up",
        img: ParishionerPortal
    },
    {
        title: "Pravachakasabdam App",
        description: "This organization (based in Kerala, India) had a Website, but did not have a mobile application. I developed this app for this organization, allowing users to have instant updates of News through push notifications. I also developed a CMS system for this in C++",
        stack: ['Flutter', 'Python-Flask', 'MySQL', 'C++'],
        link: "https://apps.apple.com/gb/app/pravachaka-sabdam/id1548328257",
        img: Pravachakasabdam
    },
    {
        title: "St Edward the Confessor Parish Website",
        description: "This is a development of the website that I initially developed for this Parish when I was 11 years old. This website now links with my ParishNavigator software to centralise forms.",
        stack: ['HTML', 'CSS', 'JS'],
        link: "https://stedwardtheconfessor.church",
        img: ParishWebsite
    }

]