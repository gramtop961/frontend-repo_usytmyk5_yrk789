import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-center">
          <div className="md:col-span-2">
            {/* Replace the div below with your photo */}
            <div className="aspect-square rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 shadow-inner overflow-hidden">
              {/* Insert your <img> here when ready */}
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Me</h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              Im a Computer Engineering graduate focused on building practical, elegant solutions across the stack.
              My interests include systems programming, backend services, and performance-driven UI engineering.
            </p>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              I enjoy working with modern tools, collaborating with teams, and learning fast. Im open to roles where
              I can contribute to real-world products, optimize systems, and craft thoughtful user experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['C/C++', 'Python', 'Go', 'Node.js', 'React', 'Docker', 'Linux'].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full border border-white/15 bg-neutral-900 px-3 py-1 text-xs text-neutral-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
