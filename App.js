import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Video from './Video';
import Menu from './Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

function App() {
	const [src, setSrc] = useState(VIDEOS.fast);


  //Below I used bracket notation because dot notation would not work

  /*
    the reason dot notation would not work is because dot notation requires the property name to be known at the time of development

    && bracket notation allows for the property name to dynamically render
  */
  const onSelectVideoHandler = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
  }



	return (
      <div>
        <h1>Video Player</h1>
        <Menu onSelectVideo={onSelectVideoHandler} />
        <Video src={src} />
      </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
