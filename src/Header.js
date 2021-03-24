import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to ="/">
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
          />
        </Link>
      </div>
      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to ={`/search/${inputSearch}`}>
         <SearchIcon className="header_inputButton" />
        </Link>
        
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="Anime"
          src="https://th.bing.com/th/id/R3a125d6bdfadf75b14fef09d270ad1bd?rik=4Km%2f02Ex6kq64w&riu=http%3a%2f%2fprofiledps.com%2fdownload.php%3fid%3ditm_2013-01-10_07-37-58_2.jpg&ehk=%2beD5Pa9Z7Yp5KQOXWfjNP1Wwz2NkXdV5S0%2fNCIbfofc%3d&risl=&pid=ImgRaw"
        />
      </div>
    </div>
  );
}

export default Header;
