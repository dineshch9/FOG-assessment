import { useState } from "react";
import bg from "./assets/bg.jpg";
import Tooltip from "./components/Tooltip.jsx"

function App() {
 



  return (
    <>
      <div className="relative flex flex-row overflow-hidden min-h-screen w-screen">
        <img
className="absolute -z-20 w-full h-full scale-105 "
  src={bg}
  alt="Background"
/>

        <div className="left-div relative w-20 h-screen flex flex-col    bg-transparent border-r-[1px] border-gray-500">
         <div className="flex grow order-1 flex-col gap-4 items-center justify-center">
         {[...Array(7)].map((_, i) => (
  <img key={i} className="w-8" src={`/side_panel/${i}.png`} alt="" />
))}

         



          
          
         </div>

         
         
         
         
          <div className="order-2"><Tooltip/> 
            </div>
           
          
        </div>
        <div className="middle-div pb-3 flex flex-col h-screen bg-transparent grow pl-8 pt-5">
          <div className="relative pb-20 top-0 w-full flex flex-col h-6">
            <div className="flex flex-row ">
              <img
                className=""
                src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg"
                alt=""
              />
              
                <a className="ml-2 text-white"  href="">MULTIPLAYER</a>
                <p className="ml-2 text-white">/</p>
                <a className="ml-2 text-white" href="">SERVER BROWSER</a>
                <p className="ml-2 text-white">/</p>
            </div>
            <div>
              <p className="font-bold text-lg text-white">SERVER INFO</p>
            </div>
          </div>
          <div className="bg-transparent  grow overflow-auto scrollbar-custom max-w-[65%] ">
            <p className="text-white">! RC3-BASEMAPS</p>
            <img className="inline-block pr-1" src="https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg" alt="" />
            <p className="text-white inline-block text-[12px]"> CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ</p>
            <p className="text-white text-wrap  text-[12px]"> Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord</p>
            <p className="text-white  text-[12px]">https://discord.gg/3r5NK4d</p>
            <div className="flex mob:gap-5 mob:flex-row flex-wrap  mt-2 tab:flex-row items-stretch tab:space-x-5">
              <button className="border-white border items-center w-[35%] tab:basis-[20%] hover:bg-white hover:text-black  ">JOIN</button>
              <button className="border-white border hover:bg-white w-[35%] tab:basis-[20%] hover:text-black  ">SPECTATE</button>
              <button className="border-white border hover:bg-white hover:text-black w-[35%] tab:basis-[20%] tab:text-nowrap  ">JOIN AS COMMANDER</button>
              <button className="border-white border hover:bg-black hover:border-0 hover:text-white mob:w-[35%] tab:basis-[14%] flex items-center justify-center hover:invert flex-wrap  "><img className=" scale-75 " src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1b8abc05e847f1ac43f_favorites%20-%20white.svg" alt="" /><span>1345</span></button>
            </div>
            <div className="flex flex-row  flex-wrap  justify-between">
              <div className="text-white mt-2 ">
                <p className="text-sm font-semibold">PLAYERS</p>
                <p className="text-base font-bold">60/64</p>
              </div>
              <div className="text-white mt-2  ">
                <p className="text-sm font-semibold">PING</p>
                <p className="text-lg font-bold">104ms</p>
              </div>
              <div className="text-white mt-2  ">
                <p className="text-sm font-semibold">TICKRATE</p>
                <p className="text-lg font-bold">60HZ</p>
              </div>
              
            </div>
            <div className="flex mob:gap-5 mob:flex-col tab:flex-row   lg:space-x-8">
              <div className="text-white basis-[24%] ">SETTINGS
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>REGION</span><span>EUROPE-DE</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>PUNKBASTER</span><span>ON</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>FAIRFIGHT</span><span>ON</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>PASSWORD</span><span>OFF</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>PRESET</span><span>NORMAL</span></div>
              
                
               
              </div>
              <div className="text-white basis-[24%] ">ADVANCE
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between flex-wrap border-b-[1px] pt-1 pb-2 px-2"><span>REGION</span><span>EUROPE-DE</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>PUNKBASTER</span><span>ON</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>FAIRFIGHT</span><span>ON</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>PASSWORD</span><span>OFF</span></div>
               
              </div>
              <div className="text-white basis-[24%] ">RULES
                <div className=" hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>REGION</span><span>EUROPE-DE</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>PUNKBASTER </span><span>ON</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>FAIRFIGHT</span><span>ON</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>PASSWORD</span><span>OFF</span></div>
                <div className="hover:invert hover:bg-black hover:border-0 flex justify-between border-b-[1px] pt-1 pb-2 px-2"><span>PRESET</span><span>NORMAL</span></div>
              
                
               
              </div>
            </div>
            <div className="mt-6 text-white">MAP ROTATION
            <div className="flex flex-row flex-wrap justify-between  gap-5">
             <div className="relative hover:shadow-2xl w-40 h-24 "><img className="absolute -z-20 h-full  object-cover" src={`maps/map1.png`} alt="" /><div className="bg-opacity-75  hover:bg-black  bg-black   hover:shadow-lg absolute bottom-0  w-full h-1/2 hover:invert text-white font-medium flex-col justify-start  "><p>conquest large
              </p> <p>dawnbreaker</p> </div></div>
             <div className="relative hover:shadow-2xl w-40 h-24 "><img className="absolute -z-20 h-full  object-cover" src={`maps/map2.png`} alt="" /><div className="bg-opacity-75  hover:bg-black  bg-black   hover:shadow-lg absolute bottom-0  w-full h-1/2 hover:invert text-white font-medium flex-col justify-start  "><p>conquest large </p> <p>propaganda</p> </div></div>
             <div className="relative hover:shadow-2xl w-40 h-24 "><img className="absolute -z-20 h-full  object-cover" src={`maps/map3.png`} alt="" /><div className="bg-opacity-75  hover:bg-black  bg-black   hover:shadow-lg absolute bottom-0  w-full h-1/2 hover:invert text-white font-medium flex-col justify-start  "><p>conquest large </p> <p>operation locker</p> </div></div>
             <div className="relative hover:shadow-2xl w-40 h-24 "><img className="absolute -z-20 h-full  object-cover" src={`maps/map4.png`} alt="" /><div className="bg-opacity-75  hover:bg-black  bg-black   hover:shadow-lg absolute bottom-0  w-full h-1/2 hover:invert text-white font-medium flex-col justify-start  "><p>conquest large
              </p> <p>siege of shanghai</p> </div></div>
             <div className="relative hover:shadow-2xl w-40 h-24 "><img className="absolute -z-20 h-full  object-cover" src={`maps/map5.png`} alt="" /><div className="bg-opacity-75  hover:bg-black  bg-black   hover:shadow-lg absolute bottom-0  w-full h-1/2 hover:invert text-white font-medium flex-col justify-start  "><p>conquest large
              </p> <p>golmud railway</p> </div></div>
             

            </div>
            </div>
            
          </div>
        </div>
        <div className="group w-14 pt-5 absolute right-0 top-0 h-screen hover:w-40 hover:z-30 transition-all duration-500  hover:bg-opacity-45 hover:bg-black  flex flex-col gap-2  hover:shadow-lg bg-transparent text-white text-xs">
        
         <div className="group-hover:border-t-[1px] space-y-2 "><div className=" flex gap-2"><img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" alt="" />SQUAD</div>  <div className="flex items-center"><img className="w-9 h-10 border-l-[2px]" src={`/side_panel/sp2/2.png`} alt="" /><div className=" ml-2 text-xs hidden group-hover:block"><p>squad join</p> </div></div></div> 
         <div className="group-hover:border-t-[1px] space-y-2 "><div className=" flex gap-2"><img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg" alt="" /> ONLINE</div>  <div className="flex items-center"><img className="w-9 h-10 border-l-[2px] border-green-300  " src={`/side_panel/sp2/0.png`} alt="" /><div className=" ml-2 text-xs hidden group-hover:block"><p>dinesh</p> <p>online</p></div></div></div> 
         <div className="group group-hover:border-t-[1px] space-y-2 "><div className=" flex gap-2"><img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg" alt="" /> OFFLINE</div>  <div className="flex items-center"><img className="w-9 h-10 border-l-[2px] border-gray-600 opacity-70 group-hover:opacity-100 " src={`/side_panel/sp2/1.png`} alt="" /><div className=" ml-2 text-xs hidden group-hover:block"><p>453</p> <p>offline</p></div></div></div> 
         
         
        
          
          
        </div>
      </div>
    </>
  );
}

export default App;
