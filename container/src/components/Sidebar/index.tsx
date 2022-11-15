import React from "react";
import { MusicIcon } from "./MusicIcon";
import { SettingIcon } from "./SettingIcon";
import { VideoIcon } from "./VideoIcon";
import { useHistory } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar sidebar__align">
      <div className="sidebar__item" onClick={() => history.push(`/`)}>
        <VideoIcon style={{ width: 30 }} />
        <p className="sidebar__item__title">Movies</p>
      </div>
      <div className="sidebar__item" onClick={() => history.push(`/playing/music`)}>
        <MusicIcon style={{ width: 30 }} />
        <p className="sidebar__item__title">Music</p>
      </div>
      <div className="sidebar__item" onClick={() => history.push(`/auth/signin`)}>
        <SettingIcon style={{ width: 30 }} />
        <p className="sidebar__item__title">Setting</p>
      </div>
    </div>
  );
};

export default Sidebar;
