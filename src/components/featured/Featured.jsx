import React from 'react'
import pokemon from "../../assets/images/lugia.png";
import suicune from "../../assets/images/suicune.png";
import zekrom from "../../assets/images/zekrom.png";
import './Featured.scss'
import { NavLink } from "react-router-dom";
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
            <img className="featured-image" src={pokemon} alt="Lugia" />
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
              <NavLink to="/search" className="button-primary">
                Learn more
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured-item">
            <img className="featured-image" src={suicune} alt="Suicune" />
            <div className="featured-meta">
              <h1>Suicune</h1>
              <p>
                Suicune embodies the compassion of a pure spring of water. It
                runs across the land with gracefulness. This POKéMON has the
                power to purify dirty water.
              </p>
              <div className="featured-types">
                <ul className="list-inline d-flex">
                  <li className="featured-type water">water</li>
                </ul>
              </div>
              <NavLink to="/search" className="button-primary">
                Learn more
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured-item">
            <img className="featured-image" src={zekrom} alt="Zekrom" />
            <div className="featured-meta">
              <h1>Zekrom</h1>
              <p>
                Concealing itself in lightning clouds, it flies throughout the
                Unova region. It creates electricity in its tail.
              </p>
              <div className="featured-types">
                <ul className="list-inline d-flex">
                  <li className="featured-type dragon">dragon</li>
                  <li className="featured-type electric">electric</li>
                </ul>
              </div>
              <NavLink to="/search" className="button-primary">
                Learn more
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
