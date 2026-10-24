export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top ambient radial gradient */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent rounded-full blur-3xl opacity-70" />
      
      {/* Subtle secondary indigo glow on the right */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/5 via-cyan-500/5 to-transparent rounded-full blur-3xl opacity-50" />
      
      {/* Subtle emerald tint on the lower left */}
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/5 via-sky-500/5 to-transparent rounded-full blur-3xl opacity-40" />
    </div>
  );
}
