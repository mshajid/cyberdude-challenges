import React from "react";

const Button = ({ variant, children, className }) => {
  const variants = {
    Primary:
      "bg-indigo-500/40 text-indigo-900 px-2 py-1 rounded-md border border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all text-sm",
    Secondary:
      "bg-zinc-500/40 text-zinc-900 px-2 py-1 rounded-md border border-zinc-500 hover:bg-zinc-500 hover:text-white transition-all text-sm",
    Success:
      "bg-emerald-500/40 text-emerald-900 px-2 py-1 rounded-md border border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all text-sm",
    Warning:
      "bg-amber-500/40 text-amber-900 px-2 py-1 rounded-md border border-amber-500 hover:bg-amber-500 hover:text-white transition-all text-sm",
    Danger:
      "bg-rose-500/40 text-rose-900 px-2 py-1 rounded-md border border-rose-500 hover:bg-rose-500 hover:text-white transition-all text-sm",
    Info: "bg-sky-500/40 text-sky-900 px-2 py-1 rounded-md border border-sky-500 hover:bg-sky-500 hover:text-white transition-all text-sm",
    Light:
      "bg-white text-slate-900 px-2 py-1 rounded-md border border-slate-500 hover:bg-slate-200 hover:text-black transition-all text-sm",
    Dark: "bg-slate-950/60 text-slate-950 px-2 py-1 rounded-md border border-slate-500 hover:bg-slate-900 hover:text-white transition-all text-sm",
  };
  return (
    <>
      <button className={`${variants[variant]} ${className}`}>
        {children} {variant} Button
      </button>
    </>
  );
};

export default Button;
