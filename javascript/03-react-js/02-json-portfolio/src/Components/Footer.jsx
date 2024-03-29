const Footer = ({ author }) => {
  return (
    <div className="bg-[#01497C] py-3 px-3 text-white sm:text-left text-center rounded-lg">
      <span className="tracking-wider text-sm">Developed by {author}</span>
    </div>
  );
};

export default Footer;
