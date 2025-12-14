import React, { useState } from 'react';
import './index.scss';

const SearchBar = ({ 
  placeholder = 'Search...', 
  onSearch, 
  onChange,
  value,
  showButton = true 
}) => {
  const [searchTerm, setSearchTerm] = useState(value || '');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    if (onChange) onChange(newValue);
  };

  const handleSearch = () => {
    if (onSearch) onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {showButton && (
        <button 
          className="search-bar__button"
          onClick={handleSearch}
        >
          🔍
        </button>
      )}
    </div>
  );
};

export default SearchBar;