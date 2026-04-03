'use client';

import SplineScene from './SplineScene';

interface HeroProps {
  splineUrl?: string;
}

export default function Hero({ splineUrl }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      {splineUrl && <SplineScene scene={splineUrl} />}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="glass-strong p-8 md:p-12 max-w-2xl mx-auto">
          <p className="text-indigo-400 text-sm md:text-base mb-4 tracking-widest uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            Creative Developer
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-lg mx-auto mb-8">
            Building immersive digital experiences with modern technologies
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-medium transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 glass hover:bg-white/10 rounded-full text-white font-medium transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
