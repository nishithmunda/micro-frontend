import React, { useEffect, useState } from "react";
import "./style.css";
import VideoPlayer from "../VideoPlayer";
import Axios from "../../ApiRequests/instance";
import { useParams } from "react-router-dom";
import requests, { API_KEY } from "../../ApiRequests/requests";
import { toHoursAndMinutes } from "../../utility";
import { Column } from "../HomeScreen/Column";

const base_url = "https://image.tmdb.org/t/p/original/";
const VideoScreen = () => {
  const [movie, setMovie] = useState<any>({});
  const { movieId }: any = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      );
      setMovie(request?.data);
      return request;
    }
    fetchData();
  }, [movieId]);

  console.log("movie", movie);
  return (
    <div className="videoscreen">
      <div className="videoscreen__detail__section">
        <div className="vertical__space30"></div>
        <p className="video__title">{movie?.title}</p>
        <div className="vertical__space30"></div>
        <div className="video__player__container">
          <VideoPlayer
            url=""
            placeholderImage={`${base_url}${movie?.backdrop_path}`}
          />
        </div>
        <div className="vertical__space30"></div>
        <div className="video__info__container">
          <div className="video__info">
            <img
              className="video__poster"
              src={`${base_url}${movie?.poster_path}`}
            />
            <div className="video__info__right">
              {/* Studio */}
              <p className="video__sypnosis__header">Studio :</p>
              <p className="video__sypnosis__detail ">
                {movie?.production_companies &&
                  movie?.production_companies?.length > 0 &&
                  movie?.production_companies?.map((p: any) => (
                    <span style={{ marginRight: 5 }}>{p.name} ,</span>
                  ))}
              </p>
              <div className="vertical__space15"></div>

              {/* Duration */}
              <p className="video__sypnosis__header">Duration :</p>
              <p className="video__sypnosis__detail ">
                {toHoursAndMinutes(movie?.runtime)}
              </p>
              <div className="vertical__space15"></div>

              {/* Genre */}
              <p className="video__sypnosis__header">Genres :</p>
              <p className="video__sypnosis__detail ">
                {movie?.genres &&
                  movie?.genres?.length > 0 &&
                  movie?.genres.map((g: any) => (
                    <span style={{ marginRight: 5 }}>{g?.name} ,</span>
                  ))}
              </p>
              <div className="vertical__space15"></div>
            </div>
          </div>
          <div className="vertical__space30"></div>
          <div className="video__sypnosis">
            <p className="video__sypnosis__header">Sypnosis :</p>
            <p className="video__sypnosis__detail">{movie?.overview}</p>
          </div>
          <div className="vertical__space30"></div>
        </div>
      </div>
      <div className="videoscreen__recommand__section">
      <Column
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
      </div>
    </div>
  );
};

export default VideoScreen;
