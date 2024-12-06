import React from "react";
import { ReactComponent as MenuIcon } from "../image/icon/menu.svg";
import { ReactComponent as ProfileIcon } from "../image/icon/profile.svg";
import { ReactComponent as SearchIcon } from "../image/icon/search.svg";
import { ReactComponent as ShoppingIcon } from "../image/icon/shopping.svg";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#edecea]">
      <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-0">
        <div className="logo">
          <a href="#">
            <h1 className="text-5xl text-black font-bold">.sneakers</h1>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-10 text-black text-lg">
          <a href="#" className="hover:text-[#f3595f] ease-in-out duration-300">
            Home
          </a>
          <a href="#" className="hover:text-[#f3595f] ease-in-out duration-300">
            Shop
          </a>
          <a
            href="../pages/Categorie.js"
            className="hover:text-[#f3595f] ease-in-out duration-300"
          >
            Products
          </a>
          <a href="#" className="hover:text-[#f3595f] ease-in-out duration-300">
            Page
          </a>
          <a href="#" className="hover:text-[#f3595f] ease-in-out duration-300">
            Docs
          </a>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <SearchIcon className="w-6 h-6 cursor-pointer hover:fill-[#f3595f] ease-in-out duration-300" />
          <ProfileIcon className="w-6 h-6 cursor-pointer hover:fill-[#f3595f] ease-in-out duration-300" />
          <ShoppingIcon className="w-6 h-6 cursor-pointer hover:fill-[#f3595f] ease-in-out duration-300" />
        </div>
        <div className="md:hidden flex items-center">
          <MenuIcon
            className="w-6 h-6 cursor-pointer hover:fill-[#f3595f] ease-in-out duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#edecea] py-5 px-4">
          <div className="flex flex-col gap-5 text-black text-lg">
            <a
              href="#"
              className="hover:text-[#f3595f] ease-in-out duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#f3595f] ease-in-out duration-300"
            >
              Shop
            </a>
            <a
              href="#"
              className="hover:text-[#f3595f] ease-in-out duration-300"
            >
              Products
            </a>
            <a
              href="#"
              className="hover:text-[#f3595f] ease-in-out duration-300"
            >
              Page
            </a>
            <a
              href="#"
              className="hover:text-[#f3595f] ease-in-out duration-300"
            >
              Docs
            </a>
            <div className="flex gap-5 mt-5">
              <SearchIcon className="w-6 h-6 cursor-pointer hover:fill-[#f3595f] ease-in-out duration-300" />
              <ProfileIcon className="w-6 h-6 cursor-pointer hover:fill-[#f3595f] ease-in-out duration-300" />
              <ShoppingIcon className="w-6 h-6 cursor-pointer hover:fill-[#f3595f] ease-in-out duration-300" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
