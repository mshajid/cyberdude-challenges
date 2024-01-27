const Footer = () => {
  return (
    <div>
      <div className="px-5 py-5 rounded-md text-sm text-white bg-gradient-to-r from-slate-900 to-slate-700 flex justify-between">
        <div>
          <span>Shajid.DEV - Journey to Full Stack Engineer From Scratch</span>
        </div>
        <div className="flex gap-x-2">
          <a className="underline" target="_blank" href="https://github.com/mshajid/cyberdude-challenges">GitHub Repository</a>
          <a className="underline" target="_blank" href="#">Contribution</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
