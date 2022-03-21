import { SearchForm } from "../search-form/SearchForm";
import './Search.scss'

import React from "react";

export function Search() {
  return (
    <div className="container search-wrap">
      <SearchForm />
    </div>
  );
}
