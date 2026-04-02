import LaptopIcon from "@mui/icons-material/Laptop";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LinkIcon from "@mui/icons-material/Link";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ContentType } from '../features/profile/components/connect/connectSlice'

export const config = {
  drawer: {
    width: 240,
  },
  fullname: "Jessie Brian Revil",
  title: [
    {
      text: "I am Jessie Brian Revil",
    },
    {
      text: "Fullstack Developer",
    },
    {
      text: "Oracle Certified Professional",
    },
  ],
  links: [
    {
      text: "Experiences",
      path: "/experiences",
      icon: LaptopIcon,
    },
    {
      text: "Skills",
      path: "/skills",
      icon: LightbulbIcon,
    },
    {
      text: "Endorsements",
      path: "/testimonials",
      icon: ThumbUpIcon,
    },
    {
      text: "Online Certificates",
      path: "/onlineCert",
      icon: WorkspacePremiumIcon,
    },
    {
      text: "Connect",
      path: "/connect",
      icon: LinkIcon,
    },
    {
      text: "Projects",
      path: "/projects",
      icon: BuildIcon,
    },
    {
      text: "About",
      path: "/about",
      icon: InfoIcon,
    },
  ],
};

export const home = {
  title: "Hi! I'm Jessie",
  subtitles: [
    "Senior Fullstack Developer",
    "Java Developer",
    "React Developer",
    "Oracle Certified Professional",
  ],
  currentlyWorkingOn: "HSI Skillko — Safety Compliance and Training Management Platform",
};

export const experiences = {
  title: "Experiences",
  contents: [
    {
      date: "Jun 2024 - present",
      icon: LaptopIcon,
      title: "HSI - Skillko",
      subtitle: "Senior Fullstack Developer",
      link: "https://skillko.com/",
      description:
        "Responsible for maintaining and enhancing the Skillko workforce management platform.",
    },
    {
      date: "Dec 2018 - Jun 2024",
      icon: LaptopIcon,
      title: "Hong Leong Bank",
      subtitle: "Java Developer",
      link: "https://www.hlb.com.my",
      description:
        "Enhanced Client Facing Retail Internet Banking Web Application. Built Branch Remittance Web Application from ground-up",
    },
    {
      date: "Apr 2018 – Nov 2018",
      icon: LaptopIcon,
      title: "TrustArc",
      subtitle: "Analyst Programmer",
      link: "https://trustarc.com/",
      description:
        "Enhanced Online Behavioral Advertising, Cookie Consents Web Application Portal, and GDPR Webhooks Services",
    },
    {
      date: "Jun 2014 - Mar 2018",
      icon: LaptopIcon,
      title: "Alliance Software Inc",
      subtitle: "Senior Technical Specialist I",
      link: "https://www.alliance.com.ph/index.html",
      description:
        "Developed and managed cutting edge software solutions for several Japanese Companies. Responsibilities also include unit testing and maintenance.",
    },
    {
      date: "April 2013 – May 2013",
      icon: LaptopIcon,
      title: "Ingenuity Global Consulting, Inc.",
      subtitle: "Intern",
      link: "https://www.ingenuity.ph/",
      description: "Developed a Book Sharing Django Python Web Application",
    },
  ],
};

