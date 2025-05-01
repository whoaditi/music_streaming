import React from "react";
import { assets } from '../assets/fullstack_spotify_assets/assets/frontend-assets/assets';

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-6 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold text-white">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-6 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold text-white">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-1">
            <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
            <p className="font-semibold text-white"> Your Library</p>
          </div>
          <div className="flex items-center gap-3">
          <img className="w-5" src={assets.arrow_icon} alt=""/>
           <img className="w-5" src={assets.plus_icon} alt=""/>
          </div>
        </div>
      <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
        <h1 className="text-white pl-1"> Create your playlist</h1>
        <p className="font-light text-white pl-1">we will help you</p>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">create playlist</button>  
      </div>
   <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
        <h1 className="text-white pl-1"> Let's find  some podcast to follow</h1>
        <p className="font-light text-white pl-1">we will update you on episodes</p>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">browse podcast</button>  
      </div>
      </div>
    </div>
  );
};

export default Sidebar;