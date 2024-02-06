const CardBody = ({ title, desc }) => {
  return (
    <div className="px-5 py-2">
      <div className="pb-2 font-semibold text-lg tracking-wide">{title}</div>
      <div className="text-sm">{desc}</div>
    </div>
  );
};

export default CardBody;
