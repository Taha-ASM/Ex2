import React from "react";
import { ReactComponent as ArrowIcon } from "../image/icon/arrow.svg";
import { ReactComponent as ArrowDownIcon } from "../image/icon/arrowd.svg";
import headerImage from "../image/img/header.jpg";

export default function Header() {
  const scrollDown = () => {
    window.scrollBy({
      top: 900,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#edecea] p-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#f3595f]">Winter Collection</p>
          <h1 className="text-black text-4xl md:text-6xl font-bold mt-4 md:mt-6">
            New Winter Collection 2022
          </h1>
          <p className="text-[#4e514f] text-lg md:text-xl mt-3 md:mt-5">
            There's nothing like trend
          </p>
          <button className="border border-black py-3 px-6 md:py-5 md:px-8 mt-4 md:mt-6 flex items-center gap-2 text-black hover:bg-black hover:text-white hover:fill-white ease-in-out duration-300">
            Shop Now <ArrowIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 flex-col flex lg:items-end md:items-baseline justify-center">
          <img
            src={headerImage}
            alt="Winter Collection"
            className="w-full md:w-auto"
          />
          <button
            onClick={scrollDown}
            className="border border-black rounded-full p-4 md:p-6 mt-4 md:ml-8 hover:bg-black hover:fill-white ease-in-out duration-300"
          >
            <ArrowDownIcon className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
