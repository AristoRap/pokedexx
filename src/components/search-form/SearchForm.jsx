import React from 'react'
import './SearchForm.scss'

export function SearchForm() {
  return (
    <div className="search-form">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
}
