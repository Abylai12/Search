import React from "react";

const SearchItem = ({ handleChange, handleClear, word }) => {
  return (
    <div className="flex flex-col items-center p-16">
      <label htmlFor="">Search here</label>
      <input
        type="text"
        className="bg-gray-300 p-2 w-60"
        placeholder="search"
        onChange={handleChange}
      />
      <button onClick={handleClear}>clear</button>
      <span>searched word:{word}</span>
    </div>
  );
};

export default SearchItem;