export const skills = {
  title: "Skills",
  certifications: [
    {
      title: "Oracle Certified Associate",
      link: "https://www.credly.com/badges/e83285e4-7ec2-40cf-ade0-a298ae4f1b79",
    },
    {
      title: "Oracle Certified Professional",
      link: "https://www.credly.com/badges/00e2bd5c-3a37-46b4-b6e2-20532e6165d0",
    },
  ],
  technologies: [
    {
      title: "Java",
      link: "https://www.java.com/en/",
    },
    {
      title: "HTML",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      title: "CSS",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      title: "SVN",
      link: "https://subversion.apache.org/",
    },
    {
      title: "GIT",
      link: "https://git-scm.com/",
    },
    {
      title: "Oracle DB",
      link: "https://www.oracle.com/database/",
    },
    {
      title: "J2EE",
      link: "https://www.oracle.com/java/technologies/appmodel.html",
    },
    {
      title: "Spring",
      link: "https://spring.io/",
    },
    {
      title: "Thymeleaf",
      link: "https://www.thymeleaf.org/",
    },
    {
      title: "Hibernate",
      link: "https://hibernate.org/",
    },
    {
      title: "Mybatis",
      link: "https://mybatis.org/mybatis-3/",
    },
    {
      title: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "MySQL",
      link: "https://www.mysql.com/",
    },
    {
      title: "Spring Web Flow",
      link: "https://spring.io/projects/spring-webflow",
    },
    {
      title: "Primefaces",
      link: "https://www.primefaces.org/",
    },
    {
      title: "IBM WebSphere",
      link: "https://www.ibm.com/products/websphere-application-server",
    },
    {
      title: "SOAP",
      link: "https://www.w3schools.com/xml/xml_soap.asp",
    },
    {
      title: "JUnit",
      link: "https://junit.org/",
    },
    {
      title: "REST",
      link: "https://w3.org/2001/sw/wiki/REST",
    },
    {
      title: "Swagger",
      link: "https://swagger.io/",
    },
    {
      title: "JSF",
      link: "https://www.oracle.com/java/technologies/javaserverfaces.html",
    },
    {
      title: "JBoss",
      link: "https://www.jboss.org/",
    },
    {
      title: "Geb",
      link: "https://www.gebish.org/",
    },
    {
      title: "Groovy",
      link: "https://groovy-lang.org/",
    },
    {
      title: "Node.js",
      link: "https://nodejs.org/en/",
    },
    {
      title: "React",
      link: "https://reactjs.org/",
    },
    {
      title: "React Router",
      link: "https://reactrouter.com/en/main",
    },
    {
      title: "React Redux",
      link: "https://react-redux.js.org/",
    },
    {
      title: "SASS",
      link: "https://sass-lang.com/",
    },
    {
      title: "TypeScript",
      link: "https://www.typescriptlang.org//",
    },
    {
      title: "Python",
      link: "https://www.python.org/",
    },
    {
      title: "Selenium",
      link: "https://www.selenium.dev/",
    },
    {
      title: "GWT",
      link: "https://www.gwtproject.org/",
    },
    {
      title: "PostgreSQL",
      link: "https://www.postgresql.org/",
    },
    {
      title: "SQLite",
      link: "https://www.sqlite.org/index.html",
    },
  ],
};

