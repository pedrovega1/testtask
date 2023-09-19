import React from "react";
import img1 from "../images/img1.png";

function Card() {
  return (
    <div className="flex flex-col lg:flex-row lg:ml-12 lg:gap-24 items-center">
      <div className="flex flex-col lg:flex-row lg:gap-6 lg:items-start">
      
        <div className="flex flex-col justify-between gap-4 w-full lg:w-[514px] lg:shrink-0 items-start">
          <div className="text-2xl lg:text-3xl font-semibold leading-[42px] lg:leading-[49.4px] uppercase text-[#fffafa]">
            OFFICIAL MERCHANDISE
          </div>
          <div className="font-['Inter'] leading-[21px] lg:leading-[24.7px] uppercase text-[#a0a0a0]">
            the only place you can get OFFICIAL NF merchandise!
            
            Shop our selection of sweatshirts, t-shirts, hats and MORE - hand
            picked by NF himself.
          </div>
          <div className="border-solid border-white flex flex-col lg:flex-row justify-center h-12 lg:h-16 lg:shrink-0 items-center border">
            <div className="text-base lg:text-lg font-tracking-wide uppercase text-white ml-4 lg:ml-6 mr-4 lg:mr-5">
              go to store
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://file.rendit.io/n/2NJhYAk6MxA9t6ZuYGhA.png"
        className="mt-4 lg:mt-0 max-w-full h-auto"
        alt="Merchandise"
      />
    </div>
  );
}

export default Card;
