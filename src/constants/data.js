import { LIME } from './theme';

import Bullwaves from '../assets/brand_logos/Bullwaves.png';
import TFTLogo from '../assets/brand_logos/TFT Logo.png';
import TwistedTruth from '../assets/brand_logos/Twisted_Truth.jpg';
import LogoBelong from '../assets/brand_logos/logo_belong.svg';
import Starknet from '../assets/brand_logos/Starknet.png';
import dm from '../assets/brand_logos/logo_dm.png';
import botflow from '../assets/brand_logos/botflow.png';
import pivota from '../assets/brand_logos/pivota2.png';

import Alex from '../assets/client_images/Alex.jpeg';
import Ishaan from '../assets/client_images/Ishaan.jpg';
import Josh from '../assets/client_images/JOSH.jpg';
import Matt from '../assets/client_images/Matt.jpeg';
import Monty from '../assets/client_images/Monty.jpeg';
import Obaidur from '../assets/client_images/Obaidur.jpg';

export const HERO_CLIENTS = [Matt, Ishaan, Alex, Josh, Obaidur, Monty];

export const NAV_LINKS = ["Home", "Work", "Testimonials", "Case Studies", "Contact"];

export const BRANDS_ROW1 = [
    { img: Bullwaves },
    { img: TFTLogo },
    { img: TwistedTruth },
    { img: LogoBelong },
    { img: Starknet },
    { img: dm },
    { img: botflow },
    { img: pivota },
];

export const BRANDS_ROW2 = [];

export const TESTIMONIALS = [
    {
        text: "Eleven Media is hands down the best editing team I've worked with. They consistently deliver premium content for my high-ticket clients with unmatched speed and precision.",
        name: "Matthew Lowe",
        role: "Real Estate Consultant",
        color: "#ef4444",
        image: Matt
    },
    {
        text: "As a founder, I need content that resonates and converts. For over 8 months, Eleven Media has been our secret weapon for flawless, high-impact video production.",
        name: "Ishaan Manga",
        role: "Founder, MyCareerMate",
        color: LIME,
        image: Ishaan
    },
    {
        text: "The turnaround time is incredible. We often have tight deadlines at Bullwaves, and Eleven Media always comes through with top-tier edits that exceed our expectations.",
        name: "Alex",
        role: "Bullwaves",
        color: "#60a5fa",
        image: Alex
    },
    {
        text: "I've worked with many editors, but the level of communication and attention to detail from Eleven Media is on another level. They truly understand our brand's voice.",
        name: "Josh Houston",
        role: "Founder, EyesOnMedia",
        color: "#f97316",
        image: Josh
    },
    {
        text: "Perfect for my professional requirements. They manage to make medical content engaging and easy to follow while maintaining a very polished and trustworthy feel.",
        name: "Dr. Obaidur Rahman",
        role: "Orthopaedic surgeon",
        color: "#a78bfa",
        image: Obaidur
    },
    {
        text: "Eleven Media streamlined our entire content workflow. Their project management is seamless, allowing us to focus on scaling while they handle the heavy lifting of editing.",
        name: "Monty Lane",
        role: "Founder, Botflow",
        color: "#ef4444",
        image: Monty
    },
];

export const STARTER = ["Basic Project management", "High Quality Edits", " Basic Motion Graphics", "Packages for small number of edits", "Thumbnails"];
export const GROWTH = ["Dedicated Project management", "High Quality Edits", "Premium Motion Graphics", "Packages for high number of edits", "Thumbnails and Reel Covers", "Faster Turn around time", "Monthly Feedback Calls"];