export const connect = {
  title: "Let's Connect",
  message: "Hello! 👋 Let's begin by selecting from the topics below.",
  default: {
    text: "",
    keywords: [],
    answer: "I'm sorry. I didn't quite catch that.",
    options: {},
  },
  default2: {
    text: "",
    keywords: [],
    answer: "Let's begin by selecting from the topics below.",
    options: { widget: "options", delay: 1500 },
  },
  connects: [
    "ChatGPT",
    "DALL·E",
    "email",
    "linkedin",
    "github",
    "stackoverflow",
    "hackerrank",
  ],

  openAI: {
    exit: {
      text: "Exit",
      context: {
        text: "Exit",
        keywords: [],
        answer: "Hello! 👋 Let's begin by selecting from the topics below.",
        options: { widget: "options", delay: 1500 },
      },
    },
    answers: {
      tokenSetting: {
        answer:
          "Great! Now the token is set, input your queries below.",
        options: { widget: "openai" },
      },
    },
    options: ["Exit"],
    chat: {
      text: "ChatGPT",
    }, 
    image: {
      text: "DALL·E",
    }    
    
  },
  
  context: [
    {
      text: "ChatGPT",
      keywords: ["ChatGPT", "gpt"],
      answer: "ChatGPT requires OpenAI API Key. Kindly input the key below.",
      options: { widget: "openAIWidget" },
      card: {
        header: "",
        content: "",
        subcontent:
          "This open source, single-page application profile does not collect your OpenAPI API keys. Your keys are used only within this session and are deleted as soon as you end the session. You can learn how to generate the API key by clicking the link below.",
        link: "https://elephas.app/blog/how-to-create-openai-api-keys-cl5c4f21d281431po7k8fgyol0",
      },
    },
    {
      text: "DALL·E",
      keywords: ["DALL·E", "gpt"],
      answer: "DALL·E requires OpenAI API Key. Kindly input the key below.",
      options: { widget: "openAIWidget" },
      card: {
        header: "",
        content: "",
        subcontent:
          "This open source, single-page application profile does not collect your OpenAPI API keys. Your keys are used only within this session and are deleted as soon as you end the session. You can learn how to generate the API key by clicking the link below.",
        link: "https://elephas.app/blog/how-to-create-openai-api-keys-cl5c4f21d281431po7k8fgyol0",
      },
    },
    {
      text: "email",
      keywords: ["email", "email address", "mail"],
      answer: "Here you go",
      options: { widget: "card" },
      card: {
        header: "eMail",
        content: "jessie.revil04@gmail.com",
        contentType: ContentType.TEXT,
        subcontent:
          "Send me a message using this email. I will try my best to respond the soonest possible. 😁",
        link: "mailto:jessie.revil04@gmail.com",
      },
    },
    {
      text: "linkedin",
      keywords: ["linkedin", "socmed", "social network"],
      answer: "Here you go",
      options: { widget: "card" },
      card: {
        header: "LinkedIn",
        content: "jessie-brian-revil",
        contentType: ContentType.TEXT,
        subcontent: "Visit, ping, or send me a connect invite. 😎",
        link: "https://www.linkedin.com/in/jessie-brian-revil/",
      },
    },
    {
      text: "github",
      keywords: ["github", "git", "projects"],
      answer: "Here you go",
      options: { widget: "card" },
      card: {
        header: "GitHub",
        content: "jessierevil04",
        contentType: ContentType.TEXT,
        subcontent:
          "This is the repository for my public personal projects. 🤭",
        link: "https://github.com/jessierevil04",
      },
    },
    {
      text: "stackoverflow",
      keywords: ["stackoverflow", "stack", "overflow"],
      answer: "Here you go",
      options: { widget: "card" },
      card: {
        header: "Stack Overflow",
        content: "jessie-brian-revil",
        contentType: ContentType.TEXT,
        subcontent: "You may check my Stack Overflow activities from here 😬",
        link: "https://stackoverflow.com/users/7187887/jessie-brian-revil",
      },
    },
    {
      text: "hackerrank",
      keywords: ["hackerrank", "Hacker Rank", "Hacker", "Rank"],
      answer: "Here you go",
      options: { widget: "card" },
      card: {
        header: "Hacker Rank",
        content: "jessie_revil04",
        contentType: ContentType.TEXT,
        subcontent: "I sometimes solve some programming challenges here 🤓",
        link: "https://www.hackerrank.com/jessie_revil04",
      },
    },
    {
      text: "hello",
      keywords: ["hello", "start", "reset"],
      answer: "Hello! 👋 Let's begin by selecting from the topics below.",
      options: { widget: "options" },
    },
    {
      text: "hi",
      keywords: ["hi"],
      answer: "Hi! 👋 Let's begin by selecting from the topics below.",
      options: { widget: "options" },
    },
    {
      text: "name",
      keywords: ["name"],
      answer:
        "Hi! 👋 I am Jessie Brian Revil. Know me more by selecting from the topics below.",
      options: { widget: "options" },
    },
    {
      text: "name",
      keywords: ["name"],
      answer:
        "Hi! 👋 I am Jessie Brian Revil. Know me more by selecting from the topics below.",
      options: { widget: "options" },
    },
  ],
};

