import React, { useState } from "react";
import UserCard from "./userCard";
import SearchItem from "./searchItem";
import SearchItems from "./searchItems";
const cardList = [
  {
    id: 1,
    firstName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "99011090",
    jobTitle: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak St, Springfield, IL",
    phone: "99011091",
    jobTitle: "Project Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    address: "789 Pine St, Springfield, IL",
    phone: "99011092",
    jobTitle: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },

  {
    id: 4,
    firstName: "Bob Brown",
    age: 35,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    firstName: "Charlie Davis",
    age: 22,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 7,
    firstName: "Mesut Ozil",
    age: 38,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 6,
    firstName: "Cole Palmer",
    age: 23,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const SearchBox = () => {
  const [word, setWord] = useState("");
  const [words, setWords] = useState("");
  const [clear, setClear] = useState(cardList);

  const handleChange = (e) => {
    setWord(e.target.value);
    clear.filter(
      (user) =>
        user?.firstName?.toLowerCase().includes(word) ||
        user?.jobTitle?.toLowerCase().includes(words)
    );
  };
  const handleChanges = (e) => {
    setWords(e.target.value);
  };

  const handleItem = (i) => {
    console.log("clear", i);
    setClear(clear.filter((user) => user.id !== i));
  };

  const handleClear = () => {
    setClear([]);
    console.log("clicked");
  };
  return (
    <section>
      <div className="flex">
        <SearchItem
          word={word}
          handleChange={handleChange}
          handleClear={handleClear}
        />
        {/* <SearchItems
          words={words}
          handleChanges={handleChanges}
          handleClear={handleClear}
        /> */}
      </div>
      {clear
        ?.filter(
          (user) =>
            user?.firstName?.toLowerCase().includes(word) ||
            user?.jobTitle?.toLowerCase().includes(words)
        )
        .map(
          ({ imageUrl, firstName, jobTitle, id, age, email, phone }, idx) => (
            <UserCard
              key={id}
              imgSrc={imageUrl}
              name={firstName}
              position={jobTitle}
              age={age}
              phoneNumber={phone}
              email={email}
              handleItem={() => handleItem(id)}
            />
          )
        )}
      {!cardList && <span> empty </span>}
    </section>
  );
};
export default SearchBox;
