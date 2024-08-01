const UserCard = ({
  imgSrc,
  name,
  position,
  handleItem,
  age,
  email,
  phoneNumber,
}) => {
  return (
    <div className="grid grid-flow-col text-center p-4 border text-3xl ">
      <div className="flex items-center">
        <img src={imgSrc} alt="" className="w-12 h-12 rounded-full" />
        <h1 className="">{name}</h1>
      </div>

      <span className="">{position}</span>
      <span>{age}</span>
      <span>{phoneNumber}</span>
      <span>{email}</span>
      <button onClick={handleItem}>clear</button>
    </div>
  );
};
export default UserCard;
