import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "../../ApiRequests/instance";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }: RowProps) {
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
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie: MovieType) =>
            movie?.backdrop_path &&
            movie?.backdrop_path.length > 0 && (
              <img
                onClick={() => {
                  history.push(`/playing/${movie?.id}`);
                }}
                loading="lazy"
                key={movie?.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.title}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
}
