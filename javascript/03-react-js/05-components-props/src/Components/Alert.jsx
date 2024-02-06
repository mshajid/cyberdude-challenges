const Alert = ({ variant, label, className, link, linkTo, children }) => {
  const variants = {
    Primary:
      "bg-gradient-to-tr from-indigo-500/70 to-indigo-300 text-indigo-900 border border-indigo-500 rounded text-indigo-950",
    Secondary:
      "bg-gradient-to-tr from-zinc-500/70 to-stone-400 border border-zinc-500 rounded text-zinc-950",
    Success:
      "bg-gradient-to-tr from-emerald-500/70 to-lime-300 to-cyan-400 text-emerald-900 border border-emerald-500 rounded text-emerald-950",
    Warning:
      "bg-gradient-to-tr from-amber-500/70 to-yellow-300 text-amber-900 border border-amber-500 rounded text-amber-950",
    Danger:
      "bg-gradient-to-tr from-rose-500/70 to-pink-400 text-rose-900 border border-rose-500 rounded text-rose-950",
    Info:
      "bg-gradient-to-tr from-sky-500/70 to-indigo-300 text-sky-900 border border-sky-500 rounded text-sky-950",
  };
  return (
    <>
      <div className={`${variants[variant]} ${className}`}>
        {children} {label}
        <a
          className="hover:text-white transition-all"
          target="_blank"
          href={linkTo}
        >
          {link}
        </a>
      </div>
    </>
  );
};

export default Alert;
