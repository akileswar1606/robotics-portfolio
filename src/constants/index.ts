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
  headline: "Specializing in Industrial Automation, ROS2, and Real-time Control Systems",
  experience_years: 1,
  projects_count: 15,
  certifications_count: 10,
  email: "akileswarpa@email.com", // Placeholder - adjust if known
  linkedin: "https://www.linkedin.com/in/akileswarpa/",
  github: "https://github.com/akileswarpa", // Placeholder
  whatsapp: "+91XXXXXXXXXX", // Placeholder
};

export const SKILLS = [
  {
    category: "Robotics",
    items: ["ROS2", "MoveIt2", "Robot Kinematics", "Navigation", "RAPID", "DRL"],
  },
  {
    category: "Automation",
    items: ["PLC (Beckhoff, ABB)", "HMI", "SCADA", "EtherNet/IP", "TwinCAT 3"],
  },
  {
    category: "Embedded Systems",
    items: ["ESP32", "Arduino", "UART/SPI/I2C", "PCB Design", "RTOS"],
  },
  {
    category: "Programming",
    items: ["Python", "C++", "TypeScript", "MATLAB"],
  },
  {
    category: "Tools",
    items: ["ABB RobotStudio", "AutoCAD Electrical", "Docker", "Linux", "Git"],
  },
];

export const PROJECTS = [
  {
    id: "smart-parking",
    title: "Smart Indoor Parking System",
    description: "Built an IoT-based parking system for multi-story buildings using ESP32 and ultrasonic sensors, integrated with a web dashboard for real-time occupancy tracking.",
    tags: ["IoT", "ESP32", "Web Dashboard", "Embedded"],
    category: "Embedded Systems",
    links: { github: "#" },
  },
  {
    id: "smart-meter",
    title: "Smart Energy Meter",
    description: "System designed to reduce theft and transmission loss. Featured as SIH 2023 finalist.",
    tags: ["Embedded", "IoT", "Power Systems"],
    category: "Industrial Innovation",
    links: { github: "#" },
  },
  {
    id: "leader-follower",
    title: "Leader-Follower Swarm Robotics",
    description: "Implementation of multi-robot coordination using decentralized control algorithms for formation maintenance.",
    tags: ["ROS2", "Robotics", "Swarm"],
    category: "Robotics",
    links: { github: "#" },
  },
  {
    id: "plc-robot-integration",
    title: "ABB Robot - Beckhoff PLC Integration",
    description: "Configured real-time communication between ABB industrial robots (RAPID) and Beckhoff PLCs (EtherNet/IP) for advanced motion control.",
    tags: ["Industrial Automation", "PLC", "ABB", "EtherNet/IP"],
    category: "Industrial Automation",
    links: { github: "#" },
  },
];

export const EXPERIENCE = [
  {
    company: "Dhvani Research & Development",
    role: "Junior Technical Engineer (Robotics & Control)",
    period: "Mar 2025 - Present",
    description: "Working on advanced industrial automation projects involving Robot-PLC integration and custom motion control solutions.",
  },
  {
    company: "Dhvani Research & Development",
    role: "Engineering Intern",
    period: "Jan 2025 - Mar 2025",
    description: "Supported development of robotics workflows and industrial communication protocols.",
  },
];
