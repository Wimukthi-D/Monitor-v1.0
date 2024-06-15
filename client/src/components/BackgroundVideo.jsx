import React from 'react';
import BG from '../assets/Bgvid.mp4'
const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      <video className="object-cover w-full h-full" autoPlay loop muted>
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
    </div>
  );
};

export default BackgroundVideo;
