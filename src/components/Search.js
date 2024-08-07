import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        value={searchTerm}
        onChange={handleChange}
        type="text"
        placeholder="Search your Recent Transactions"
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
