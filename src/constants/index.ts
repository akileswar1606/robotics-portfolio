import { getAssetPath } from "@/lib/utils";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export const PROFILE = {
  name: "AKILESWAR P A",
  role: "Automation & Robotics Engineer",
  headline: "Nearly 2 Years R&D in Industrial Robotics (ABB OmniCore/IRC5, FANUC), Beckhoff TwinCAT 3 PLC, EtherCAT, Motion Control, C# PC SDK & ROS 2 Jazzy",
  summary: "Automation and Robotics Engineer with nearly 2 years of R&D experience in industrial robot programming, PLC control, motion control, and system integration for NDT, pick-and-place, and conveyor automation. Hands-on with ABB OmniCore/IRC5, FANUC, Beckhoff TwinCAT 3, Structured Text, EtherCAT, EtherNet/IP, and Modbus. Develops C# applications with the ABB Robot PC SDK, custom HMIs, and ROS 2 Jazzy projects. Experience includes commissioning, troubleshooting, and integration of robot, PLC, servo, and PC-based systems.",
  email: "akileswar4455@gmail.com",
  linkedin: "https://www.linkedin.com/in/akileswarpa/",
  github: "https://github.com/akileswar1606",
  whatsapp: "+91 93614 45784",
  location: "Kanyakumari, Tamil Nadu, India",
  portfolio: "https://akileswar1606.github.io/robotics-portfolio/",
  image: getAssetPath("/images/akileswar-fanuc.jpg"),
};

export const CERTIFICATIONS = [
  {
    title: "Robotics",
    issuer: "IIT Madras (NPTEL)",
    date: "2023",
  },
  {
    title: "Certificate Course in Electrical CAD (AutoCAD)",
    issuer: "Cad Desk",
    date: "Apr 2025",
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "IIT Madras (NPTEL)",
    date: "May 2023",
    link: "https://internalapp.nptel.ac.in/NOC/NOC23/SEM1/Ecertificates/106/noc23-cs20/Course/NPTEL23CS20S1465045904054776.jpg",
  },
  {
    title: "Digital Logic Design / Digital Circuit",
    issuer: "IIT Kharagpur (NPTEL)",
    date: "2023",
  },
  {
    title: "Smart India Hackathon Finalist",
    issuer: "Ministry of Education / AICTE",
    date: "Dec 2024",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "Jun 2024",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=6287ac05-292d-4974-bf5a-e08652108991&",
  },
  {
    title: "Smart Grid: Basics To Advanced Technologies",
    issuer: "NPTEL",
    date: "Dec 2023",
  },
  {
    title: "Associate in IT Foundation Skills (Java)",
    issuer: "Infosys Springboard",
    date: "Dec 2023",
  },
  {
    title: "Learnathon Certification",
    issuer: "GUVI Geek Networks, IITM Research Park",
    date: "Feb 2024",
    license: "PA122lwh34Sb10m937",
    link: "https://www.guvi.in/share-certificate/PA122lwh34Sb10m937",
  },
];

