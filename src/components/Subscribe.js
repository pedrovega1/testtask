import React from "react";
import sub from "../images/sub.png";

function Subscribe() {
  return (
    <div className="bg-[#121212]">
      <div className="container mx-auto py-8 flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 bg-white">
          <div className="mt-16 ml-5">
            <div className="text-2xl font-['Inter'] font-bold leading-[37px] text-black">
              SUBSCRIBE TO OUR NEWSLETTER
            </div>
            <div className="text-lg font-['Inter'] tracking-[1.26] leading-[27.8px] text-black/70 mb-6">
              SIGN ME UP FOR NF UPDATES
            </div>
            <div className="text-lg font-['Inter'] tracking-[1.26] leading-[27.8px] mb-2">
              Your email
            </div>
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-[579px] items-start mb-8">
              <input
                type="text"
                className="border-solid w-full sm:w-[402px] h-12 border-black border"
                placeholder="Your email"
              />
              <button className="bg-black text-white font-['Inter'] text-lg font-medium py-3 px-8 uppercase">
                Subscribe
              </button>
            </div>
            <div className="flex flex-row justify-between w-full sm:w-[279px] items-start">
              <a
                href="#"
                className="font-['Inter'] underline leading-[24.7px] uppercase"
              >
                Facebook
              </a>
              <div className="font-['Inter'] leading-[24.7px] uppercase text-black/50">
                Twitter
              </div>
              <div className="font-['Inter'] leading-[24.7px] uppercase text-black/50">
                Instagram
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8">
          <img src={sub} alt="Subscribe" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
