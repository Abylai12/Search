import React, { useState } from "react";
import UserCard from "./userCard";
const cardList = [
  { imgSrc: "./images/cypress.png", name: "Naraa", position: "team-lead" },
  { imgSrc: "./images/ex.png", name: "Saraa", position: "supervisor" },
  {
    imgSrc: "./images/figma.png",
    name: "Battulga",
    position: "project-manager",
  },
  { imgSrc: "./images/git.png", name: "Haranga", position: "CEO" },
];
const SearchBox = () => {
  const [word, setWord] = useState("");
  const handleChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <section>
      <div className="flex flex-col items-center p-16">
        <label htmlFor="">Search here</label>
        <input
          type="text"
          className="bg-gray-300 p-2 w-60"
          placeholder="search"
          onChange={handleChange}
        />
        <span>searched word:{word}</span>
      </div>
      {cardList
        .filter(({ name }) => name.toLowerCase().includes(word))
        .map(({ imgSrc, name, position }, idx) => (
          <UserCard key={idx} imgSrc={imgSrc} name={name} position={position} />
        ))}
    </section>
  );
};
export default SearchBox;
