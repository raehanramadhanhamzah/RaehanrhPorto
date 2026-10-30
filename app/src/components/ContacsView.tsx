"use client";

import React from "react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon 
} from "./Icons";
import { Mail, MapPin, Phone, Copy } from "lucide-react";

export default function ContactsView() {
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} berhasil disalin!`);
  };

  return (
    <section
      id="contacts"
      className="relative w-full pt-6 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-zinc-100 flex flex-col items-center justify-center text-center"
    >
      <div className="w-full mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 font-unbounded">
          Contacts
        </h2>
        <div className="w-12 h-1 bg-amber-400/80 mx-auto rounded-full" />
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold leading-snug mb-3 font-unbounded text-zinc-100">
          Let’s Connect
        </h3>
        
        <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed mb-8">
          I am currently open to full-time engineering roles, career opportunities, and professional collaborations. Feel free to reach out directly through any of the channels below.
        </p>

        <div className="w-full divide-y divide-zinc-800/80 mb-10 text-left border-t border-b border-zinc-800/80">
          
          <button
            onClick={() => handleCopy("raehanramadhan005@gmail.com", "Email")}
            className="w-full flex items-center justify-between py-4 transition-colors text-left focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Email</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-zinc-200 font-medium">
                raehanramadh27@gmail.com
              </span>
              <Copy className="w-3.5 h-3.5 text-zinc-500" />
            </div>
          </button>

          <button
            onClick={() => handleCopy("+6281234567890", "Nomor telepon")}
            className="w-full flex items-center justify-between py-4 transition-colors text-left focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Phone / WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base text-zinc-200 font-medium">
                +62 851-5689-3017
              </span>
              <Copy className="w-3.5 h-3.5 text-zinc-500" />
            </div>
          </button>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Location</span>
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
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs md:text-sm text-zinc-300 transition-opacity hover:opacity-80"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}