export const SKILLS = [
  {
    category: "Industrial Robotics",
    items: [
      "ABB OmniCore",
      "ABB IRC5",
      "RAPID Programming",
      "RobotStudio",
      "FANUC TP Programming",
      "FANUC ROBOGUIDE",
      "UOP Signal Mapping",
      "Doosan DRL",
      "DART Studio",
      "Tool & Workobject Calibration",
    ],
  },
  {
    category: "PLC & Motion Control",
    items: [
      "Beckhoff TwinCAT 3",
      "Structured Text (IEC 61131-3)",
      "Ladder Logic",
      "EtherCAT",
      "I/O Mapping & Interlocks",
      "Sequence Logic",
      "Closed-Loop Position Control",
      "Servo Axes & Motor Parameters",
      "External Axes & Linear Tracks",
    ],
  },
  {
    category: "Industrial Communication",
    items: [
      "EtherNet/IP",
      "Modbus RTU",
      "TCP/IP Socket Messaging",
      "Digital I/O Synchronization",
      "Analog Sensor Integration",
      "PLC–Robot Handshake",
    ],
  },
  {
    category: "Software & HMI",
    items: [
      "C# (.NET)",
      "ABB Robot PC SDK",
      "Python",
      "C++",
      "ABB AppStudio (HTML/CSS/JS)",
      "IRC5 ScreenMaker",
      "MATLAB & Simulink",
      "SoMove Drive Config",
    ],
  },
  {
    category: "ROS 2 (Robot Operating System)",
    items: [
      "ROS 2 Jazzy",
      "Python (rclpy)",
      "Nodes, Topics & Subscriptions",
      "Custom Messages & Services",
      "Launch Files",
      "Turtlesim Simulation",
      "Kinematics & Coordinate Frames",
    ],
  },
  {
    category: "Electrical & System Design",
    items: [
      "Electrical Panel Wiring",
      "AutoCAD Electrical",
      "Safety Wiring & Interlocks",
      "Electrical Design Validation",
      "Optocoupler Circuit Design",
      "BOM & Schematics",
    ],
  },
];

