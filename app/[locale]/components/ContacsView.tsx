"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { 
  GithubIcon, 
  LinkedinIcon, 
} from "./Icons";
import { Mail, MapPin, Phone, Copy } from "lucide-react";

export default function ContactsView() {
  const locale = useLocale() as "en" | "id";
  const t = useTranslations("Contacts");

  const handleCopy = (text: string, labelKey: string) => {
    navigator.clipboard.writeText(text);
    const labelName = t(labelKey) || labelKey;
    alert(`${labelName} ${locale === "en" ? "successfully copied!" : "berhasil disalin!"}`);
  };

  return (
    <section
      id="contacts"
      className="relative w-full pt-6 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-zinc-100 flex flex-col items-center justify-center text-center"
    >
      <div className="w-full mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 font-unbounded">
          {t("title")}
        </h2>
        <div className="w-12 h-1 bg-amber-400/80 mx-auto rounded-full" />
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold leading-snug mb-3 font-unbounded text-zinc-100">
          {t("heading")}
        </h3>
        
        <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">
          {t("description")}
        </p>

        <div className="w-full divide-y divide-zinc-800/80 mb-10 text-left border-t border-b border-zinc-800/80">
          
          <button
            onClick={() => handleCopy("raehanramadh27@gmail.com", "emailLabel")}
            className="w-full flex items-center justify-between py-4 transition-colors text-left focus:outline-none cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Email</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-zinc-200 font-medium group-hover:text-amber-400 transition-colors">
                raehanramadh27@gmail.com
              </span>
              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
            </div>
          </button>

          <button
            onClick={() => handleCopy("+6285156893017", "phoneLabel")}
            className="w-full flex items-center justify-between py-4 transition-colors text-left focus:outline-none cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Phone / WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">
                +62 851-5689-3017
              </span>
              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </div>
          </button>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
                {t("locationLabel")}
              </span>
            </div>
            <span className="text-sm md:text-base text-zinc-300 font-medium">
              DKI Jakarta, Indonesia
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a
            href="https://github.com/raehanramadhanhamzah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm text-zinc-300 transition-opacity hover:opacity-80"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/raehan-ramadhan-hamzah/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm text-zinc-300 transition-opacity hover:opacity-80"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}