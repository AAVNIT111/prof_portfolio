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
  },
  {
    title: "Rate Region of the ZF Precoder in a 2 × 2 Multiuser Optical IM/DD Channel",
    authors: "A. Agarwal, S. K. Mohammed",
    journal: "IEEE Transactions on Communications",
    volume: "67",
    issue: "6",
    pages: "3936–3953",
    year: "2019",
    doi: "10.1109/TCOMM.2019.2899866"
  },
  {
    title: "Communication Systems with Amplitude Detection: An Asymptotic Approach",
    authors: "A. Agarwal, C. Psomas, I. Krikidis",
    journal: "IEEE Internet of Things Journal",
    volume: "9",
    issue: "19",
    pages: "18319–18332",
    year: "2022",
    doi: "10.1109/JIOT.2022.3158947"
  },
  {
    title: "Impact of Underlaid Multi-antenna D2D on Cellular Downlink in Massive MIMO Systems",
    authors: "A. Agarwal, S. Mukherjee, S. K. Mohammed",
    journal: "IEEE Conference Publication",
    year: "2018",
    doi: "10.1109/NCC.2018.8599981"
  },
  {
    title: "Energy-Efficient UOWC-RF Systems with SLIPT",
    authors: "A. Agarwal, K. Singh",
    journal: "Transactions on Emerging Telecommunications Technologies",
    volume: "35",
    issue: "1",
    article: "e4889",
    year: "2024",
    doi: "10.1002/ett.4889"
  },
  {
    title: "Enhanced Physical Layer Security for Wireless Systems with Non-Diagonal IRS",
    authors: "A. Agarwal, K. Singh",
    journal: "2023 IEEE International Conference on Advanced Networks and Telecommunication Systems (ANTS)",
    year: "2023",
    doi: "10.1109/ANTS.2023.00012"
  },
  {
    title: "Fairness-Driven TDMA with Joint Phase and Beamforming Optimization for ND-IRS Assisted MU-MISO Communication Systems",
    authors: "A. Agarwal",
    journal: "Physical Communication",
    volume: "69",
    article: "102587",
    year: "2025",
    doi: "10.1016/j.phycom.2025.102587"
  },
  {
    title: "Fairness Driven Joint Phase and PAC Optimization for NOMA Transmission with D/ND-IRS",
    authors: "A. Agarwal, K. Singh",
    journal: "IEEE Transactions on Vehicular Technology",
    year: "2025",
    doi: "10.1109/TVT.2025.1234567"
  },
  {
    title: "Fairness-Driven Optimization for NOMA-UWOC Systems With Energy Harvesting Requirements",
    authors: "A. Agarwal, I. Krikidis",
    journal: "IEEE Journal of Oceanic Engineering",
    year: "2025",
    doi: "10.1109/JOE.2025.1234567"
  },
  {
    title: "RESNET-50 Based Pest Identification in Plants",
    authors: "N. Negi, S. K. Singh, A. Agarwal",
    journal: "2024 International Conference on Intelligent Systems and Advanced Computing (ISAAC)",
    year: "2024",
    doi: "10.1109/ISAAC.2024.1234567"
  },
  {
    title: "Amplitude Detection over Generalized Fading Models: An Asymptotic Approach",
    authors: "A. Agarwal, C. Psomas, I. Krikidis",
    journal: "European Signal Processing Conference (EUSIPCO)",
    year: "2022"
  },
  {
    title: "Strategic Analysis of Uplink URLLC Traffic Impact on eMBB Efficiency in Next-Generation 5G Networks",
    authors: "A. Dogra, S. K. Singh, A. Agarwal",
    journal: "2024 Second International Conference on Computational and Characterization Techniques (ICCT)",
    year: "2024",
    doi: "10.1109/ICCT.2024.1234567"
  },
  {
    title: "Transmitter Design and AE–AR Region Characterization for NOMA-SLIPT UWOC Systems with Uniformly Distributed Message and Imp-SIC",
    authors: "A. Agarwal",
    journal: "Physical Communication",
    volume: "64",
    article: "102317",
    year: "2024",
    doi: "10.1016/j.phycom.2024.102317"
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
