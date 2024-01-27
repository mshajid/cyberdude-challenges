const Footer = () => {
  return (
    <div>
      <div className="mx-3 lg:mx-0 sm:px-5 px-4 sm:py-5 py-3 rounded-md text-[11px] text-center sm:text-sm text-white bg-gradient-to-r from-slate-900 to-slate-700 sm:flex justify-between">
        <div>
          <span>Shajid.DEV - Journey to Full Stack Engineer From Scratch</span>
        </div>
        <div className="flex gap-x-3 justify-center">
          <a
            className="underline"
            target="_blank"
            href="https://github.com/mshajid/cyberdude-challenges"
          >
            GitHub Repository
          </a>
          <a className="underline" target="_blank" href="#">
            Contribution
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
