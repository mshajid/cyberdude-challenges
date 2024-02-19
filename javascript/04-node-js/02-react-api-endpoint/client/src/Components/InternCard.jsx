const InternCard = ({ internName, country }) => {
  return (
    <div className="m-2 max-w-xs border p-2">
      <div className="font-bold">
        Intern Name: <span className="font-normal">{internName}</span>
      </div>
      <span>
        {internName} is from {country}
      </span>
    </div>
  );
};

export default InternCard;
