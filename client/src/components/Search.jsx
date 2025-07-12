import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <div className="my-3 ">
      <div className="flex justify-center">
        <label
          htmlFor="search"
          className="input input-bordered flex items-center gap-2"
        >
          <CiSearch className="text-xl text-slate-500" />
          <input
            value={searchQuery}
            type="text"
            id="search"
            placeholder="Search your todos..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <IoMdClose
              className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
              onClick={handleClearSearch}
            />
          )}
        </label>
      </div>
    </div>
  );
};

export default Search;
