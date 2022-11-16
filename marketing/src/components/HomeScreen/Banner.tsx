import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "../../ApiRequests/instance";
import requests from "../../ApiRequests/requests";
import "./Banner.css";
import { MovieType } from "./Row";

function Banner() {
  const history = useHistory();
  const [movie, setMovie] = useState<MovieType>();

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length) - 1
        ]
      );
    }

    fetchData();
  }, []);

  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                 'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
             )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name}</h1>

        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => history.push(`/playing/${movie?.id}`)}
          >
            Play
          </button>
        </div>

        <h2 className="banner__description">
          {truncate(movie?.overview!, 150)}
        </h2>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
