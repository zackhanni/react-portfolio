import soma from "../assets/soma-website.webp"
// import fitness from "../assets/fitness-gym.webp"
import ecommerce from "../assets/project3.png"
import uxdesign from "../assets/UX-design-demo.webp"
import emointel from "../assets/emo-intel.png"
import calculator from "../assets/calculator.png"
import visual from "../assets/visual-impairment.png"

const ProjectCardData = [
    {
        imgsrc: soma,
        title: "Recording Studio Website",
        text: "I was hired by Soma to create a responsive service based website with SEO and load speed tests in mind. I deployed the page on netlify and handled DNS",
        view: "https://www.soundslikesoma.com/",
        source: "https://github.com/zackhanni/soundslikesoma"
    },
    // {
    //     imgsrc: fitness,
    //     title: "Fitness Studio",
    //     text: "I built website for a fitness studio with TypeScript and React.js ",
    //     view: "https://github.com/zackhanni/fitness-gym",
    //     source: "https://github.com/zackhanni/fitness-gym"
    // },
    {
        imgsrc: visual,
        title: "Visual Impairment Simulator",
        text: "A website designed to simulate various visual disabilities",
        view: "https://visual-impairment.netlify.app/",
        source: "https://github.com/zackhanni/visual-impairments"
    },
    {
        imgsrc: ecommerce,
        title: "Ecommerce Website Design",
        text: "A product website for a clothing company selling a variety of clothing. Complete with item descriptions, size and color options, and a checkout page.",
        view: "https://zack-ecommerce.netlify.app/",
        source: "https://github.com/zackhanni/ecommerce-website-demo"
    },
    {
        imgsrc: uxdesign,
        title: "UX and UI Design",
        text: "I have experience designing products and apps with Figma. I have a seperate portfolio of designs and case studies featured on Dribble.com",
        view: "https://dribbble.com/zackhanni",
        source: "https://dribbble.com/zackhanni"
    },
    {
        imgsrc: emointel,
        title: "Develop Emotional Intelligence",
        text: "Empowering people with tools to describe their feelings in more detail",
        view: "https://how-are-you-feeling.vercel.app/",
        source: "https://github.com/zackhanni/how-are-you-feeling"
    },
    {
        imgsrc: calculator,
        title: "Zack's Calculator",
        text: "Are you one of the few who think using a built in capculator app is inconvenient? Look no further than my even more inconveniencing JS, HTML, and CSS based calculator app!",
        view: "https://zacks-calculator.netlify.app/",
        source: "https://github.com/zackhanni/js-calculator-app"
    },
    
];

export default ProjectCardData;
