import React from "react";
import { MdSearch } from "react-icons/md";

interface IProps {
  handleSearchNote: Function;
}

const Search: React.FC<IProps> = ({ handleSearchNote }) => {
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleSearchNote(event.target.value);
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input onChange={onSearch} type="text" placeholder="type to search..." />
    </div>
  );
};

export default Search;
