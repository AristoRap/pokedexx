import React from 'react'
import './Search.scss'

export function Search() {
  return (
    <div className="search-form">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
}
