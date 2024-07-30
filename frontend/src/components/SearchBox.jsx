import React from 'react';

const SearchBox = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search tasks..."
    className="mb-4 p-2 border border-gray-300 rounded"
  />
);

export default SearchBox;
