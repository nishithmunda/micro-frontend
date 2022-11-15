import React, { useEffect, useState } from "react";
import "./style.css";
import VideoPlayer from "../VideoPlayer";
import Axios from "../../ApiRequests/instance";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../ApiRequests/requests";
const base_url = "https://api.themoviedb.org/3";

const VideoScreen = () => {
  const [movie, setMovie] = useState<any>({});
  const { movieId }: any = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(`${base_url}/movie/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      });
      setMovie(request?.data);
      return request;
    }
    fetchData();
  }, [movieId]);

  console.log("movie", movie);
  return (
    <div className="videoscreen">
      <div className="videoscreen__detail__section">
        <div className="video__player__container">
          <VideoPlayer url="" />
        </div>
        <div className="video__info__container">
          <div className="video__info">
            <img />
            <div className="video__info__right"></div>
          </div>
          <div className="video__sypnosis"></div>
        </div>
      </div>
      <div className="videoscreen__recommand__section"></div>
    </div>
  );
};

export default VideoScreen;
