"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiPython,
  SiPhp,
  SiLaravel,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiUnity,
  SiBlender,
  SiFigma,
  SiGit,
  SiPostman,
  SiAndroid,
} from "react-icons/si";
import {
  Code2,
  Smartphone,
  Database,
  TrendingUp,
} from "lucide-react";

function TableauIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3 2.1h1.4v3.5h-1.4V2.1zm-4.2 3.5h1.4v3.5H7.1V5.6zm8.4 0h1.4v3.5h-1.4V5.6zm-12.6 4.2h1.4v3.5H2.9V9.8zm4.2 0h1.4v3.5H7.1V9.8zm4.2 0h1.4v3.5h-1.4V9.8zm4.2 0h1.4v3.5h-1.4V9.8zm4.2 0h1.4v3.5h-1.4V9.8zm-12.6 4.2h1.4v3.5H7.1v-3.5zm8.4 0h1.4v3.5h-1.4v-3.5zm-4.2 4.2h1.4v3.5h-1.4v-3.5z" fill="#E97627"/>
      <path d="M11.3 5.6h1.4v12.8h-1.4V5.6zm-4.2 4.2h1.4v4.2H7.1V9.8zm8.4 0h1.4v4.2h-1.4V9.8z" fill="#1C75BC"/>
    </svg>
  );
}

function PowerBIIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="12" width="4" height="9" rx="1" fill="#F2C811" />
      <rect x="10" y="7" width="4" height="14" rx="1" fill="#E8A200" />
      <rect x="17" y="3" width="4" height="18" rx="1" fill="#F2C811" />
    </svg>
  );
}

export default function AboutMeSection() {
  const techStack = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Svelte", icon: SiSvelte, color: "text-[#FF3E00]" },
    { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
    { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
    { name: "Express.js", icon: SiExpress, color: "text-zinc-200" },
    { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Android Studio", icon: SiAndroid, color: "text-[#3DDC84]" },
    { name: "Unity", icon: SiUnity, color: "text-white" },
    { name: "Blender", icon: SiBlender, color: "text-[#E87D0D]" },
    { name: "Tableau", customIcon: TableauIcon },
    { name: "Power BI", customIcon: PowerBIIcon },
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!isMouseDown && container) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMouseDown]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft -= container.scrollWidth / 2;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += container.scrollWidth / 2;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsMouseDown(false);
  const handleMouseUp = () => setIsMouseDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 md:px-12 max-w-7xl mx-auto text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <div className="lg:col-span-6 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6 text-center md:text-left font-unbounded">
            About Me
          </h2>

          <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4 font-unbounded text-zinc-100">
            Connecting Information Systems and IT Through Passionate
            Programming
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
            I am an Information Systems graduate from Hasanuddin University (2022-2026)
            specializing in full-stack web development, mobile solutions, and
            data analytics. My technical foundation spans across core
            languages including JavaScript, TypeScript, Python, PHP, Java, and
            C/C++, paired with modern web frameworks like Next.js, Svelte,
            Laravel, Express.js, and FastAPI. I am experienced in designing
            and testing RESTful APIs using Postman, managing databases across
            MySQL and MongoDB, and developing mobile applications using
            Flutter and Android Studio. Additionally, I leverage tools such as
            Power BI, Tableau, Blender, and Unity for data visualization,
            business intelligence, 3D modeling, and interactive augmented
            reality solutions.
          </p>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-14">
          
          <div className="bg-zinc-900/50 border border-zinc-800/80 p-5 rounded-xl flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-2.5">
              <Code2 className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="text-base font-bold text-zinc-100 font-unbounded">Web Engineering</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Developing modern web applications using React, Svelte, Next.js,
              Laravel, and Express.js with clean architecture.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/80 p-5 rounded-xl flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-2.5">
              <Smartphone className="w-5 h-5 text-cyan-400 shrink-0" />
              <h3 className="text-base font-bold text-zinc-100 font-unbounded">Mobile & AR Tech</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Building cross-platform mobile apps with Flutter & Android Studio
              alongside interactive Unity & Blender AR solutions.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/80 p-5 rounded-xl flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-2.5">
              <Database className="w-5 h-5 text-emerald-400 shrink-0" />
              <h3 className="text-base font-unbounded font-bold text-zinc-100">Database & Analytics</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Managing relational & NoSQL databases (MySQL, MongoDB) and
              visualizing insights with Power BI & Tableau.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/80 p-5 rounded-xl flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-2.5">
              <TrendingUp className="w-5 h-5 text-indigo-400 shrink-0" />
              <h3 className="text-base font-unbounded font-bold text-zinc-100">QA & Systems Design</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Applying Software Testing & QA, RESTful API design with Postman,
              and end-to-end information systems architecture.
            </p>
          </div>

        </div>
      </div>

      <div className="mt-20">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold font-unbounded text-white">
            Technologies & Tools
          </h3>
          <p className="text-xs md:text-sm text-gray-400 mt-2">
            Programming languages, frameworks, and software tools I work with
            (Drag/Slide to explore)
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="w-full overflow-x-auto relative py-4 no-scrollbar cursor-grab active:cursor-grabbing select-none [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <div className="flex w-max">
            <div className="flex items-center gap-6 pr-6">
              {techStack.map((item, idx) => {
                const IconComponent = item.icon;
                const CustomIconComponent = item.customIcon;
                return (
                  <div
                    key={`first-${idx}`}
                    className="flex flex-col items-center justify-center gap-2 min-w-[110px] p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60"
                  >
                    {CustomIconComponent ? (
                      <CustomIconComponent className="w-8 h-8" />
                    ) : (
                      IconComponent && <IconComponent className={`w-8 h-8 ${item.color}`} />
                    )}
                    <span className="text-xs text-gray-300 font-medium text-center">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-6 pr-6">
              {techStack.map((item, idx) => {
                const IconComponent = item.icon;
                const CustomIconComponent = item.customIcon;
                return (
                  <div
                    key={`second-${idx}`}
                    className="flex flex-col items-center justify-center gap-2 min-w-[110px] p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60"
                  >
                    {CustomIconComponent ? (
                      <CustomIconComponent className="w-8 h-8" />
                    ) : (
                      IconComponent && <IconComponent className={`w-8 h-8 ${item.color}`} />
                    )}
                    <span className="text-xs text-gray-300 font-medium text-center">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}