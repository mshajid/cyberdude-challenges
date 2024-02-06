const Alert = ({ variant, label, className, link, linkTo, children }) => {
  const variants = {
    Primary:
      "bg-indigo-500/70 text-indigo-900 border-2 border-indigo-500 rounded text-indigo-950",
    Secondary:
      "bg-zinc-500/70 text-zinc-900 border-2 border-zinc-500 rounded text-zinc-950",
    Success:
      "bg-emerald-500/70 text-emerald-900 border-2 border-emerald-500 rounded text-emerald-950",
    Warning:
      "bg-amber-500/70 text-amber-900 border-2 border-amber-500 rounded text-amber-950",
    Danger:
      "bg-rose-500/70 text-rose-900 border-2 border-rose-500 rounded text-rose-950",
    Info:
      "bg-sky-500/70 text-sky-900 border-2 border-sky-500 rounded text-sky-950",
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
