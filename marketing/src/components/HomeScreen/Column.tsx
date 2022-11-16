import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Column.css";
import { MovieType } from "./Row";
import Axios from "../../ApiRequests/instance";

const base_url = "https://image.tmdb.org/t/p/original/";
export const Column = ({ title, fetchUrl }: ColumnProps) => {
  const [movies, setMovies] = useState<Array<MovieType>>([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(fetchUrl);
      setMovies(request?.data?.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="column">
      <div className="vertical__space30"></div>  
      <h2>{title}</h2>
      <div className="vertical__space30"></div>
      <div className="column__posters">
        {movies.map(
          (movie: MovieType) =>
            movie?.poster_path &&
            movie?.poster_path.length > 0 && (
              <img
                onClick={() => {
                  history.push(`/playing/${movie?.id}`);
                }}
                loading="lazy"
                key={movie?.id}
                className="column__poster "
                src={`${base_url}${movie?.poster_path}`}
                alt={movie?.title}
              />
            )
        )}
      </div>
    </div>
  );
};

interface ColumnProps {
  title: string;
  fetchUrl: string;
}
