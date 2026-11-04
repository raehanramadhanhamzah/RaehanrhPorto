"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import ProjectsSection from "@/app/[locale]/components/ProjectsView";
import AboutMeSection from "@/app/[locale]/components/AboutMeView";
import ContactsSection from "@/app/[locale]/components/ContacsView";
import { Analytics } from "@vercel/analytics/next";

const Lanyard = dynamic(() => import("@/app/[locale]/components/Lanyard"), {
  ssr: false,
});

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = useTranslations("Hero");
  const nav = useTranslations("Navbar");

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (targetLocale: "en" | "id") => {
    router.replace(pathname, { locale: targetLocale });
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/30 via-yellow-400/20 to-orange-600/15 blur-[140px] pointer-events-none rounded-full z-0" />

      <header className="absolute top-6 md:top-8 left-0 right-0 z-50 flex items-center justify-between max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="font-mono text-xl md:text-lg tracking-wider font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
          RAEHAN.
        </div>

        <nav className="hidden md:flex gap-12 text-lg font-unbounded text-gray-300 items-center">
          <a
            href="#about"
            className="px-2 py-1 cursor-pointer hover:text-amber-400 transition-colors duration-200"
          >
            {nav("about")}
          </a>
          <a
            href="#projects"
            className="px-2 py-1 cursor-pointer hover:text-amber-400 transition-colors duration-200"
          >
            {nav("projects")}
          </a>
          <a
            href="#contacts"
            className="px-2 py-1 cursor-pointer hover:text-amber-400 transition-colors duration-200"
          >
            {nav("contacts")}
          </a>

          <div className="flex items-center gap-2">
            <button onClick={() => switchLocale("en")}>
              <Image
                src="./flags/en.svg"
                alt="English"
                width={24}
                height={24}
                className={`rounded-full ${
                  locale === "en" ? "opacity-100" : "opacity-40"
                }`}
              />
            </button>

            <button onClick={() => switchLocale("id")}>
              <Image
                src="/flags/id.svg"
                alt="Indonesia"
                width={24}
                height={24}
                className={`rounded-full ${
                  locale === "id" ? "opacity-100" : "opacity-40"
                }`}
              />
            </button>
          </div>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-end w-10 h-10 space-y-1.5 focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-8"}`}
          />
          <span
            className={`h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "opacity-0 w-6" : "opacity-100 w-6"}`}
          />
          <span
            className={`h-0.5 bg-amber-400 transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"}`}
          />
        </button>

        {menuOpen && (
          <div className="absolute top-16 right-6 left-6 bg-zinc-900/95 border border-amber-500/20 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-6 text-center shadow-2xl md:hidden z-40">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-amber-400 transition-colors cursor-pointer"
            >
              {nav("about")}
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-amber-400 transition-colors cursor-pointer"
            >
              {nav("projects")}
            </a>
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-amber-400 transition-colors cursor-pointer"
            >
              {nav("contacts")}
            </a>

            <div className="flex items-center justify-center gap-2">
            <button onClick={() => switchLocale("en")}>
              <Image
                src="./flags/en.svg"
                alt="English"
                width={24}
                height={24}
                className={`rounded-full ${
                  locale === "en" ? "opacity-100" : "opacity-40"
                }`}
              />
            </button>

            <button onClick={() => switchLocale("id")}>
              <Image
                src="/flags/id.svg"
                alt="Indonesia"
                width={24}
                height={24}
                className={`rounded-full ${
                  locale === "id" ? "opacity-100" : "opacity-40"
                }`}
              />
            </button>
          </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative w-full min-h-screen pt-24 pb-12 flex flex-col justify-between overflow-visible"
      >
        {!isMobile && (
          <div className="hidden md:block absolute inset-x-0 top-0 h-[520px] z-20 pointer-events-none overflow-visible -ml-5">
            <div className="w-full h-full pointer-events-auto">
              <Lanyard
                frontImage="/img_lanyard/card-front.png"
                backImage="/img_lanyard/card-back.png"
                strapImage="/img_lanyard/band.png"
                imageFit="cover"
                cardColor="#ffffff"
                orientation="portrait"
                finish="glossy"
                cornerRadius={0.3}
                size={0.6}
                anchor="center"
                strapLength={0.5}
                strapColor="#111111"
                strapWidth={0.65}
                metal="silver"
                gravity={1}
                damping={0.5}
                elasticity={0.5}
                breeze={0.5}
                interactive={true}
                intro={true}
              />
            </div>
          </div>
        )}

        <div className="relative flex flex-col md:flex-row w-full items-center justify-between px-6 md:px-12 max-w-7xl mx-auto my-auto gap-6 md:gap-0 z-10">
          {isMobile && (
            <div className="w-full h-[300px] sm:h-[350px] z-20 flex items-center justify-center pointer-events-auto order-1">
              <div className="relative w-[190px] sm:w-[210px] h-[280px] sm:h-[310px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.35)] border border-amber-500/40">
                <Image
                  src="/img_lanyard/card-front.png"
                  alt="Card ID"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
            </div>
          )}

          <div className="w-full md:w-5/12 flex flex-col justify-center items-center md:items-start z-30 order-2 md:order-1 font-unbounded text-center md:text-left pointer-events-auto">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              {t("greeting")} <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                {t("name")}
              </span>
            </h1>

            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full mt-3 hidden md:block" />
          </div>

          <div className="hidden md:block w-2/12 h-1 pointer-events-none order-2" />

          <div className="font-unbounded w-full md:w-5/12 flex flex-col justify-center items-center md:items-start z-30 order-3 text-center md:text-left pointer-events-auto md:translate-x-12">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-2">
              {t("status")}
            </span>

            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mb-3 leading-snug">
              {t("title")}
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed w-full">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="relative w-full pt-8 md:pt-12 px-6 md:px-12 max-w-7xl mx-auto z-40">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="/pdf/CV_RAEHAN RAMADHAN HAMZAH_ENG.pdf"
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm tracking-wide overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer z-50 w-full sm:w-auto font-unbounded"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span className="relative z-10 font-bold">{t("cvButton")}</span>
              <svg
                className="relative z-10 w-4 h-4 fill-none stroke-current stroke-[2.5] transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>

            <a
              href="https://github.com/raehanramadhanhamzah"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-gray-300 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-amber-500/10 cursor-pointer z-50 w-full sm:w-auto font-unbounded text-xs sm:text-sm"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="font-medium">{t("githubButton")}</span>
            </a>

            <a
              href="https://www.linkedin.com/in/raehan-ramadhan-hamzah/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-gray-300 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-amber-500/10 cursor-pointer z-50 w-full sm:w-auto font-unbounded text-xs sm:text-sm"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-400"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="font-medium">{t("linkedinButton")}</span>
            </a>
          </div>
        </div>
      </section>

      <AboutMeSection />
      <ProjectsSection />
      <ContactsSection />
      <Analytics />

      <footer className="relative py-6 text-center text-xs text-gray-500 z-20">
        © 2026 Raehan Ramadhan Hamzah. All rights reserved.
      </footer>
    </main>
  );
}
