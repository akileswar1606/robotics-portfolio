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
  role: "Robotics & Control Systems Engineer",
  headline: "Specializing in Industrial Automation, ROS2, PLC Integration, and Real-Time Control Systems",
  experience_years: 1,
  projects_count: 15,
  certifications_count: 10,
  email: "akileswarpa@gmail.com",
  linkedin: "https://www.linkedin.com/in/akileswarpa/",
  github: "https://github.com/akileswar1606",
  whatsapp: "+919342718131",
};

export const CERTIFICATIONS = [
  {
    title: "ROS2 Basics & Advanced Kinematics",
    issuer: "ConstructSim / Industrial Robotics Academy",
    date: "2024",
    credentialId: "ROS2-IND-8842",
  },
  {
    title: "Beckhoff TwinCAT 3 PLC Programming & Motion Control",
    issuer: "Beckhoff Automation / Industrial Training",
    date: "2024",
    credentialId: "TC3-PLC-MOT-2024",
  },
  {
    title: "ABB RobotStudio & RAPID Programming",
    issuer: "ABB Robotics",
    date: "2024",
    credentialId: "ABB-RS-RAPID-092",
  },
  {
    title: "Smart India Hackathon (SIH) 2024 & 2023 Finalist",
    issuer: "Ministry of Education, Govt of India",
    date: "2023 - 2024",
    credentialId: "SIH-FIN-MEPCO-24",
  },
  {
    title: "MATLAB & Simulink for Control Systems & Kinematics",
    issuer: "MathWorks",
    date: "2023",
    credentialId: "MW-SIM-CTRL-771",
  },
];

export const SKILLS = [
  {
    category: "Robotics & Motion Control",
    items: ["ROS2", "MoveIt2", "Robot Kinematics", "Swarm Robotics", "RAPID (ABB)", "DRL Trajectory"],
  },
  {
    category: "Industrial Automation",
    items: ["Beckhoff TwinCAT 3", "ABB RobotStudio", "PLC Logic", "HMI / SCADA", "EtherNet/IP", "EtherCAT"],
  },
  {
    category: "Embedded & Hardware",
    items: ["ESP32", "STM32 / Microcontrollers", "UART / SPI / I2C", "PCB Design", "FreeRTOS", "Sensor Fusion"],
  },
  {
    category: "Programming & Languages",
    items: ["C++", "Python", "TypeScript / Node.js", "MATLAB / Simulink", "AutoCAD Electrical"],
  },
  {
    category: "Tools & DevOps",
    items: ["Linux (Ubuntu/RT)", "Docker", "Git / GitHub", "Gazebo Simulation", "CoppeliaSim"],
  },
];

export const PROJECTS = [
  {
    id: "smart-parking",
    title: "Smart Multi-Story Indoor Parking System",
    description: "Designed and prototyped an IoT-enabled automated parking telemetry system using ESP32 controllers, ultrasonic sensor arrays, and a real-time web dashboard for indoor space management.",
    tags: ["IoT", "ESP32", "Web Dashboard", "Embedded Systems", "Sensor Fusion"],
    category: "Embedded Systems",
    links: { github: "https://github.com/akileswar1606/smart-parking-iot" },
  },
  {
    id: "smart-meter",
    title: "SIH Smart Energy Theft & Loss Reduction Meter",
    description: "National SIH Finalist project. Built an intelligent energy monitoring node capable of detecting transmission tampering, line leakage, and real-time load analytics using custom embedded firmware.",
    tags: ["SIH Finalist", "Embedded", "Power Systems", "IoT Monitoring"],
    category: "Industrial Innovation",
    links: { github: "https://github.com/akileswar1606/smart-energy-meter" },
  },
  {
    id: "leader-follower",
    title: "Decentralized Swarm Robotics (Leader-Follower)",
    description: "Implemented multi-robot kinematic coordination using ROS2 nodes and distance-based decentralized velocity control to maintain dynamic vehicle formation in real-time.",
    tags: ["ROS2", "Robotics Kinematics", "Swarm Intelligence", "Gazebo"],
    category: "Robotics",
    links: { github: "https://github.com/akileswar1606/swarm-ros2-leader-follower" },
  },
  {
    id: "plc-robot-integration",
    title: "ABB Industrial Robot & Beckhoff TwinCAT PLC Interface",
    description: "Architected a real-time fieldbus communication link between an ABB 6-axis industrial arm (RAPID) and Beckhoff TwinCAT 3 PLC over EtherNet/IP for synchronized cell automation.",
    tags: ["Industrial Automation", "TwinCAT 3", "ABB RAPID", "EtherNet/IP"],
    category: "Industrial Automation",
    links: { github: "https://github.com/akileswar1606/abb-beckhoff-integration" },
  },
];

export const EXPERIENCE = [
  {
    company: "Dhvani Research & Development",
    role: "Junior Technical Engineer (Robotics & Control)",
    period: "Mar 2025 - Present",
    description: "Architecting industrial automation workcells, custom multi-axis robot motion controllers, EtherNet/IP protocol bridges, and TwinCAT 3 PLC systems.",
  },
  {
    company: "Dhvani Research & Development",
    role: "Engineering Intern (Robotics)",
    period: "Jan 2025 - Mar 2025",
    description: "Engineered ROS2 simulation environments, verified RobotStudio RAPID trajectories, and integrated custom sensor telemetry for automated testing setups.",
  },
  {
    company: "Mepco Schlenk Engineering College",
    role: "BE Electrical & Electronics Engineering",
    period: "2021 - 2025",
    description: "Specialized in Embedded Systems, Control Systems, Power Electronics, and Industrial Automation. SIH 2023 & SIH 2024 National Finalist.",
  },
];
