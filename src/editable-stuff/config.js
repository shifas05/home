// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shifas",
  middleName: "",
  lastName: "Hassan",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shifas05",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shifas-pph/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "",
  imageSize: 375,
  message:
    "My name is Shifas Hassan, I'm a passionate full stack software engineer. I've around 6 years of experience working in the Software industry. My love for technology and a deep-seated curiosity have driven me to explore and create in the ever-evolving world of software.",
  resume: require("../editable-stuff/resume.pdf")
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Hobby ⭐",
  gitHubUsername: "shifas05",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/portfolio-pic.jpg"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    {
      img: require("../editable-stuff/portfolio-pic.jpg"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Laravel", value: 90 },
    { name: "Angular", value: 70 },
    { name: "Data Structures", value: 85 },
    { name: "Python", value: 50 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 90 },
    { name: "Vue", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am presently seeking full-time remote positions in Software Engineering.! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "shifashassanp@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Software Engineer',
      companyName: 'Cubet',
      companyLink : 'https://www.linkedin.com/company/cubet-technologies/',
      companylogo: require('../assets/img/cubet-logo.jpg'),
      date: 'May 2023 – Present',
      workLocationAndType: 'Hybrid'
    },
    {
      role: 'Full Stack Software Engineer',
      companyName: 'BatchService',
      companyLink: 'https://www.linkedin.com/company/batchservice/',
      companylogo: require('../assets/img/batchservice-logo.jpg'),
      date: 'August 2018 – May 2023',
      workLocationAndType: 'Remote'
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
