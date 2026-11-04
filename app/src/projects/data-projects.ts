export interface Project {
  id: number;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  type: "web" | "mobile" | "dashboard"; 
  tags: string[];
  images: string[];
  github?: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: {
      en: "Guitar Chord Learning App 3D Augmented Reality",
      id: "Aplikasi Pembelajaran Kunci Gitar 3D Augmented Reality"
    },
    description: {
      en: "An Android-based guitar chord learning application developed using markerless 3D Augmented Reality (AR). The application provides 3D visualization of guitar chord finger positions, allowing users to explore chord formations through interactive features such as 3D object rotation, dragging, zooming, finger movement animations, and chord audio playback. The application was developed to provide an alternative visual learning medium for users who want to learn guitar chords.",
      id: "Aplikasi pembelajaran kunci gitar berbasis Android yang dikembangkan menggunakan Augmented Reality (AR) 3D markerless. Aplikasi ini menyediakan visualisasi 3D posisi jari pada kunci gitar, memungkinkan pengguna menjelajahi formasi akor melalui fitur interaktif seperti rotasi objek 3D, geser, zum, animasi gerakan jari, dan pemutaran audio akor. Aplikasi ini dikembangkan sebagai media pembelajaran visual alternatif bagi pengguna yang ingin belajar kunci gitar."
    },
    type: "mobile",
    tags: ["Unity", "Blender", "C#"],
    images: [
      "/img_projects/project1-6.png",
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
    title: {
      en: "LaporPak Integrated Web Based Citizen Reporting System",
      id: "Sistem Pelaporan Warga Berbasis Web Terintegrasi LaporPak"
    },
    description: {
      en: "LaporPak is an integrated digital platform designed to accelerate emergency reporting and rescue operations for the public and the Makassar Fire Department. In this team project, I served as the Backend Developer, taking full responsibility for building the core server architecture and securing data flows. My responsibilities included designing RESTful APIs using Node.js and the Hapi framework, managing user and report databases using MongoDB, implementing role-based authentication security (for citizens, staff, and administrators), and integrating media storage for photo and video evidence.",
      id: "LaporPak adalah platform digital terintegrasi yang dirancang untuk mempercepat pelaporan darurat dan operasi penyelamatan bagi masyarakat serta Dinas Pemadam Kebakaran Makassar. Dalam proyek tim ini, saya berperan sebagai Backend Developer dengan tanggung jawab penuh membangun arsitektur server utama dan mengamankan alur data. Tugas saya meliputi perancangan RESTful API menggunakan Node.js dan framework Hapi, pengelolaan database pengguna serta laporan menggunakan MongoDB, penerapan keamanan autentikasi berbasis peran (untuk warga, staf, dan admin), serta integrasi penyimpanan media untuk bukti foto dan video."
    },
    type: "web",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Hapi.js",
      "MongoDB",
      "Cloudinary",
      "RESTful API",
      "BERT AI Model",
    ],
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
    title: {
      en: "International Class Student Website (Universitas Hasanuddin)",
      id: "Website Mahasiswa Kelas Internasional (Universitas Hasanuddin)"
    },
    description: {
      en: "The Hasanuddin University International Class Student Website is a digital platform integrated with the campus academic information system (SIAKAD) to support the digitalization of academic services, international class program administration, and information management for students, staff, and administrators. In this team project, I served as the Frontend & Backend Developer for the Events and News modules, while also holding full responsibility as the Quality Assurance (QA) Tester. My core contributions included the end-to-end development of features for creating, updating, and managing campus news and event data, as well as leading comprehensive system testing—ranging from API validation, CRUD functionality testing, security assessments, to performance testing (load testing) using JMeter to ensure system stability under various load scenarios.",
      id: "Website Mahasiswa Kelas Internasional Universitas Hasanuddin adalah platform digital yang terintegrasi dengan sistem informasi akademik kampus (SIAKAD) untuk mendukung digitalisasi layanan akademik, administrasi program kelas internasional, serta manajemen informasi bagi mahasiswa, staf, dan administrator. Dalam proyek tim ini, saya bertugas sebagai Frontend & Backend Developer untuk modul Berita dan Acara, sekaligus memegang tanggung jawab penuh sebagai Quality Assurance (QA) Tester. Kontribusi utama saya mencakup pengembangan end-to-end fitur pembuatan, pembaruan, dan pengelolaan data berita serta acara kampus, serta memimpin pengujian sistem komprehensif—mulai dari validasi API, pengujian fungsionalitas CRUD, asesmen keamanan, hingga pengujian performa (load testing) menggunakan JMeter guna memastikan stabilitas sistem dalam berbagai skenario beban."
    },
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
    title: {
      en: "Virtual Reality Art Museum",
      id: "Museum Seni Virtual Reality"
    },
    description: {
      en: "The Virtual Reality Art Museum is a Virtual Reality (VR) application created so people can experience walking around and viewing painting exhibitions inside a gallery virtually, without having to visit the museum in person. In this project, I was fully responsible for developing the application within the Unity platform. My tasks included building how the application works, the movement and navigation system inside the room, how users interact with the artwork objects, and managing the digital gallery layout to ensure it runs smoothly and looks realistic.",
      id: "Virtual Reality Art Museum adalah aplikasi Virtual Reality (VR) yang dibuat agar pengguna dapat merasakan pengalaman berjalan-jalan dan melihat pameran lukisan di dalam galeri secara virtual tanpa harus mengunjungi museum secara langsung. Dalam proyek ini, saya bertanggung jawab penuh mengembangkan aplikasi di platform Unity. Tugas saya meliputi pembangunan fungsionalitas aplikasi, sistem pergerakan dan navigasi di dalam ruangan, cara pengguna berinteraksi dengan objek karya seni, serta pengaturan tata letak galeri digital agar berjalan lancar dan tampak realistis."
    },
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
    title: {
      en: "My Financial Family",
      id: "My Financial Family (Aplikasi Keuangan Keluarga)"
    },
    description: {
      en: "My Financial Family is a web-based household expense management application designed to help families record, categorize, and monitor their financial transactions. Built with a modern fullstack architecture, the system separates frontend interfaces and backend servers to handle data management and business logic smoothly. In this project, I contributed to both frontend and backend development. On the backend, I developed the server using FastAPI (Python), managed relational databases, and built RESTful APIs for data processing and authentication. On the frontend, I worked with SvelteKit to build user interfaces for expense tracking, payment method management, transaction histories, family controls, and user profiles.",
      id: "My Financial Family adalah aplikasi pengelolaan pengeluaran rumah tangga berbasis web yang dirancang untuk membantu keluarga mencatat, mengkategorikan, dan memantau transaksi keuangan mereka. Dibangun dengan arsitektur fullstack modern, sistem ini memisahkan antarmuka frontend dan server backend untuk menangani manajemen data serta logika bisnis secara optimal. Dalam proyek ini, saya berkontribusi pada pengembangan frontend sekaligus backend. Di sisi backend, saya mengembangkan server menggunakan FastAPI (Python), mengelola database relasional, dan merancang RESTful API untuk pemrosesan data serta autentikasi. Di sisi frontend, saya menggunakan SvelteKit untuk membangun antarmuka pelacakan pengeluaran, manajemen metode pembayaran, riwayat transaksi, kontrol keluarga, dan profil pengguna."
    },
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
  {
    id: 6,
    title: {
      en: "ZooLearning App",
      id: "Aplikasi Pembelajaran ZooLearning"
    },
    description: {
      en: "Developed using Android Studio, ZooLearning is an Android educational application designed to help users explore diverse animal species through categorized lists, detailed descriptions, and custom views. Technically, the app utilizes Retrofit for network requests to pull data from external REST APIs on background threads, ensuring high performance. It also integrates local storage solutions (SQLite/SharedPreferences) for data persistence and leverages modern UI components including RecyclerView, Intents, and the Navigation Component for seamless screen transitions.",
      id: "Dikembangkan menggunakan Android Studio, ZooLearning adalah aplikasi edukasi Android yang dirancang untuk membantu pengguna menjelajahi berbagai spesies hewan melalui daftar berkategori, deskripsi terperinci, dan tampilan kustom. Secara teknis, aplikasi ini memanfaatkan Retrofit untuk permintaan jaringan guna mengambil data dari REST API eksternal di background thread, memastikan performa yang tinggi. Aplikasi ini juga mengintegrasikan penyimpanan lokal (SQLite/SharedPreferences) untuk persistensi data serta menggunakan komponen UI modern termasuk RecyclerView, Intent, dan Navigation Component untuk transisi antar layar yang mulus."
    },
    type: "web",
    tags: ["Android Studio", "REST API", "Retrofit", "SQLite"],
    images: [
      "/img_projects/project6-1.jpeg",
      "/img_projects/project6-2.jpeg",
      "/img_projects/project6-3.jpeg",
    ],
    github: "https://github.com/raehanramadhanhamzah/ZooLearning",
  },
  {
    id: 7,
    title: {
      en: "Retail Store 2012-2015 Dashboard",
      id: "Dashboard Toko Ritel 2012-2015"
    },
    description: {
      en: "This interactive Power BI dashboard analyzes a Kaggle dataset containing multi-national retail store transaction data from 2012 to 2015. At the top, the dashboard displays core KPIs (Total Sales, Total Profit, and Profit Ratio) alongside a Sales Trend line chart that monitors monthly performance changes. The geographic performance is broken down through a Sales by Country table and a Total Sales by City bar chart to identify top-performing regions. Product performance is evaluated using a Sales vs Profit by Sub-Category matrix to compare revenue against margins, supported by Sales Category breakdown. Finally, the Top 5 Cities by Sales and Profit pie charts provide a direct comparison of which cities generate the highest volume versus the highest net returns.",
      id: "Dashboard Power BI interaktif ini menganalisis dataset Kaggle yang berisi data transaksi toko ritel multinasional dari tahun 2012 hingga 2015. Pada bagian atas, dashboard menampilkan KPI utama (Total Penjualan, Total Keuntungan, dan Rasio Keuntungan) beserta grafik garis Tren Penjualan yang memantau perubahan performa bulanan. Performa geografis diuraikan melalui tabel Penjualan berdasarkan Negara dan diagram batang Total Penjualan berdasarkan Kota untuk mengidentifikasi wilayah berkinerja tertinggi. Performa produk dievaluasi menggunakan matriks Penjualan vs Keuntungan per Sub-Kategori untuk membandingkan pendapatan dengan margin, didukung oleh rincian Kategori Penjualan. Terakhir, diagram lingkaran 5 Kota Teratas berdasarkan Penjualan dan Keuntungan memberikan perbandingan langsung mengenai kota mana yang menghasilkan volume tertinggi versus pengembalian bersih tertinggi."
    },
    type: "dashboard",
    tags: ["Power BI", "Data Analysis", "Kaggle"],
    images: [
      "/img_projects/project7-1.png",
    ],
    link: "https://app.powerbi.com/reportEmbed?reportId=477cc006-f6e2-4b4f-9d9d-bc7e2b6c81ba&autoAuth=true&ctid=b6871fca-931c-4c5f-9df5-247fcf04d750",
  },
  {
    id: 8,
    title: {
      en: "E-Commerce Fashion Sales Performance Dashboard",
      id: "Dashboard Performa Penjualan Fashion E-Commerce"
    },
    description: {
      en: "Built with Tableau, an interactive dashboard examines historical sales transaction data from an online fashion retail store. At the upper left, a Top Selling Products bar chart displays the most popular fashion brands based on the distinct count of order IDs over the past three months. Right beside it, a Sales Trend line chart tracks the overall monthly revenue growth (Sale Price) from April to June. At the lower left, a Product Comparison pie chart breaks down the sales share percentage among three specific products (focusing on Calvin Klein apparel). Finally, at the lower right, a Distributor Performance horizontal bar chart compares the total sales revenue generated across different distributor locations, including Chicago, Los Angeles, and Memphis.",
      id: "Dibangun menggunakan Tableau, dashboard interaktif ini meneliti data transaksi penjualan historis dari toko ritel fashion online. Di bagian kiri atas, diagram batang Produk Terlaris menampilkan merek fashion paling populer berdasarkan jumlah unik ID pesanan selama tiga bulan terakhir. Tepat di sebelah kanannya, grafik garis Tren Penjualan melacak pertumbuhan pendapatan bulanan secara keseluruhan (Harga Jual) dari bulan April hingga Juni. Di bagian kiri bawah, diagram lingkaran Perbandingan Produk memecahkan persentase pangsa penjualan di antara tiga produk spesifik (berfokus pada pakaian Calvin Klein). Terakhir, di bagian kanan bawah, diagram batang horizontal Performa Distributor membandingkan total pendapatan penjualan yang dihasilkan di berbagai lokasi distributor, termasuk Chicago, Los Angeles, dan Memphis."
    },
    type: "dashboard",
    tags: ["Tableau", "Data Analysis", "Kaggle"],
    images: [
      "/img_projects/project8-1.png",
    ],
    link: "https://app.powerbi.com/reportEmbed?reportId=477cc006-f6e2-4b4f-9d9d-bc7e2b6c81ba&autoAuth=true&ctid=b6871fca-931c-4c5f-9df5-247fcf04d750",
  },
];