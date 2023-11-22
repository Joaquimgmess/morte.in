import React from 'react';
import YouTubeVideo from '../../components/YouTubeVideo';

const Songs = () => {
  return (
    <div className='container mx-auto py-16 text-center xl:text-left flex flex-col xl:flex-row items-center justify-center gap-6 h-full '>
      <div >
        <h1>TAKE ME TO YOUR LEADER</h1>
        <YouTubeVideo videoId="as2zt6SPdi0" />
      </div>
      <div>
        <h1>TAKE ME TO YOUR LEADER</h1>
        <YouTubeVideo videoId="as2zt6SPdi0" />
      </div>
    </div>
  );
};

export default Songs;
