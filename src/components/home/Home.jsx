import React from 'react'
import { Search } from '../search/Search'
import { Featured } from '../featured/Featured'

import './Home.scss'

export function Home() {
  return (
    <div className="container home">
      <Search />
      <Featured />
    </div>
  );
}