export const about = {
  title: "About Me",
  content: [
    {
      title: "<Choice/>",
      content: [
        "Making decisions back then was difficult, particularly when it comes to choosing my college major. Should I pursue a career in dentistry like my mother? Should I choose a career in pharmaceutical sciences as my father did? The Bachelor of Science in Nursing was also one of my choices with how well it was at the time. Out of all of these healthcare profession prospects, I decided to pursue a degree in computer science.",
        "I've known since a young age that decisions should be carefully considered. I'm aware of one personal flaw: my memory is poor. I am also aware that I valued problem-solving in my high school math and computer courses. These factors made me incline toward choosing to enroll in a course that deals with these topics.",
      ],
    },
    {
      title: "<Career/>",
      content: [
        "I have expertise refining some existing projects, building projects from ground - up, and conducting research and development with a functional prototype thanks to my years of working with several companies. For these initiatives, a variety of programming language and technological combinations were employed. Web development apps, some internal and some external, make up the majority of my work.",
        "My first job was with an outsourcing firm that offered services to its Japanese customers. Working with instructions and deliverables in Japanese was a difficult experience. I thank my former company for assisting me in assimilating the Japanese work culture, which has helped advance my professional career.",
        "I work for one of the major banks in Malaysia. I feel honoured to have helped with the creation of the remittance services for the internet banking system. Working for this organisation has allowed me to gain more knowledge in the area of financial technology. Although working on an enterprise project can be intimidating, having a strong foundation and a strong team will undoubtedly result in a successful career.",
      ],
    },
    {
      title: "<Lifestyle/>",
      content: [
        "It is indisputable that computer programming plays a significant role in my life. There was a time when I took pleasure in responding to Stack Overflow queries or submitting issues to GitHub projects. A nice way to decompress is to watch a movie or TV show. Marvel's MEU and its numerous films amuse me. Furthermore, I work out in our gym in the morning to keep myself in shape.",
      ],
    },
    {
      title: "<Growth/>",
      content: [
        "I have a list of both my short-term and long-term goals on my personal Kanban board. I can create a more realistic strategy to accomplish my goals and a better picture of who I will be in the future. I occasionally work through programming tasks on some of the online technical assessment websites to refresh my memory. I periodically work on modest personal projects using technologies I've never used before in order to vary my technological toolset. It's true that technology is always changing. It's essential to invest in oneself if one wants to keep up with the changes.",
      ],
    },
  ],
};

export const projects = {
  title: "Projects",
  contents: [
    {
      name: "JSON Formatter",
      description:
        "A client-side JSON formatter, which keeps all data stay on your browser, and are never forwarded to any backend server. This allows it to be a user-friendly service for anybody who needs good looking and well-formatted JSON data for their web or mobile app project - without compromising security or risking privacy.",
      url: "https://jessierevil04.github.io/json-formatter/",
      img: "/profile/img/dalle/programmer.png",
    },
    {
      name: "XML Formatter",
      description:
        "A client-side XML formatter, which keeps all data stay on your browser, and are never forwarded to any backend server. This allows it to be a user-friendly service for anybody who needs good looking and well-formatted XML data for their web or mobile app project - without compromising security or risking privacy.",
      url: "https://jessierevil04.github.io/xml-formatter/",
      img: "/profile/img/dalle/programmer2.png",
    },
  ],
};

export const onlineCertifications = {
  title: "Online Certificates",
  sources: [
    {
      title: "Udemy",
      certificates: [
        {
          title: "Agile Crash Course: Agile Project Management; Agile Delivery",
          link: "https://www.ude.my/UC-SBGYYHNA",
        },
        {
          title: "React JS, Angular & Vue JS - Quickstart & Comparison",
          link: "https://www.ude.my/UC-K04DOWHM",
        },
        {
          title: "IntelliJ IDEA Tricks to Boost Productivity for Java Devs",
          link: "https://www.ude.my/UC-HXZNJV00",
        },
        {
          title: "Acumen Presents: Sarah Robb O'Hagan on Competitive Advantage",
          link: "https://www.ude.my/UC-8SJQZ9W1",
        },
        {
          title: "Productivity and Time Management for the Overwhelmed",
          link: "https://www.ude.my/UC-3Z9LJ1TD",
        },
        {
          title: "Happiness Psychology: 5 Proven Tips",
          link: "https://www.ude.my/UC-KC3LHFG3",
        },
      ],
    },
    {
      title: "Pluralsight",
      certificates: [
        { 
          title: "Java: Writing Readable and Maintainable Code",
          type: "pdf",
          link: "/profile/pdf/pluralsight/1.pdf"
        },
        { 
          title: "Defensive Coding in Java",
          type: "pdf",
          link: "/profile/pdf/pluralsight/2.pdf"
        },
        { 
          title: "Java Refactoring: Best Practices",
          type: "pdf",
          link: "/profile/pdf/pluralsight/3.pdf"
        },
        { 
          title: "SOLID Software Design Principles in Java 8",
          type: "pdf",
          link: "/profile/pdf/pluralsight/4.pdf"
        },
        { 
          title: "Effective Email Communication",
          type: "pdf",
          link: "/profile/pdf/pluralsight/5.pdf"
        },
        { 
          title: "Team Time Management Techniques",
          type: "pdf",
          link: "/profile/pdf/pluralsight/6.pdf"
        },
        { 
          title: "Risk Management",
          type: "pdf",
          link: "/profile/pdf/pluralsight/7.pdf"
        },
        { 
          title: "The Art of Delivering Quality Software Quickly: CodeMash",
          type: "pdf",
          link: "/profile/pdf/pluralsight/8.pdf"
        },
        { 
          title: "Design Patterns in Java: Creational",
          type: "pdf",
          link: "/profile/pdf/pluralsight/9.pdf"
        },
        { 
          title: "How to Run Effective Meetings",
          type: "pdf",
          link: "/profile/pdf/pluralsight/10.pdf"
        },
        { 
          title: "Perspectives from Responding to Other Outbreaks including SARS, Monkeypox, and Influenza",
          type: "pdf",
          link: "/profile/pdf/pluralsight/11.pdf"
        },
        { 
          title: "Spring Framework: Spring 5 Fundamentals",
          type: "pdf",
          link: "/profile/pdf/pluralsight/12.pdf"
        },
        { 
          title: "A Practical Guide to Staying Healthy during COVID-19",
          type: "pdf",
          link: "/profile/pdf/pluralsight/13.pdf"
        },
        { 
          title: "Slowing Contagion",
          type: "pdf",
          link: "/profile/pdf/pluralsight/14.pdf"
        },
        { 
          title: "Curing Diseases & DNA",
          type: "pdf",
          link: "/profile/pdf/pluralsight/15.pdf"
        },
        { 
          title: "Pandemics and Resilient Cities",
          type: "pdf",
          link: "/profile/pdf/pluralsight/16.pdf"
        },
        {
          title: "Leadership in the Time of COVID-19",
          type: "pdf",
          link: "/profile/pdf/pluralsight/17.pdf"
        },
      ],
    },
  ],
};

