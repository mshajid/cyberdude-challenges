const CardImage = ({ link }) => {
  return (
    <div>
      <img className="w-full h-[200px] object-cover rounded-md" src={link} />
    </div>
  );
};

export default CardImage;
