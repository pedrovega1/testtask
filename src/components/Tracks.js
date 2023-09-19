import React from "react";
import search from "../images/search.png";
import perception from "../images/perception.png";
import pause from "../images/pause.png";
import track from "../images/track.png";
import track2 from "../images/track2.png";

function Tracks() {
  const numbers = [13, 14, 14, 14, 14, 14, 14];

  return (
    <div
      className="bg-[#121212] flex flex-col md:flex-row gap-6 w-full h-auto md:h-[916px] items-start pt-20 px-2 md:px-12"
      id="TracksRoot"
    >
      <div className="flex flex-col gap-10 items-start w-full md:w-auto">
        <div
          className="text-2xl font-['Inter'] font-bold leading-[37.1px] text-white"
          id="TracksVideos1"
        >
          Tracks /{" "}
          <span className="text-white/50 contents" id="TracksVideos">
            Videos
          </span>
        </div>

        {numbers.map((number, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 w-full items-end"
          >
            <div className="text-5xl font-['Inter'] font-bold leading-[74.1px] text-white/30 self-start">
              {number}
            </div>
            <div className="self-center flex flex-col md:flex-row md:gap-6 w-full md:w-3/5 items-start">
              <div className="text-lg font-['Inter'] font-bold leading-[27.8px] text-white">
                I Miss The Days
              </div>
              <div className="self-stretch flex flex-row gap-6 items-start">
                <div className="text-lg font-['Inter'] leading-[27.8px] text-white">
                  NF
                </div>
                <div
                  className="border-solid border-[#9e9e9e] flex flex-col mt-3 w-[284px] md:w-auto items-start border-t-2 border-b-0 border-x-0"
                  id="Line"
                >
                  <div
                    className="border-solid border-[#ff6767] w-24 h-1 shrink-0 border-t-2 border-b-0 border-x-0"
                    id="Line1"
                  />
                </div>
              </div>
            </div>
            <div className="text-lg font-['Inter'] leading-[27.8px] text-white mb-2 md:mb-0 mr-2">
              4:29
            </div>
            <img
              src="https://file.rendit.io/n/3A9IK2ERPUacMrMAVvr4.svg"
              className="mb-1 w-8 shrink-0"
              id="Element4"
            />
          </div>
        ))}

      </div>

      <div className="flex flex-col gap-3 items-start mt-4 md:mt-24 mr-2 md:mr-8">
        <div className="flex flex-col w-32 md:w-40 items-start">
          <div className="text-lg font-['Inter'] font-bold leading-[27.8px] text-white/70">
            Album: THE SEARCH
          </div>
          <div className="text-lg font-['Inter'] leading-[27.8px] text-white/70">
            July 26, 2019
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/YMJrUpPunOPbzksIB1CE.png"
          className=""
        />
      </div>
      <div className="self-center flex flex-col mt-4 md:mt-0 md:mr-4 gap-8 items-center">
        <div className="flex flex-col w-40 md:w-48 items-start">
          <div className="text-lg font-['Inter'] font-bold leading-[27.8px] text-white/40">
            Album: PERCEPTION
          </div>
          <div className="text-lg font-['Inter'] leading-[27.8px] text-white/40">
            October 6, 2017
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/vOkf7ERlzpVpWqG2u8GB.png"
          className=""
          id="Ecdbbe"
        />
      </div>
      <img
        src="https://file.rendit.io/n/dK7y26G2oofnGzFdKcjG.svg"
        className="self-center w-4 shrink-0 mt-4 md:mt-0"
        id="Arrow"
      />
    </div>
  );
}

export default Tracks;
