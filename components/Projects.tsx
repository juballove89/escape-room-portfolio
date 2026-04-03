import GlassCard from './GlassCard';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application with 3D interactions',
    tags: ['React', 'Three.js', 'TypeScript'],
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Project Two',
    description: 'E-commerce platform with seamless UX',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Project Three',
    description: 'Mobile-first progressive web app',
    tags: ['React', 'PWA', 'Node.js'],
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Project Four',
    description: 'AI-powered productivity tool',
    tags: ['Python', 'OpenAI', 'React'],
    color: 'from-pink-500 to-rose-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-indigo-400 tracking-widest uppercase text-sm mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <GlassCard key={index} className="group cursor-pointer overflow-hidden">
              {/* Project Image Placeholder */}
              <div className={`
                h-48 rounded-xl mb-6
                bg-gradient-to-br ${project.color}
                opacity-80 group-hover:opacity-100
                transition-opacity
              `} />

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/50 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs glass rounded-md text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