export const testimonials = {
  title: "Endorsements",
  note: "Skill endorsements sourced from LinkedIn · as of April 2026",
  linkedinUrl: "https://www.linkedin.com/in/jessie-brian-revil/",
  contents: [
    {
      name: "Arden Latraca",
      role: "Software Developer",
      linkedin: "https://www.linkedin.com/in/denzanitized93/",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQFn_BYjtwUtxA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732023509724?e=1776902400&v=beta&t=wvjV1ooEeyskTnH8d2P6bA5reI8Qq1fWgfULgRdaBYk",
      initials: "AL",
    },
    {
      name: "Eduardo Esternon",
      role: "Senior Software Engineer at Zeald",
      linkedin: "https://www.linkedin.com/in/eduardo-esternon/",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQF6xGXqSRFJ7Q/profile-displayphoto-scale_100_100/B56ZjWqFjkHcAc-/0/1755948022597?e=1776902400&v=beta&t=QvMDZ7onGUrDhoSpm-nZ-bjA6VOI8VALvZ3lRhm82F0",
      initials: "EE",
    },
    {
      name: "Erwin Robles Jr",
      role: "iOS Developer",
      linkedin: "https://www.linkedin.com/in/erwin-robles-jr-820402a6/",
      photo: "https://media.licdn.com/dms/image/v2/C5603AQEb5zss_0ZgTw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1609269637592?e=1776902400&v=beta&t=zVdEbLYwTaYTk8UTy4TwCMx7PZhUf1OQ6Ahcg484LAY",
      initials: "ER",
    },
    {
      name: "Hazel Fernandez",
      role: "Senior Technical Specialist II at Alliance Software Inc.",
      linkedin: "https://www.linkedin.com/in/hazel-fernandez-07ab0663/",
      photo: "https://media.licdn.com/dms/image/v2/C5603AQEzhZSHAPkJOw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517559408045?e=1776902400&v=beta&t=5Lc5l7SdshDZuNBHBk-asJWhm7mnX-uZfJ_lmqgSp-s",
      initials: "HF",
    },
    {
      name: "Jake Pomperada, PhD.",
      role: "IT Project Manager & Freelance Software Engineer",
      linkedin: "https://www.linkedin.com/in/jake-pomperada-phd-aaa2603/",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQHLPNIIwzoUzg/profile-displayphoto-shrink_100_100/B56Za5lkiAGUAY-/0/1746870358533?e=1776902400&v=beta&t=lZr7QUYu0P4XBB-j-1WsUoOaQPIO8Fq9-z5cDDkDhiw",
      initials: "JP",
    },
    {
      name: "Jasper Adlaon",
      role: "Software Developer",
      linkedin: "https://www.linkedin.com/in/strawhatjas/",
      photo: "https://media.licdn.com/dms/image/v2/C5103AQE2hX6ZTd4tMg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1569939875233?e=1776902400&v=beta&t=Pn9PDVabgKBPD9b1lDlKJsPveFxIDxKAcOMT88WD6_8",
      initials: "JA",
    },
    {
      name: "Kevin Barrosa",
      role: "Full-Stack Software Engineer",
      linkedin: "https://www.linkedin.com/in/kmbarrosa/",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQEOLMhZJ61wIw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1700202892106?e=1776902400&v=beta&t=MHUAl5J4wkh1JizlZAQasw7N91qqOyEuA8AaMAsvH7A",
      initials: "KB",
    },
    {
      name: "Kim Honoridez",
      role: "Principal Solutions Architect at Energy Web",
      linkedin: "https://www.linkedin.com/in/kim-honoridez-9aa16b46/",
      photo: "https://media.licdn.com/dms/image/v2/C5603AQH4lltuQjl9BQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1545100717927?e=1776902400&v=beta&t=WgMimFCCLRn0AysDNizF7wcxA4_KsoORB9Qj_9CpeoM",
      initials: "KH",
    },
    {
      name: "Kiril James Mangubat",
      role: "Software Engineer at Cognizant Japan K.K",
      linkedin: "https://www.linkedin.com/in/kiriljamesmangubat/",
      photo: "https://media.licdn.com/dms/image/v2/C5103AQG8CKOCmHdgBQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1521684008180?e=1776902400&v=beta&t=tynsI_a3-mo72KXAPZGqLW6rsg4t0jTXo2NtLholZig",
      initials: "KM",
    },
    {
      name: "Lylinette Encorporado",
      role: "General Virtual Assistant",
      linkedin: "https://www.linkedin.com/in/lylinette-encorporado-b82480b7/",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQHHFrKzIaqr5A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1671612197899?e=1776902400&v=beta&t=GDvSYkS2UN5NjrBgUOgyL6jZiMSLUt7d_bFENR-IlDs",
      initials: "LE",
    },
    {
      name: "Nathaniel Isaac Tiu Yu",
      role: "Senior Technical Specialist at Alliance Software Inc.",
      linkedin: "https://www.linkedin.com/in/nathaniel-isaac-tiu-yu-b7583473/",
      photo: "https://media.licdn.com/dms/image/v2/C5103AQFezHkgoyy5vg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1531103613229?e=1776902400&v=beta&t=vWGxaYdR6qgCRoe2yh2Pa33CjEgCQ5KrCJcDSXtyn2Q",
      initials: "NT",
    },
    {
      name: "Severino Lorilla Jr.",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/severinolorillajr/",
      photo: "https://media.licdn.com/dms/image/v2/C4E03AQGhL9b27XcL6g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516832572764?e=1776902400&v=beta&t=OsmZby_QRr6Yf5nDa8niszri4mHqcZLvJR4dC0oh3Nc",
      initials: "SL",
    },
    {
      name: "Takayuki Iwata",
      role: "Product Engineer at Stockmark",
      linkedin: "https://www.linkedin.com/in/takayuki-iwata/",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQGaI3PFWOY07w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1729931953090?e=1776902400&v=beta&t=UGYwks01s_WvBCZVyVjfHzwiw3Woclybk7t0wG2lnbk",
      initials: "TI",
    },
    {
      name: "Vhen Joseph",
      role: "Lead AI Product Engineer at YTL AI Labs",
      linkedin: "https://www.linkedin.com/in/vhenjoseph/",
      photo: "https://media.licdn.com/dms/image/v2/D5603AQEvyZuaD6p4eg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1702562721301?e=1776902400&v=beta&t=QTah2KPK3aMT1M8t1QTYGzV62Cx1lBHqBUygffhFpqE",
      initials: "VJ",
    },
  ],
};
