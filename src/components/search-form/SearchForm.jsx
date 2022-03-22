import React, {useState} from "react";
import "./SearchForm.scss";
import { Navigate, useNavigate } from "react-router-dom";
export function SearchForm() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('')

  const goToSearch = () => {
    navigate({
      pathname: "/search",
      search: `query=${query}`,
    });
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <form className="search-form" onSubmit={goToSearch}>
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}
