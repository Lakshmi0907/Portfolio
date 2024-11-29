/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adilakshmi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Adilakshmi Gunapati Portfolio",
    type: "website",
    url: "http://adilakshmig.com/",
  },
};

//Home Page
const greeting = {
  title: "Adilakshmi Gunapati",
  logo_name: "Adilakshmi Gunapati",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/lakshmi0907",
  githubProfile: "https://github.com/lakshmi0907",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/lakshmi0907",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lakshmig757/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:lakshmigunapati77@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Phone",
  //   link: "+1 513-538-7989",
  //   fontAwesomeIcon: "fa fa-phone", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=gmail
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux, Angular",
        "⚡ Optimizing application performance and ensuring seamless user experience through front-end and back-end integration",
        "⚡ Creating application backend in Spring Boot, Node.js",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS and Azure",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Collaborating with stakeholders to translate business requirements into user-friendly designs",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Gunapati",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@gunapati1/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Cincinnati",
      subtitle: "Master's in Information Technology",
      logo_path: "UC Logo.png",
      alt_name: "University of Cincinnati",
      // duration: "2023 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit based Graduate Assistanship Scholarship which is given to top 2% of students in university. I have received award from respected director of our department for consistently best performance in academics.",
      ],
      website_link: "https://www.uc.edu/",
    },
    {
      title: "R.V.R&J.C College of Engineering",
      subtitle: "Bachelor's in Information Technology",
      logo_path: "rvrjc logo.ico",
      alt_name: "R.V.R&J.C College of Engineering",
      // duration: "2017 - 2021",
      descriptions: [
        "⚡ I have taken a variety of courses during my bachelor's degree, focusing on core subjects such as Data Structures and Algorithms, Java Programming, Computer Networking, Database Management Systems (DBMS), and introductory Machine Learning",
        "⚡ Additionally, I gained hands-on experience through projects and assignments that solidified my understanding of these concepts.",
        "⚡ During my time at College, I was also associated with the multimedia department, where I worked on creating documentary films and conducting interviews, demonstrating my versatility and teamwork skills.",
      ],
      website_link: "https://rvrjcce.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "NVIDIA",
      logo_path: "nvidia-logo.png",
      alt_name: "NVIDIA",
      color_code: "#8C151599",
    },
    {
      title: "Java Programming",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.png",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "AWS Certified Developer- Associate",
      subtitle: "AWS",
      logo_path: "aws.png",
      alt_name: "Amazon Web Services",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle: "Microsoft",
      logo_path: "microsoft.webp",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Spring Boot from Zero to Hero",
      subtitle: "Naveen Reddy",
      logo_path: "spring boot.png",
      alt_name: "Spring Boot",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    "I have experience working with both small companies and established organizations as a Full-Stack Developer and Software Engineer. I focus on improving system performance, building scalable solutions, and optimizing user interfaces. I have experience building projects from scratch.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "The Hartford",
          company_url: "https://www.thehartford.com/",
          logo_path: "hartford_logo.png",
          duration: "Jan 2024 - Present",
          description:
            "Worked on improving claims processing efficiency by streamlining validation workflows and ensuring secure handling of claim-related data, leading to faster and more accurate decisions. Simplified access to claims and policy details through improved interfaces, enhancing customer satisfaction by 30%. Optimized premium calculations by refining risk assessment processes and reduced claim processing times, enabling quicker resolutions and better compliance with regulations.",
          color: "#000000",
        },
        {
          title: "Full Stack Developer",
          company: "University of Cincinnati",
          company_url: "https://www.uc.edu/",
          logo_path: "UC Logo.png",
          duration: "Jan 2023 - Dec 2023",
          description:
            "Worked on the TAConnect project to optimize scheduling and appointment booking processes for students and teaching assistants. Designed interactive and user-friendly interfaces, ensuring seamless navigation and engagement. Implemented real-time updates and improved performance through caching and query tuning, achieving faster response times. Focused on automating workflows and gathering user feedback, enhancing overall usability and efficiency.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs_logo.png",
          duration: "Jun 2021 - Dec 2022",
          description:
            "Worked on a banking client project, focusing on enhancing mortgage processing systems to improve efficiency and accuracy. Streamlined data validation workflows and optimized loan approval processes to reduce turnaround times. Ensured compliance with regulatory standards while enhancing user interfaces for seamless customer interactions. These improvements contributed to faster processing and better customer satisfaction.",
          color: "#9b1578",
        },
        {
          title: "Persistent Systems",
          company: "Persistent Systems",
          company_url: "https://www.persistent.com/",
          logo_path: "persistent_logo.avif",
          duration: "Jan 2020 - May 2021",
          description:
            "Worked on improving the efficiency and scalability of the claims processing system for an insurance client. Focused on enhancing response times, ensuring the system could handle increased volumes during peak periods with ease. Streamlined operational processes to reduce deployment times, enabling quicker and more reliable updates across platforms. Improved data handling mechanisms to ensure consistent and accurate processing, boosting overall reliability. Strengthened quality assurance practices to maintain stability and deliver high-quality outcomes for both internal teams and end-users.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Over the past few years, I have worked on several projects that showcase my skills in full-stack development. I have experience building applications from scratch, handling both front-end and back-end development, and deploying them using cloud infrastructure. These projects have helped me apply modern technology tools and best practices to improve system performance and user experience.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Food Ordering App",
      name: "Food Ordering App",
      createdAt: "",
      description: "Developoed this project while learning react.js",
      url: "https://github.com/Lakshmi0907/Food-Ordering-App",
    },
    {
      id: "Pokemon Battleground",
      name: "Pokemon Battleground",
      createdAt: "",
      description: "Developed this porject as a part of companies assessment",
      url: "https://github.com/Lakshmi0907/pokemon-battleground",
    },
    {
      id: "Online Event Management System",
      name: "Online Event Management System",
      createdAt: "",
      description: "Minor project",
      url: "https://github.com/Lakshmi0907/Online-Event-Management-System",
    },
    {
      id: "Epileptic Seizure Prediction",
      name: "Epileptic Seizure Prediction",
      createdAt: "",
      description: "Capstone Project",
      url: "https://github.com/Lakshmi0907/Epileptic-Seizure-Prediction",
    },
    {
      id: "Image Steganography",
      name: "Image Steganography",
      createdAt: "",
      description: "Capstone Project",
      url: "https://github.com/Lakshmi0907/Steganography",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Details",
    profile_image_path: "contact_details.avif", // Replace with your image file name
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
  contactDetails: {
    linkedin: {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/lakshmig757/",
    },
    email: {
      title: "Email",
      address: "lakshmigunapati77@gmail.com",
    },
    phone: {
      title: "Phone",
      number: "+1 123-456-7890",
    },
    github: {
      title: "GitHub",
      link: "https://github.com/lakshmi0907",
    },
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publications,
  contactPageData,
};