export const PROJECTS = [
  {
    id: "fanuc-conveyor-automation",
    title: "FANUC Robot & Beckhoff Conveyor Automation System",
    description: "Engineered automated robotic cell utilizing FANUC industrial robot and Beckhoff TwinCAT 3 PLC. Programmed FANUC TP routines, configured UOP signal mapping, implemented EtherCAT conveyor logic in Structured Text, and developed C# automation sequence logic with servo axis commissioning.",
    tags: ["FANUC TP", "ROBOGUIDE", "Beckhoff TwinCAT 3", "EtherCAT", "C#", "Servo Control"],
    category: "Industrial Robotics",
    period: "Jul 2026 - Oct 2026",
    highlight: "Industrial R&D Project",
  },
  {
    id: "abb-shell-automation",
    title: "ABB Robot-Based Shell Automation & NDT System",
    description: "Developed an ABB OmniCore pick-and-place system for shell handling using RAPID and RobotStudio with modular routines for multiple shell variations. Built custom C# applications with ABB Robot PC SDK to execute RAPID procedures and monitor live telemetry, integrating with Beckhoff PLC and NDT software via digital I/O.",
    tags: ["ABB OmniCore", "RAPID", "Robot PC SDK", "C#", "Beckhoff PLC", "NDT Integration"],
    category: "Industrial Robotics",
    period: "Feb 2026 - Jun 2026",
    highlight: "Industrial R&D Project",
  },
  {
    id: "dual-abb-composite-ndt",
    title: "Dual ABB Robot Composite NDT Testing System",
    description: "Configured and commissioned an ABB OmniCore system synchronized with external axis and linear track for composite aerospace NDT inspection. Engineered RAPID motion paths, TCP/IP data exchange, EtherNet/IP Beckhoff PLC communication, and a bespoke HTML/CSS/JS HMI in ABB AppStudio.",
    tags: ["ABB OmniCore", "Linear Track", "AppStudio HMI", "EtherNet/IP", "TCP/IP", "Composite NDT"],
    category: "Industrial Robotics",
    period: "Nov 2025 - Jan 2026",
    highlight: "Aerospace / Industrial NDT",
  },
  {
    id: "drdo-dual-abb-ndt",
    title: "DRDO Dual ABB Robot NDT Testing System",
    description: "Collaborated on defense R&D NDT automation for DRDO. Configured servo motors, calibrated robot base and linear track on ABB IRC5, established EtherNet/IP communications with Beckhoff PLC, designed ScreenMaker HMI screens, and implemented TwinCAT water-management with analog sensors.",
    tags: ["DRDO Defense R&D", "ABB IRC5", "ScreenMaker HMI", "Beckhoff PLC", "Analog Sensors"],
    category: "Defense & R&D",
    period: "Aug 2025 - Nov 2025",
    highlight: "DRDO Defense Project",
  },
  {
    id: "microwave-ndt-rocket-motor",
    title: "Portable Microwave NDT System for Rocket Motor",
    description: "Designed electrical and control architecture for a portable microwave non-destructive testing unit. Established Modbus RTU communication between controller and motor drives, and programmed TwinCAT Structured Text motion logic with inclinometer feedback achieving ±0.1 mm closed-loop position control.",
    tags: ["Beckhoff TwinCAT", "Modbus RTU", "Closed-Loop Control", "±0.1mm Precision", "Panel Wiring"],
    category: "Precision Motion & NDT",
    period: "Jan 2025 - Aug 2025",
    highlight: "Rocket Motor NDT",
  },
  {
    id: "ros2-master-turtle-catcher",
    title: "ROS 2 Jazzy – Master Turtle Catcher (Turtlesim)",
    description: "Built a multi-node autonomous pursuit ROS 2 project where a master turtle pursues and intercepts targets in Turtlesim. Architected custom messages, services, topic publish/subscribe networks, and launch automation in Python (rclpy).",
    tags: ["ROS 2 Jazzy", "Python (rclpy)", "Custom Services", "Nodes & Topics", "Launch Files"],
    category: "ROS 2 & Autonomous Systems",
    period: "Personal Project",
    highlight: "Autonomous ROS 2",
  },
  {
    id: "mining-safety-helmet",
    title: "Mining Safety Helmet with LoRa Telemetry",
    description: "Engineered an IoT-enabled miner safety helmet prototype transmitting environmental gas concentration and vital telemetry over long-range LoRa wireless communication to ensure subterranean worker safety.",
    tags: ["Arduino Uno", "LoRa Wireless", "Gas Sensors", "Embedded IoT", "Worker Safety"],
    category: "Embedded & IoT",
    period: "Dec 2024 - Feb 2025",
    highlight: "Final-Year Project",
  },
  {
    id: "silver-ion-testing-kit",
    title: "Silver Ion Colorimetric Test Kit (SIH Finalist)",
    description: "Built a portable colorimetric silver-ion testing device utilizing an ESP32 and TCS34725 optical sensor with HSV analysis pipeline and cloud telemetry for immediate water contamination assessment. Selected as Smart India Hackathon Finalist.",
    tags: ["ESP32", "TCS34725", "Cloud Telemetry", "SIH Finalist", "Colorimetry"],
    category: "Embedded Hardware",
    period: "Aug 2024 - Dec 2024",
    highlight: "SIH Finalist",
  },
  {
    id: "smart-parking-iot",
    title: "Smart Parking Management System Using IoT",
    description: "Engineered smart city parking management with real-time slot occupancy tracking using ultrasonic and IR sensor arrays interfaced with ESP32 microcontrollers, cutting driver search times and emissions.",
    tags: ["IoT", "ESP32", "Sensors", "Smart Cities"],
    category: "Embedded & IoT",
    period: "Dec 2023 - Apr 2024",
  },
  {
    id: "chlorine-testing-kit",
    title: "Personalized Residual Chlorine Testing Kit",
    description: "Designed portable Type-C rechargeable water diagnostic device with Arduino Nano and TCS34725 sensor, analyzing reagent shift via Google Colab linear regression calibration (manufactured under ₹2,500).",
    tags: ["Arduino", "Sensors", "Linear Regression", "Water Analytics"],
    category: "Embedded Hardware",
    period: "Aug 2024 - Dec 2024",
  },
];

