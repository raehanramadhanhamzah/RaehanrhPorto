export interface Project {
  id: number;
  title: string;
  description: string;
  type: "web" | "mobile"; // Tipe platform project
  tags: string[];
  images: string[];
  github?: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Guitar Chord Learning App - 3D Augmented Reality",
    description:
      "An Android-based guitar chord learning application developed using markerless 3D Augmented Reality (AR). The application provides 3D visualization of guitar chord finger positions, allowing users to explore chord formations through interactive features such as 3D object rotation, dragging, zooming, finger movement animations, and chord audio playback. The application was developed to provide an alternative visual learning medium for users who want to learn guitar chords.",
    type: "mobile",
    tags: [ "Unity", "Blender", "C#"],
    images: [
      "/img_projects/project1-1.jpeg",
      "/img_projects/project1-2.jpeg",
      "/img_projects/project1-3.jpeg",
      "/img_projects/project1-4.png",
      "/img_projects/project1-5.png",
    ],
    github: "https://github.com/raehanramadhanhamzah/skripsi-guitarchord",
    link: "https://guitarchord-teal.vercel.app/",
  },
  {
    id: 2,
    title: "LaporPak: Sistem Pelaporan Masyarakat Terintegrasi dengan Instansi Pemerintah Berbasis Web",
    description:
      "LaporPak is an integrated digital platform designed to accelerate emergency reporting and rescue operations for the public and the Makassar Fire Department. In this team project, I served as the Backend Developer, taking full responsibility for building the core server architecture and securing data flows. My responsibilities included designing RESTful APIs using Node.js and the Hapi framework, managing user and report databases using MongoDB, implementing role-based authentication security (for citizens, staff, and administrators), and integrating media storage for photo and video evidence.",
    type: "web",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Hapi.js", "MongoDB", "Cloudinary", "RESTful API", "BERT AI Model"],
    images: [
      "/img_projects/project2-1.png",
      "/img_projects/project2-2.png",
      "/img_projects/project2-3.png",
      "/img_projects/project2-4.png",
    ],
    github: "https://github.com/raehanramadhanhamzah/laporPak",
    link: "https://lapor-pak-rosy.vercel.app/",
  },
  {
    id: 3,
    title: "International Class Student Website (Universitas Hasanuddin)",
    description: "The Hasanuddin University International Class Student Website is a digital platform integrated with the campus academic information system (SIAKAD) to support the digitalization of academic services, international class program administration, and information management for students, staff, and administrators. In this team project, I served as the Frontend & Backend Developer for the Events and News modules, while also holding full responsibility as the Quality Assurance (QA) Tester. My core contributions included the end-to-end development of features for creating, updating, and managing campus news and event data, as well as leading comprehensive system testing—ranging from API validation, CRUD functionality testing, security assessments, to performance testing (load testing) using JMeter to ensure system stability under various load scenarios.",
    type: "web",
    tags: ["Laravel", "Tailwind CSS", "MySQL", "RESTful API"],
    images: [
      "/img_projects/project3-1.png",
      "/img_projects/project3-2.png",
      "/img_projects/project3-3.png",
      "/img_projects/project3-4.png",
      "/img_projects/project3-5.png",
    ],
    link: "https://ic.unhas.ac.id/",
  },
  {
    id: 4,
    title: "Virtual Reality Art Museum",
    description:
      "The Virtual Reality Art Museum is a Virtual Reality (VR) application created so people can experience walking around and viewing painting exhibitions inside a gallery virtually, without having to visit the museum in person. In this project, I was fully responsible for developing the application within the Unity platform. My tasks included building how the application works, the movement and navigation system inside the room, how users interact with the artwork objects, and managing the digital gallery layout to ensure it runs smoothly and looks realistic.",
    type: "mobile",
    tags: ["Unity", "Blender", "C#"],
    images: [
      "/img_projects/project4-2.jpeg",
      "/img_projects/project4-3.jpeg",
      "/img_projects/project4-4.jpeg",
      "/img_projects/project4-1.jpeg",
    ],
    github: "https://github.com/raehanramadhanhamzah/PROJECT_VR_KELOMPOK_3",
  },
  {
    id: 5,
    title: "My Financial Family",
    description:
      "My Financial Family is a web-based household expense management application designed to help families record, categorize, and monitor their financial transactions. Built with a modern fullstack architecture, the system separates frontend interfaces and backend servers to handle data management and business logic smoothly.   In this project, I contributed to both frontend and backend development. On the backend, I developed the server using FastAPI (Python), managed relational databases, and built RESTful APIs for data processing and authentication. On the frontend, I worked with SvelteKit to build user interfaces for expense tracking, payment method management, transaction histories, family controls, and user profiles.",
    type: "web",
    tags: ["SvelteKit", "FastAPI", "Python", "MySQL"],
    images: [
      "/img_projects/project5-1.png",
      "/img_projects/project5-2.png",
      "/img_projects/project5-3.png",
      "/img_projects/project5-4.png",
    ],
    github: "https://github.com/raehanramadhanhamzah/PROJECT_VR_KELOMPOK_3",
  },
];