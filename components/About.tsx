import GlassCard from './GlassCard';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Three.js', 'Tailwind CSS', 'Figma', 'Git'
];

export default function About() {
  return (
    <section id="about" className="flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-square glass-card p-8 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80 blur-sm" />
              <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-indigo-400 tracking-widest uppercase text-sm">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Passionate about creating
              <span className="gradient-text"> digital experiences</span>
            </h2>
            <p className="text-white/60 leading-relaxed">
              I'm a creative developer with a passion for building beautiful,
              interactive web experiences. I combine design thinking with
              technical expertise to create products that users love.
            </p>

            {/* Skills */}
            <GlassCard hover={false} className="mt-8">
              <p className="text-sm text-white/40 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm glass rounded-full text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
