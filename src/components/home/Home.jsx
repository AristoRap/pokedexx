import React from 'react'
import { Search } from '../search/Search'
import pokemon from "../../assets/images/lugia.png";
import './Home.scss'

export function Home() {
  return (
    <div className="container home">
      {/* TO-DO */}
      {/* Make featured a component */}
      <div className="featured">
        <div className="featured-item">
          <div className="featured-meta">
            <h1>Lugia</h1>
            <p>
              LUGIA's wings pack devastating power - a light fluttering of its
              wings can blow apart regular houses. As a result, this
              POKéMON chooses to live out of sight deep under the sea.
            </p>
          </div>
          <img className="featured-image" src={pokemon} alt="Lugia" />
        </div>
      </div>
    </div>
  );
}
