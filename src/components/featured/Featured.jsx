import React from 'react'
import pokemon from "../../assets/images/lugia.png";
import './Featured.scss'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function Featured() {
  return (
    <div className="featured">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="featured-item">
            <div className="featured-meta">
              <h1>Lugia</h1>
              <p>
                Lugia's wings pack devastating power - a light fluttering of its
                wings can blow apart regular houses. As a result, this POKéMON
                chooses to live out of sight deep under the sea.
              </p>
              <div className="featured-types">
                <ul className="list-inline d-flex">
                  <li className="featured-type psychic">psychic</li>
                  <li className="featured-type flying">flying</li>
                </ul>
              </div>
              <a href="/" className="button-primary">
                Learn more
              </a>
            </div>
            <img className="featured-image" src={pokemon} alt="Lugia" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured-item">
            <div className="featured-meta">
              <h1>Lugia</h1>
              <p>
                Lugia's wings pack devastating power - a light fluttering of its
                wings can blow apart regular houses. As a result, this POKéMON
                chooses to live out of sight deep under the sea.
              </p>
              <div className="featured-types">
                <ul className="list-inline d-flex">
                  <li className="featured-type psychic">psychic</li>
                  <li className="featured-type flying">flying</li>
                </ul>
              </div>
              <a href="/" className="button-primary">
                Learn more
              </a>
            </div>
            <img className="featured-image" src={pokemon} alt="Lugia" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
