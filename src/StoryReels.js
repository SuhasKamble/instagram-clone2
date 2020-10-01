import { Avatar } from "@material-ui/core";
import React from "react";
import "./StoryReels.css";

function StoryReels() {
  return (
    <div className="storyReel">
      <div className="storyReel__options">
        <div className="storyReel__option">
          <Avatar src="https://cdn.pixabay.com/photo/2020/09/10/21/06/woman-5561498_1280.jpg" />
        </div>
        <div className="storyReel__option">
          <Avatar src="https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_1280.jpg" />
        </div>
        <div className="storyReel__option">
          <Avatar src="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_1280.jpg" />
        </div>
        <div className="storyReel__option">
          <Avatar src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" />
        </div>
        <div className="storyReel__option">
          <Avatar src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg" />
        </div>
        <div className="storyReel__option">
          <Avatar src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg" />
        </div>
        <div className="storyReel__option">
          <Avatar src="https://cdn.pixabay.com/photo/2012/12/20/10/12/michelangelo-71282_1280.jpg" />
        </div>
      </div>
    </div>
  );
}

export default StoryReels;
