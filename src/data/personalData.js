// This file contains all the personal information to be displayed on the website
// If any field is left empty, the corresponding section will not be displayed

const personalData = {
  // Basic Information
  name: "Dr. Amit Agrawal",
  jobTitle: "Assistant Professor",
  photo: "https://vnit.ac.in/engineering/ece/wp-content/uploads/2023/06/Amit-Agrawal.jpg", // Replace with your photo URL
  bio: "I am an Assistant Professor in the Department of Electronics and Communication Engineering at VNIT Nagpur, India. I received my B.Tech from NIT Kurukshetra in 2011, and my M.Tech and Ph.D. from IIT Delhi in 2014 and 2019, respectively. My research interests include visible light communication, wireless communication theory, 5G/B5G systems, and cooperative networks. I have previously worked as an Assistant Professor at LNMIIT Jaipur and as a Post-Doctoral Researcher at the University of Cyprus, where I was part of the EU project PRIME.",
  
  // Contact Information
  contact: {
    email: "amit.agarwal@ece.vnit.ac.in",
    phone: "0712-2801919",
    location: "ECE department, VNIT Nagpur, Nagpur, 440010, Maharstra, India",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    // twitter: "https://twitter.com/"
  },

  // Educational Background
  education: [
    {
      degree: "Ph.D. in Wireless Communication",
      institution: "IIT Delhi",
      year: "2019",
      // description: "Specialized in --"
    },
    {
      degree: "M.Tech in Communication",
      institution: "IIT Delhi",
      year: "2014",
      // description: "Focus on Data Science and Neural Networks"
    },
    {
      degree: "B.Tech in ELECTRONICS AND COMMUNICATIONS ENGINEERING",
      institution: "NIT Kurukshetra",
      year: "2011",
      
      // description: "Minor in Mathematics"
    }
  ],
    // Course Materials
  courseMaterials: [
    {
      title: "Introduction to Machine Learning in Healthcare",
      description: "A comprehensive course covering the fundamentals of ML applications in healthcare",
      thumbnail: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      materials: [
        {
          title: "Course Slides",
          link: "https://example.com/slides"
        },
        {
          title: "Lecture Videos",
          link: "https://example.com/videos"
        },
        {
          title: "Programming Assignments",
          link: "https://example.com/assignments"
        }
      ]
    },
    {
      title: "Advanced Neural Networks",
      description: "Deep dive into neural network architectures and their applications",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      materials: [
        {
          title: "Video Lectures",
          link: "https://example.com/lectures"
        },
        {
          title: "Course Notes",
          link: "https://example.com/notes"
        },
        {
          title: "Research Papers",
          link: "https://example.com/papers"
        }
      ]
    }
  ],
   // Publications
 publications: [
  {
    title: "Achievable Rate Region of the Zero-Forcing Precoder in a 2 × 2 MU-MISO Broadcast VLC Channel with Per-LED Peak Power Constraint and Dimming Control",
    authors: "A. Agarwal, S. K. Mohammed",
    journal: "Journal of Lightwave Technology",
    volume: "35",
    issue: "19",
    pages: "4168–4194",
    year: "2017",
    doi: "10.1109/JLT.2017.2753662"
  }

],


  // Awards and Honors
  awards: [
    {
      title: "MHRD GATE scholarship",
      organization: "MHRD, India",
      // year: "2023",
      // category: "Research Excellence",
      description: "--"
    },
    {
      title: "Postdoc scholarship at University of Cyprus",
      organization: "University of Cyprus",
      // year: "2022",
      // category: "Early Career Achievement",
      // description: "Awarded for innovative work in healthcare machine learning applications."
    },
    
  ],
  
  
  // Research and Interest Areas
  researchInterests: [
    {
      title: "Wireless Coomunication",
      // description: "--"
    },
    {
      title: "Underwater Optical wireless communication",
      // description: "--"
    },
    {
      title: "Visible light communication",
      // description: "--"
    },
    {
      title: "Intelligent refecting surfaces",
      // description: "--"
    },
    {
      title: "Unmanned Aerial Vehical based communication",
      // description: "--"
    },
    {
      title: "Information theoretical aspct of wiress communication systems",
      // description: "--"
    }
  ],
  
  // Patents
  // patents: [
  //   {
  //     title: "--",
  //     number: "--",
  //     year: "--",
  //     description: "--"
  //   },
  //   {
  //     title: "--",
  //     number: "--",
  //     year: "--",
  //     description: "--"
  //   }
  // ],
  
  // Projects
  projects: [
    {
      title: "Energy Efficient Optical Wieleesss Communication",
      year: "2023",
      description: "Developed a novel energy-efficient optical wireless communication system that significantly reduces power consumption while maintaining high data rates.",
      funding:"VNIT Nagpur",
      role: "Principal Investigator",

      // link: "https://example.com/project1"
    },
   
  ]
};

export default personalData;
