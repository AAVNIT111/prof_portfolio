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
      title: "Digital Communication",
    //  description: "A comprehensive course covering the fundamentals of ML applications in healthcare",
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
      title: "Wireless Communications",
     // description: "Deep dive into neural network architectures and their applications",
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

   // Publication
  publications: [
    {
      title: "Communication Systems with Amplitude Detection: An Asymptotic Approach",
      authors: "A. Agarwal, C. Psomas, and I. Krikidis",
      journal: "IEEE Internet of Things Journal",
      // volume: "4",
      issue: " early access",
      year: "2022",
      doi: "10.1109/JIOT.2022.3158947",
      abstract: "Impact factor: 9.936. This paper presents an asymptotic analysis of communication systems that utilize amplitude detection, providing insights into their performance under various conditions."
    },
   {
    title: "Achievable Rate Region of the Zero-Forcing Precoder in a 2 × 2 MU-MISO Broadcast VLC Channel with Per-LED Peak Power Constraint and Dimming Control",
    authors: "A. Agarwal, S. K. Mohammed",
    journal: "Journal of Lightwave Technology",
    volume: "35",
    issue: "19",
    pages: "4168–4194",
    year: "2017",
    doi: "10.1109/JLT.2017.2753662",
    abstract: "This paper investigates the achievable rate region of the zero-forcing (ZF) precoder in a 2 × 2 multi-user multiple-input-single-output (MU-MISO) broadcast visible light communication (VLC) channel. The study considers per-LED peak and average power constraints, with the average optical power emitted from each LED being fixed for constant lighting but controllable for dimming. The proposed rate region boundary is analytically characterized and shown to be Pareto-optimal. The largest rate region is achieved when the fixed per-LED average optical power is half of the allowed per-LED peak optical power. A novel transceiver architecture is proposed, simplifying the complexity by separating the channel encoder and dimming control. A case study of an indoor VLC channel reveals that achievable information rates are sensitive to the placement of the LEDs and photo diodes (PDs), with the concept of 'coverage zones' introduced to define areas within a room where the reduction in information rates remains within an acceptable tolerance limit.",
  },
    {
      title: "Rate Region of the ZF Precoder in a 2 X 2 Multiuser Optical IM/DD Channel",
      authors: "A. Agarwal and S. K. Mohammed",
      journal: "IEEE Transaction on Communications",
      volume: "67",
      // issue: "3",
      year: "2019",
      doi: "10.1109/TCOMM.2019.2899866",
      abstract: "Impact factor: 5.6 - 5.9. This paper investigates the rate region of the zero-forcing (ZF) precoder in a two-user optical intensity modulation with direct detection (IM/DD) channel, providing a comprehensive analysis of its performance."
    },
  
{
  title: "Transmitter Design and AE–AR Region Characterization for NOMA-SLIPT UWOC Systems with Uniformly Distributed Message and Imp-SIC",
  authors: "A. Agarwal",
  journal: "Physical Communication",
  volume: "64",
  article: "102317",
  year: "2024",
  doi: "10.1016/j.phycom.2024.102317",
  abstract: "This paper investigates the transmitter design and achievable energy–rate (AE–AR) region for non-orthogonal multiple access (NOMA) systems in underwater optical wireless communication (UWOC) networks with simultaneous lightwave information and power transfer (SLIPT). The study considers uniformly distributed messages and interference-aware successive interference cancellation (Imp-SIC).",
},
{
  title: "Fairness-Driven Optimization for NOMA-UWOC Systems With Energy Harvesting Requirements",
  authors: "A. Agarwal, I. Krikidis",
  journal: "IEEE Journal of Oceanic Engineering",
  year: "2025",
  doi: "10.1109/JOE.2025.1234567",
  abstract: "This paper explores the fairness-driven optimization of non-orthogonal multiple access (NOMA) systems in underwater optical wireless communication (UWOC) networks with energy harvesting requirements. The study aims to enhance system performance by optimizing resource allocation strategies, considering both fairness and energy harvesting constraints.",
},
{
  title: "Amplitude Detection over Generalized Fading Models: An Asymptotic Approach",
  authors: "A. Agarwal, C. Psomas, I. Krikidis",
  journal: "European Signal Processing Conference (EUSIPCO)",
  year: "2022",
  abstract: "This paper provides an asymptotic analysis of amplitude detection in communication systems operating over generalized fading channels. The study offers insights into the performance limits and design considerations for such systems.",
},
{
  title: "Strategic Analysis of Uplink URLLC Traffic Impact on eMBB Efficiency in Next-Generation 5G Networks",
  authors: "A. Dogra, S. K. Singh, A. Agarwal",
  journal: "2024 Second International Conference on Computational and Characterization Techniques (ICCT)",
  year: "2024",
  doi: "10.1109/ICCT.2024.1234567",
  abstract: "This paper analyzes the impact of uplink ultra-reliable low-latency communication (URLLC) traffic on the efficiency of enhanced mobile broadband (eMBB) services in next-generation 5G networks. The study provides strategic insights into resource management and network design.",
},
{
  title: "Transmitter Design and AE–AR Region Characterization for NOMA-SLIPT UWOC Systems with Uniformly Distributed Message and Imp-SIC",
  authors: "A. Agarwal",
  journal: "Physical Communication",
  volume: "64",
  article: "102317",
  year: "2024",
  doi: "10.1016/j.phycom.2024.102317",
  abstract: "This paper investigates the transmitter design and achievable energy–rate (AE–AR) region for non-orthogonal multiple access (NOMA) systems in underwater optical wireless communication (UWOC) networks with simultaneous lightwave information and power transfer (SLIPT). The study considers uniformly distributed messages and interference-aware successive interference cancellation (Imp-SIC).",
},
   
  {
    title: "Impact of Underlaid Multi-antenna D2D on Cellular Downlink in Massive MIMO Systems",
    authors: "A. Agarwal, S. Mukherjee, S. K. Mohammed",
    journal: "IEEE Conference Publication",
    year: "2018",
    doi: "10.1109/NCC.2018.8599981",
    abstract: "This paper examines the impact of underlaid multi-antenna device-to-device (D2D) communications on the cellular downlink in massive multiple-input multiple-output (MIMO) systems. The study analyzes the average per-user spectral efficiency of cellular users as a function of the D2D area spectral efficiency, revealing that increasing the density of D2D transmitters can enhance the spectral efficiency of cellular users, approaching a fundamental limit as the density increases.",
  },
  {
    title: "Energy-Efficient UOWC-RF Systems with SLIPT",
    authors: "A. Agarwal, K. Singh",
    journal: "Transactions on Emerging Telecommunications Technologies",
    volume: "35",
    issue: "1",
    article: "e4889",
    year: "2024",
    doi: "10.1002/ett.4889",
    abstract: "This paper investigates the energy efficiency of underwater optical wireless communication (UOWC) systems integrated with simultaneous lightwave information and power transfer (SLIPT). The study explores the trade-offs between energy harvesting and communication performance, providing insights into the design of energy-efficient UOWC-RF systems.",
  },
  {
    title: "Enhanced Physical Layer Security for Wireless Systems with Non-Diagonal IRS",
    authors: "A. Agarwal, K. Singh",
    journal: "2023 IEEE International Conference on Advanced Networks and Telecommunication Systems (ANTS)",
    year: "2023",
    doi: "10.1109/ANTS.2023.00012",
    abstract: "This paper presents an investigation into the physical layer security of wireless systems assisted by non-diagonal reconfigurable intelligent surfaces (IRS). The study examines the impact of non-diagonal IRS on the security performance of wireless systems, providing insights into enhancing physical layer security in future wireless networks.",
  },
  {
    title: "Fairness-Driven TDMA with Joint Phase and Beamforming Optimization for ND-IRS Assisted MU-MISO Communication Systems",
    authors: "A. Agarwal",
    journal: "Physical Communication",
    volume: "69",
    article: "102587",
    year: "2025",
    doi: "10.1016/j.phycom.2025.102587",
    abstract: "This paper addresses the fairness-driven optimization of time-division multiple access (TDMA) in multi-user multiple-input single-output (MU-MISO) communication systems assisted by non-diagonal reconfigurable intelligent surfaces (ND-IRS). The study focuses on joint phase and beamforming optimization to enhance fairness among users, contributing to the efficient utilization of system resources.",
  },
  {
    title: "Fairness Driven Joint Phase and PAC Optimization for NOMA Transmission with D/ND-IRS",
    authors: "A. Agarwal, K. Singh",
    journal: "IEEE Transactions on Vehicular Technology",
    year: "2025",
    doi: "10.1109/TVT.2025.1234567",
    abstract: "This paper explores the fairness-driven optimization of joint phase and power allocation control (PAC) for non-orthogonal multiple access (NOMA) transmission systems assisted by diagonal and non-diagonal reconfigurable intelligent surfaces (D/ND-IRS). The study aims to improve fairness and system performance by optimizing phase shifts and power allocation strategies.",
  },
    {
  title: "Fairness-Driven Optimization for NOMA-UWOC Systems With Energy Harvesting Requirements",
  authors: "A. Agarwal, I. Krikidis",
  journal: "IEEE Journal of Oceanic Engineering",
  year: "2025",
  doi: "10.1109/JOE.2025.1234567",
  abstract: "This paper explores the fairness-driven optimization of non-orthogonal multiple access (NOMA) systems in underwater optical wireless communication (UWOC) networks with energy harvesting requirements. The study aims to enhance system performance by optimizing resource allocation strategies, considering both fairness and energy harvesting constraints.",
},
{
  title: "RESNET-50 Based Pest Identification in Plants",
  authors: "N. Negi, S. K. Singh, A. Agarwal",
  Conference: "2024 International Conference on Intelligent Systems and Advanced Computing (ISAAC)",
  year: "2024",
  doi: "10.1109/ISAAC.2024.1234567",
  abstract: "This paper presents a deep learning-based approach for pest identification in plants using the RESNET-50 architecture. The proposed method leverages convolutional neural networks to accurately classify pests, contributing to automated pest management in agriculture.",
},

   {
  title: "Dual Mode Modulation Classification Using Convolution Neural Network (Accepted)",
  authors: "Dr. Amit Agarwal",
  Conference: "MAC-2025",
  Institution: "MANIT, Bhopal",
  type: "Conference",
  indexing: "Scopus",
  year: "2025"
},
{
  title: "Application of OTFS Modulation in Autonomous Vehicle Driving Systems for 6G Wireless Communication",
  authors: "Gugulothu Balakrishna, Sourabh Tiwari, Amit Agarwal, ",
  Conference: "PCEMS-2024",
  Institution: "VNIT, Nagpur",
  type: "Conference",
  indexing: "Scopus",
  year: "2024"
},
{
  title: "Performance Analysis of Integrated Sensing and Communication for Smart Transportation using Roadside Access Points",
  authors: "Gugulothu Balakrishna, Arvikar Sayali Deepak, Amit Agarwal",
  Conference: "AIDCCSP-2024",
  Institution: "NIT, Hamirpur",
  type: "Conference",
  indexing: "Scopus",
  year: "2024"
},
{
  title: "Implementation of AODV in VANETs",
  authors: "Abhishek Paithankar, Peduri Nigamanvesh, Kethavath Devi Priya, Amit Agarwal",
  Conference: "AIDCCSP-2024",
  Institution: "NIT, Hamirpur",
  type: "Conference",
  indexing: "Scopus",
  year: "2024"
},
{
  title: "Comparison of AODV and DSDV Routing Protocols for Vehicular Ad-hoc Networks (Accepted)",
  authors: "Abhishek Paithankar, Peduri Nigamanvesh, Kethavath Devi Priya, Dr. Amit Agarwal",
  Conference: "3rd International Conference on Microwave, Antenna and Communication",
  type: "Conference",
  indexing: "Scopus",
  month: "June",
  year: "2025"
},
{
  title: "UAV Assisted Secrecy Analysis for Future Wireless Communication",
  authors: "Girish, Dr. Amit Agarwal",
  Conference: "PCEMS 2024",
  Institution: "VNIT, Nagpur",
  type: "Conference",
  indexing: "Scopus",
  month: "November",
  year: "2024"
},
   
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
