import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Features",
  },
  {
    id: "work",
    title: "Careers",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Live Memory Analysis",
    company_name: "Glittery Helmet Forensics Suite",
    icon: payloadmaster,
    iconBg: "#23272e",
    date: "Feature",
    points: [
      "Capture and analyze volatile memory in real-time.",
      "Detect hidden processes, injected code, and rootkits.",
      "Export memory artifacts for further investigation.",
    ],
  },
  {
    title: "Automated Timeline Reconstruction",
    company_name: "Glittery Helmet Forensics Suite",
    icon: mhft,
    iconBg: "#23272e",
    date: "Feature",
    points: [
      "Aggregate file, registry, and event log activity into a unified timeline.",
      "Visualize user and attacker actions chronologically.",
      "Supports filtering by user, process, or artifact type.",
    ],
  },
  {
    title: "Malware Triage & Sandbox",
    company_name: "Glittery Helmet Forensics Suite",
    icon: CompileVortex,
    iconBg: "#23272e",
    date: "Feature",
    points: [
      "Isolate and execute suspicious files in a secure sandbox.",
      "Automatic behavioral analysis and IOC extraction.",
      "Generate detailed reports for incident response.",
    ],
  },
  {
    title: "Disk & File Carving",
    company_name: "Glittery Helmet Forensics Suite",
    icon: sketcher,
    iconBg: "#23272e",
    date: "Feature",
    points: [
      "Recover deleted files and partitions from disk images.",
      "Supports NTFS, FAT, exFAT, and EXT file systems.",
      "Preview carved files before export.",
    ],
  },
  {
    title: "Network Traffic Forensics",
    company_name: "Glittery Helmet Forensics Suite",
    icon: nodejs,
    iconBg: "#23272e",
    date: "Feature",
    points: [
      "Capture and analyze live or offline network traffic.",
      "Detect C2 communications, exfiltration, and lateral movement.",
      "Integrates with threat intelligence feeds for enrichment.",
    ],
  },
  {
    title: "Cross-Platform Artifact Parsing",
    company_name: "Glittery Helmet Forensics Suite",
    icon: python,
    iconBg: "#23272e",
    date: "Feature",
    points: [
      "Parse browser history, registry, system logs, and more across Windows, macOS, and Linux.",
      "Automated artifact extraction and reporting.",
      "Customizable modules for new artifact types.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/glitteryhelmet/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/glitteryhelmet/terminal-portfolio",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "https://github.com/glitteryhelmet/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/glitteryhelmet/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/glitteryhelmet/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/glitteryhelmet/Image_to_Pencil_Sketch_App",
  },
];
