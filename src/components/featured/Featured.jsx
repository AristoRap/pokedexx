import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Featured.scss";

export function Featured() {
  const [sample, setSample] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [description, setDescription] = useState([]);

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
          setFeatured((prev) => [...prev, response.data]);
          axios
            .get(response.data.species.url)
            .then((response) => {
              setDescription((prev) => [...prev, response.data]);
            })
            .catch((err) => {
              const mute = err;
            });
        })
        .catch((err) => {
          const mute = err;
        });
    });
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
                  {description[i] &&
                    description[i].flavor_text_entries.find(
                      (entry) => entry.language.name === "en"
                    ).flavor_text}
                </p>
                <div className="featured-types">
                  <ul className="list-inline d-flex">
                    {pokemon.types.map((p, i) => (
                      <li className={`featured-type ${p.type.name}`} key={i}>
                        {p.type.name}
                      </li>
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
