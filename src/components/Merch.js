import React from 'react';
import merch from '../images/merch.png';
import merch2 from '../images/merch2.png';

function Merch() {
  return (
    <div className="bg-[#121212] relative w-full">
      <h5 className="text-2xl font-['Inter'] font-bold text-white md:text-center py-4">
        Merch
      </h5>
      <div className="flex flex-col lg:flex-row justify-between w-full items-center px-4 py-10 lg:py-20" id="MerchRoot">
        <div className="flex flex-col gap-4 sm:w-full md:w-1/2 lg:w-1/2 items-center sm:items-start">
          <img src={merch} className="w-full max-w-[580px]" id="Image1" alt="Merch" />
          <div className="text-lg font-['Inter'] tracking-[1.26] leading-[27.8px] text-white">
            BLACK "DRIFTING" HOODIE
          </div>
          <div className="text-lg font-['Inter'] font-bold tracking-[1.26] leading-[27.8px] text-white">
            $ 50.00
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center mt-6 lg:mt-0 lg:w-1/2">
          <img src={merch2} className="w-full max-w-[416px]" alt="Merch 2" />
          <div className="text-lg font-['Inter'] tracking-[1.26] leading-[27.8px] text-white">
            BLACK "JUST LIKE YOU" HOODIE
          </div>
          <div className="text-lg font-['Inter'] font-bold tracking-[1.26] leading-[27.8px] text-white">
            $ 50.00
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center mt-6 lg:w-1/2">
          <img src="https://file.rendit.io/n/BbcH6DdxlIQWV16G9FAn.png" className="w-full max-w-[389px]" alt="Merch 3" />
          <div className="text-lg font-['Inter'] tracking-[1.26] leading-[27.8px] text-white">
            BLACK "JUST LIKE YOU" HOODIE
          </div>
          <div className="text-lg font-['Inter'] font-bold tracking-[1.26] leading-[27.8px] text-white">
            $ 30.00
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merch;
