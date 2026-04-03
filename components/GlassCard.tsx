interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true
}: GlassCardProps) {
  return (
    <div className={`
      glass-card
      p-6
      ${hover ? 'hover:scale-[1.02]' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}
