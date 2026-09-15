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
  role: "Robotics & Control System Engineer",
  headline: "Specializing in Industrial Automation, Robot-PLC Integration (ABB, Beckhoff, Doosan), ROS2, and Embedded/IoT Systems | Humanoid Robotics Aspirant",
  summary: "Robotics & Control System Engineer with hands-on experience in industrial automation, robot–PLC integration, and embedded systems, with a clear long-term goal of building humanoid robots. Experience includes working with ABB industrial robots and Doosan cobots, focusing on motion control, PLC programming, and HMI development for real-world industrial and R&D applications.",
  email: "akileswarpa@gmail.com",
  linkedin: "https://www.linkedin.com/in/akileswarpa/",
  github: "https://github.com/akileswar1606",
  whatsapp: "+91 9342718131",
  location: "Kanyakumari District / Chennai, India",
  portfolio: "https://akileswar1606.github.io/Akileswar/",
};

export const CERTIFICATIONS = [
  {
    title: "Certificate Course in Electrical CAD",
    issuer: "Cad Desk",
    date: "Apr 2025",
  },
  {
    title: "Smart India Hackathon 2024 Participation",
    issuer: "Smart India Hackathon (Ministry of Education)",
    date: "Dec 2024",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "Jun 2024",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=6287ac05-292d-4974-bf5a-e08652108991&",
  },
  {
    title: "Learnathon",
    issuer: "GUVI Geek Networks, IITM Research Park",
    date: "Feb 2024",
    license: "PA122lwh34Sb10m937",
    link: "https://www.guvi.in/share-certificate/PA122lwh34Sb10m937",
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
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    date: "May 2023",
    link: "https://internalapp.nptel.ac.in/NOC/NOC23/SEM1/Ecertificates/106/noc23-cs20/Course/NPTEL23CS20S1465045904054776.jpg",
  },
  {
    title: "Robotics & Digital Circuit",
    issuer: "NPTEL",
    date: "2023",
  },
  {
    title: "Internal Hackathon Participation",
    issuer: "Mepco Schlenk Engineering College",
    date: "Sep 2023",
  },
];

export const SKILLS = [
  {
    category: "Industrial Robotics & Cobots",
    items: ["ABB Industrial Robots", "Doosan Cobots", "RAPID Programming", "Dart Studio (DRL)", "ABB OmniCore AppStudio", "IRC5 ScreenMaker", "Tool & Workobject Calibration"],
  },
  {
    category: "PLC & Industrial Automation",
    items: ["Beckhoff TwinCAT (Structured Text)", "EtherNet/IP Communication", "Modbus Communication", "HMI Programming", "Servo Control & Drives", "Safety Configurations (Auto/General Stop)"],
  },
  {
    category: "Embedded Systems & IoT",
    items: ["ESP32 Microcontrollers", "Arduino IDE / Uno", "Sensors (Color, Water Level, Inclinometer)", "TCS34725 RGB Sensor", "PCB Design", "LCD Display Integration"],
  },
  {
    category: "Humanoid & Advanced Robotics Learning",
    items: ["ROS2 Architectures", "URDF / XACRO Modeling", "Robot Kinematics & Coordinate Frames", "Robot Dynamics & Balance", "Whole-Body Control Concepts"],
  },
  {
    category: "Software & Data Analysis",
    items: ["Python", "C++", "C#", "MATLAB / Colab", "Linear Regression / Calibration", "AutoCAD Electrical", "BOM Creation"],
  },
];

export const PROJECTS = [
  {
    id: "smart-parking-iot",
    title: "Smart Parking Management System Using IoT",
    description: "Revolutionized urban parking by providing real-time slot availability through ultrasonic and IR sensors with ESP32 integration. Enables drivers to locate and reserve spots, reducing congestion and emissions.",
    tags: ["IoT", "ESP32", "Sensors", "Smart Cities"],
    category: "Embedded & IoT",
    period: "Dec 2023 - Apr 2024",
  },
  {
    id: "sih-power-pilferage",
    title: "Reducing AT&C Losses due to Power Pilferage (SIH 2023)",
    description: "Presented at Smart India Hackathon 2023 to address high AT&C power losses. Developed a low-cost smart meter and smart circuit breaker switch detecting theft in real time and integrating seamlessly with existing power infrastructure.",
    tags: ["SIH 2023", "Smart Metering", "Power Distribution", "Embedded Systems"],
    category: "Industrial Innovation",
    period: "Aug 2023 - Oct 2023",
  },
  {
    id: "chlorine-testing-kit",
    title: "Personalized Residual Chlorine Testing Kit",
    description: "Built a portable, rechargeable (Type-C) hardware device utilizing an Arduino Nano and TCS34725 RGB color sensor. Measures free chlorine levels by analyzing reagent color shift via Google Colab linear regression calibration (built for under ₹2,500).",
    tags: ["Arduino", "Sensors", "Linear Regression", "Water Analytics"],
    category: "Embedded Hardware",
    period: "Aug 2024 - Dec 2024",
  },
  {
    id: "silver-ion-testing-kit",
    title: "Personalized Residual Silver Ion Testing Kit",
    description: "Adapted smart automation framework to measure free silver ion levels using selective Dithizone reagent. Tracks colorimetric shift with TCS34725 sensor & HSV calibration pipeline for instant concentration readings (built for under ₹3,000).",
    tags: ["Arduino", "Colorimetric Sensor", "HSV Calibration", "Water Quality"],
    category: "Embedded Hardware",
    period: "Aug 2024 - Dec 2024",
  },
];

export const EXPERIENCE = [
  {
    company: "Dhvani Research & Development Solutions",
    role: "Junior Technical Engineer - Automation Systems",
    period: "Apr 2025 - Present",
    location: "Chennai",
    description: [
      "Worked on robotics and automation systems for R&D and industrial applications.",
      "Integrated ABB industrial robots with Beckhoff PLCs using EtherNet/IP communication.",
      "Developed RAPID programs in ABB RobotStudio for robot motion, I/O handling, and system testing.",
      "Designed and implemented automatic control logic in Beckhoff TwinCAT using Structured Text.",
      "Developed custom HMI pages on ABB OmniCore (AppStudio) and IRC5 (ScreenMaker) for real-time control, monitoring, and diagnostics.",
      "Implemented sensor-based control systems including water level sensors, color sensors, inclinometers, and safety relays.",
      "Controlled motors using Modbus communication with motion control logic executed on Beckhoff PLC.",
      "Commissioned ABB robots & Doosan cobots (Dart Studio / DRL programming) with safety configurations (Auto Stop, General Stop).",
      "Contributed to optocoupler-based circuit design, electrical panel wiring, and system validation."
    ],
  },
  {
    company: "Dhvani Research & Development Solutions",
    role: "Graduate Engineer Trainee - Automation System",
    period: "Jan 2025 - Mar 2025",
    location: "Chennai, Tamil Nadu, India",
    description: [
      "Assisted in automation system assembly, wiring, and initial PLC logic setup.",
      "Supported industrial robot programming and sensor integration testing."
    ],
  },
  {
    company: "Mepco Schlenk Engineering College",
    role: "Bachelor of Engineering - BE (Electrical & Electronics Engineering)",
    period: "Jan 2021 - Apr 2025",
    location: "Virudhunagar, Tamil Nadu",
    description: [
      "Specialized in Electrical Engineering, Robotics, Control Systems, Microcontrollers, and Smart Grids."
    ],
  },
];
