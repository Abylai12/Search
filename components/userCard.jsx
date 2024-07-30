const UserCard = ({ imgSrc, name, position }) => {
  return (
    <div className="flex gap-5 justify-center items-center p-4">
      <div className="border">
        <img src={imgSrc} alt="" className="w-12 h-12 rounded-full" />
      </div>
      <div>
        <h1 className="text-3xl">{name}</h1>
      </div>
      <div>
        <span className="text-3xl">{position}</span>
      </div>
    </div>
  );
};
export default UserCard;