export const EXPERIENCE = [
  {
    company: "Dhvani Research and Development Solutions",
    subtitle: "R&D for Robotic Automation and Control Systems",
    location: "Chennai, Tamil Nadu, India",
    period: "Jan 2025 - Present",
    roles: [
      {
        title: "Associate Technical Engineer – Control Systems and Robotics",
        period: "Mar 2026 – Present",
      },
      {
        title: "Technical Engineer – Control Systems and Robotics",
        period: "Apr 2025 – Feb 2026",
      },
      {
        title: "Graduate Engineer Trainee (GET) – Automation Systems",
        period: "Jan 2025 – Mar 2025",
      },
    ],
    summary: "Nearly 2 years of R&D experience in industrial robot programming, PLC control, motion control, and system integration for NDT, pick-and-place, and conveyor automation. Hands-on with ABB OmniCore/IRC5, FANUC, Beckhoff TwinCAT 3, Structured Text, EtherCAT, EtherNet/IP, and Modbus.",
    systems: [
      {
        title: "FANUC Robot-Based Automation System",
        period: "Jul 2026 – Oct 2026",
        points: [
          "Developed and modified FANUC TP programs for robotic automation and conveyor operations.",
          "Implemented Beckhoff PLC conveyor logic in Structured Text, including EtherCAT communication, I/O mapping, interlocks, and sequence logic.",
          "Configured FANUC robot signals and UOP mapping for PLC-based operation; simulated and validated programs in FANUC ROBOGUIDE.",
          "Developed C# automation-sequence logic and configured Beckhoff servo axes, motor parameters, and I/O; supported commissioning, testing, and troubleshooting.",
        ],
      },
      {
        title: "ABB Robot-Based Shell Automation System",
        period: "Feb 2026 – Jun 2026",
        points: [
          "Developed an ABB OmniCore pick-and-place system for shell handling using RAPID and RobotStudio, with modular programs for multiple shell types.",
          "Implemented safety interlocks, manual/automatic sequences, and error handling.",
          "Built C# applications using the ABB Robot PC SDK to execute RAPID procedures and monitor robot status; integrated the robot, Beckhoff PLC, and NDT software through digital I/O.",
        ],
      },
      {
        title: "Dual ABB Robot Composite NDT Testing System",
        period: "Nov 2025 – Jan 2026",
        points: [
          "Configured and commissioned an ABB OmniCore robot system with external axis and linear track for composite NDT inspection.",
          "Programmed inspection paths in RobotStudio/RAPID and established EtherNet/IP communication with Beckhoff PLC; implemented RAPID tasks for TCP/IP data exchange.",
          "Developed a custom HMI in ABB AppStudio using HTML, CSS, and JavaScript; completed safety wiring and electrical design validation.",
        ],
      },
      {
        title: "DRDO Dual ABB Robot NDT Testing System",
        period: "Aug 2025 – Nov 2025",
        points: [
          "Configured servo motors and external axes; established EtherNet/IP communication between ABB robot and Beckhoff PLC.",
          "Calibrated robot base and track on ABB IRC5, developed ScreenMaker HMI screens, and programmed robot paths in RobotStudio/RAPID.",
          "Implemented Beckhoff PLC water-management logic and integrated analog sensors for water-level monitoring.",
        ],
      },
      {
        title: "Portable Microwave NDT System for Rocket Motor",
        period: "Jan 2025 – Aug 2025",
        points: [
          "Designed electrical and control systems for a portable microwave non-destructive testing unit and implemented Modbus communication between controller and motor drives.",
          "Developed TwinCAT Structured Text motion-control logic using inclinometer feedback; achieved ±0.1 mm closed-loop position control.",
          "Completed electrical panel wiring and system integration.",
        ],
      },
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.E., Electrical and Electronics Engineering",
    institution: "Mepco Schlenk Engineering College",
    location: "Virudhunagar, Tamil Nadu",
    period: "2021 – 2025",
    score: "CGPA: 7.9 / 10",
    details: "Specialized in Electrical Machines, Robotics & Control Systems, Microcontrollers, and Industrial Automation.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "K.A.B.D.M Hr. Sec School",
    location: "Tamil Nadu",
    period: "2019 – 2021",
    score: "Percentage: 87.5%",
    details: "Mathematics, Physics, Chemistry, and Computer Science foundation.",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "K.A.B.D.M Hr. Sec School",
    location: "Tamil Nadu",
    period: "2018 – 2019",
    score: "Percentage: 88.6%",
    details: "Science and Mathematics distinction.",
  },
];
