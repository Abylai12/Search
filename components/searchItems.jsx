import React from "react";

const SearchItems = ({ handleChanges, handleClear, words }) => {
  return (
    <div className="flex flex-col items-center p-16">
      <label htmlFor="">Search here</label>
      <input
        type="text"
        className="bg-gray-300 p-2 w-60"
        placeholder="search"
        onChange={handleChanges}
      />
      <button onClick={handleClear}>clear</button>
      <span>searched word:{words}</span>
    </div>
  );
};

export default SearchItems;
