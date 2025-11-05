import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-neutral-300">
            Open to full-time roles, internships, and collaborations. Feel free to reach out.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:your.email@example.com"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-4 hover:border-white/30 transition"
          >
            <Mail className="h-5 w-5 text-neutral-300" />
            <span className="text-sm text-neutral-200 group-hover:text-white">your.email@example.com</span>
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-4 hover:border-white/30 transition"
          >
            <Github className="h-5 w-5 text-neutral-300" />
            <span className="text-sm text-neutral-200 group-hover:text-white">github.com/your-github</span>
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-4 hover:border-white/30 transition"
          >
            <Linkedin className="h-5 w-5 text-neutral-300" />
            <span className="text-sm text-neutral-200 group-hover:text-white">linkedin.com/in/your-linkedin</span>
          </a>
        </div>

        <div className="mt-12 text-xs text-neutral-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
