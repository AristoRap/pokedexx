import React from 'react'
import { SearchForm } from '../search-form/SearchForm'
import { Featured } from '../featured/Featured'

import './Home.scss'

export function Home() {
  return (
    <div className="container home">
      <SearchForm />
      <Featured />
    </div>
  );
}
