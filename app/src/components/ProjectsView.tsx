"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/app/src/projects/data-projects";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImgIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-black px-6 md:px-12 py-24 flex flex-col justify-center overflow-hidden z-10"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-16 text-center md:text-left font-unbounded">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 items-stretch">
          {projectsData.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={project.id}
                className="relative group pt-4 flex flex-col"
              >
                <span className="absolute -top-6 -left-4 z-30 font-unbounded text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600/20 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] select-none pointer-events-none transition-transform duration-500 group-hover:-translate-y-1">
                  {projectNumber}
                </span>

                <div className="relative bg-zinc-950 rounded-[2.5rem] overflow-hidden border border-zinc-900 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-1 flex flex-col flex-grow shadow-2xl z-10">
                  <div className="relative w-full h-60 sm:h-64 bg-zinc-900/40 overflow-hidden flex items-center justify-center p-4 shrink-0">
                    <div className="absolute top-4 right-6 z-20 p-2.5 rounded-2xl bg-zinc-900/80 backdrop-blur-md text-amber-400">
                      {project.type === "mobile" ? (
                        // Icon Mobile / HP
                        <svg
                          className="w-4 h-4 fill-none stroke-current stroke-2"
                          viewBox="0 0 24 24"
                        >
                          <rect x="6" y="2" width="12" height="20" rx="2.5" />
                          <line
                            x1="10"
                            y1="18"
                            x2="14"
                            y2="18"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : project.type === "dashboard" ? (
                        // Icon Dashboard (Chart / Bar Graph - Power BI & Tableau Style)
                        <svg
                          className="w-4 h-4 fill-none stroke-current stroke-2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3v18h18"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 17V9M13 17V5M8 17v-4"
                          />
                        </svg>
                      ) : (
                        // Icon Web / Monitor (Default)
                        <svg
                          className="w-4 h-4 fill-none stroke-current stroke-2"
                          viewBox="0 0 24 24"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      )}
                    </div>

                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-unbounded leading-tight group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5 text-justify">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-[11px] rounded-lg bg-zinc-900 text-zinc-300 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-zinc-900 text-xs font-semibold font-mono">
                      <button
                        onClick={() => openGallery(project)}
                        className="group/btn inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors py-1 cursor-pointer"
                      >
                        <span>Explore Gallery</span>
                        <svg
                          className="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </button>

                      <div className="flex items-center gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                          >
                            GitHub ↗
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                          >
                            Demo ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <h4 className="text-lg md:text-xl font-bold text-white font-unbounded">
                {selectedProject.title}
              </h4>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full h-[300px] sm:h-[450px] rounded-2xl overflow-hidden bg-black border border-zinc-900">
              <Image
                src={selectedProject.images[currentImgIndex]}
                alt="Project Screenshot"
                fill
                className="object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-500 text-white hover:text-black p-3 rounded-full backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
              >
                ❮
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-500 text-white hover:text-black p-3 rounded-full backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
              >
                ❯
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto py-2 justify-center">
              {selectedProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImgIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                    currentImgIndex === idx
                      ? "border-amber-400 scale-105"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt="thumbnail"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
