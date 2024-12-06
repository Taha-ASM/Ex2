import React, { useEffect, useState } from "react";
import { ReactComponent as HeartIcon } from "../image/icon/heart.svg";
import { ReactComponent as StarIcon } from "../image/icon/star.svg";

export default function Products() {
  const [data, setData] = useState([]);

  async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    setData(await res.json());
  }

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div className="bg-white p-5 md:p-20">
      <div className="container mx-auto">
        <h1 className="text-black text-3xl md:text-5xl font-bold text-center pb-8 md:pb-16">
          Our Trending <span className="text-[#ff3239]">Products</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20">
          {data.slice(0, 8).map((i) => (
            <a
              href={"/product?id=" + i.id}
              className="cursor-pointer transition duration-300 ease-in-out
            transform hover:-translate-y-1 hover:drop-shadow-2xl"
              key={i.id}
            >
              <div
                key={i.id}
                className="card cursor-pointer w-72 h-full md:w-96 bg-white shadow-xl rounded-lg mx-auto"
              >
                <div className="flex justify-center items-center h-full">
                  <figure className="relative">
                    <img
                      src={i.image}
                      alt="Jeans"
                      className="w-32 h-auto object-cover mt-20 rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4 bg-white p-1 rounded-full shadow-md">
                      <div className="flex items-center text-orange-500">
                        {[...Array(4)].map((_, index) => (
                          <StarIcon key={index} className="w-4 h-4" />
                        ))}
                        <StarIcon className="w-4 h-4 fill-gray-300" />
                      </div>
                    </div>
                  </figure>
                </div>
                <div className="card-body p-4">
                  <h1 className="card-title text-black text-lg font-semibold text-center">
                    {i.title}
                  </h1>
                  <p className="text-black text-md">${i.price}</p>
                  <div className="card-actions justify-between items-center mt-2">
                    <div></div>
                    <HeartIcon className="w-5 h-5 cursor-pointer hover:fill-[#f3595f] ease-in-out duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
