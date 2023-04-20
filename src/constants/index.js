import {
  mobile,
  backend,
  creator,
  web,



  carrent,
  jobit,
  tripguide,

  
  
} from "../assets";
import purple from "../assets/company/purple.png"
import spheresoft from "../assets/company/spheresoft.png"
import tcs from "../assets/company/tcs.png"
import techm from "../assets/techm.png"
import wipro from "../assets/company/wipro.png"
import renaultnissan from "../assets/company/renaultnissan.png"
import huddlai from "../assets/company/huddlai.png"
import capgemini from "../assets/company/capgemini.png"





import ibm from "../assets/ibm.png"


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Previous Internships",
  },
  {
    id: "contact",
    title: "Register for 2k23",
  }
];

const services = [
  {
    title: "Emerging Languages",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Artificial Intelligence",
    icon: backend,
  },
  {
    title: "DS and Algorithms",
    icon: creator,
  },
];

const technologies = [
  {
    name: "IBM",
    icon: ibm,
  },

  {
    name: "TCS",
    icon: tcs,
  },
  {
    name: "Techm",
    icon: techm,
  },
  {
    name: "wipro",
    icon: wipro,
  },
  {
    name: "Renault nissan",
    icon: renaultnissan,
  },
  {
    name: "huddleai",
    icon: huddlai,
  },
  {
    name: "capgemini",
    icon: capgemini,
  },
  
];

const experiences = [
  {
    title: "Hands On session",
    iconBg: "#383E56",
    icon: purple,
    points: [
      "The first part of the session would focus on introducing the interns to emerging programming languages like Rust, their key features, and how they can be used",
      "The second part of the session would cover the basics of data science techniques such as data preprocessing, feature engineering, and model selection",
      "The third part of the session would involve a hands-on microproject that would require the interns to apply the knowledge gained in the first two parts of the session.",
      "The final part of the session would involve the interns presenting their microproject to the group, followed by feedback and discussion. Dr. Gaurav Raina would provide feedback on the technical aspects of the project as well as the overall presentation skills of the interns",
    ],
  },
  {
    title: "Assisted Team Assignments",
    iconBg: "#383E56",
    icon: purple,
    points: [
      "The first step in the team assignment process would be to divide the interns into groups based on their interests, skill levels, and experience with the technologies covered in the session. ",
      "Once the teams are formed, they would be assigned a microproject related to the technologies covered in the session",
      "The teams would be expected to collaborate and work together to complete the microproject. They would be encouraged to share their knowledge and expertise, divide tasks effectively, and communicate regularly to ensure that everyone is on the same page.",
      "all teams would receive feedback on their work to help them continue improving their skills",
    ],
  },
  {
    title: "Competetive Coding",
    iconBg: "#383E56",
    icon: purple,
    points: [
      "The competitive coding event would be designed as a timed challenge where the interns would be given a set of coding problems to solve within a specified time limit.",
      "Each problem would be assigned a certain number of points based on its difficulty level.",
      "The interns would earn points based on how many problems they solve correctly and how quickly they do so.",
      "The interns would be allowed to use any resources they wish to solve the coding problems, including online references, books, and their colleagues.",
    ],
  },
  {
    title: "Hacknights",
    iconBg: "#383E56",
    icon: purple,
    points: [
      "The hacknights would be designed as collaborative work sessions where the interns would have the opportunity to work together on projects related to the technologies covered in the session.",
      "The interns would have access to a range of resources during the hacknights, including online references, books, and their colleagues.",
      "They would be able to work on projects of their choosing, or they could collaborate with other teams to work on more challenging or complex projects.",
      "The hacknights would provide a great opportunity for the interns to network with each other and build relationships that could continue beyond the session. They would be able to share their experiences, learn from each other, and build a sense of community around the technologies covered in the session.",
    ],
  },
  {
    title: "Games and Fun activities",
    iconBg: "#383E56",
    icon: purple,
    points: [
      "To kick off the event, there would be icebreaker games designed to help the interns get to know each other better and build a sense of camaraderie.",
      "Throughout the event, there would be trivia games related to the technologies covered in the session.",
      "To break up the intensity of the coding and microproject work, there would be a scavenger hunt that would require the interns to explore the surrounding area and solve clues related to the technologies covered in the session.",
      "To provide a break from the technical work and encourage social bonding, there would be group outings to local attractions",
    ],
  },
  {
    title: "Group Discussion's",
    iconBg: "#383E56",
    icon: purple,
    points: [
      "The group discussions would cover a wide range of topics related to the technologies covered in the session",
      "The interns would be divided into smaller groups of 4-6 people to encourage more meaningful and productive discussions.",
      "At the end of each day, there would be an open forum where the interns would come together to share their thoughts, insights, and questions related to the technologies covered in the session. ",
      "Throughout the event, the interns would be encouraged to reflect on their learning and provide feedback on the sessions, activities, and discussions.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
