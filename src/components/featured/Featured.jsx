import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import pokemon from "../../assets/images/lugia.png";
import suicune from "../../assets/images/suicune.png";
import zekrom from "../../assets/images/zekrom.png";
import "./Featured.scss";

export function Featured() {
  const [sample, setSample] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 700);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${random}`;
    axios
      .get(url)
      .then((response) => {
          setSample(response.data.results);
      })
      .catch((err) => {
        const mute = err;
      });
  }, []);

  useEffect(() => {
    sample.forEach((pokemon) => {
      axios
        .get(pokemon.url)
        .then((response) => {
          setFeatured((prev) => [
            ...prev,
            response.data,
          ]);
        })
        .catch((err) => {
          const mute = err;
        });
    })
  }, [sample]);

  return (
    <div className="featured">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {featured.map((pokemon, i) => (
          <SwiperSlide key={i}>
            <div className="featured-item">
              <img
                className="featured-image"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
              />
              <div className="featured-meta">
                <h1>
                  {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                </h1>
                <p>
                  Lugia's wings pack devastating power - a light fluttering of
                  its wings can blow apart regular houses. As a result, this
                  POKéMON chooses to live out of sight deep under the sea.
                </p>
                <div className="featured-types">
                  <ul className="list-inline d-flex">
                    {pokemon.types.map((p, i) => (
                      <li className={`featured-type ${p.type.name}`} key={i}>{p.type.name}</li>
                    ))}
                  </ul>
                </div>
                <NavLink to="/search" className="button-primary">
                  Learn more
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
