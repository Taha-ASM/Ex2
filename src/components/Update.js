import React, { useState } from "react";
import vacation1Image from "../image/img/vacation1.webp";
import vacation2Image from "../image/img/vacation2.jpg";
import vacation3Image from "../image/img/vacation3.jpg";

export default function Update() {
  const [data] = useState([
    {
      date: "26 Jan 2022",
      title: "Let's start bringing Sale on this summer vacation.",
      description:
        "Minim incididunt dolor consequat dolore nisi consequat in quis et et. Qui qui velit sint aute veniam nostrud deserunt laboris officia pariatur non officia nostrud. Culpa culpa tempor laboris enim Lorem adipisicing quis ea. Ad aliquip magna enim mollit esse eu. Ex mollit commodo labore amet ea voluptate dolore excepteur cupidatat laborum dolor reprehenderit.",
      image: vacation1Image,
    },
    {
      date: "15 Feb 2022",
      title: "Spring Collection Now Available.",
      description:
        "Exercitation quis culpa officia magna eu eu esse. Sunt ad anim incididunt veniam ut tempor laborum incididunt veniam voluptate commodo. Ipsum consectetur sit do ad dolor ad voluptate est veniam consequat.",
      image: vacation2Image,
    },
    {
      date: "10 Mar 2022",
      title: "Winter Clearance Sale!",
      description:
        "Sint ipsum qui laborum tempor. Eiusmod est ipsum aliqua cillum pariatur sit qui. Mollit ad veniam non dolore id dolor ad esse.",
      image: vacation3Image,
    },
  ]);

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-center py-10 text-black font-mono text-3xl">
          New Updates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.slice(0, 3).map((i, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <img
                src={i.image}
                alt=""
                className="w-full h-auto mb-4 rounded"
              />
              <p className="text-gray-500">{i.date}</p>
              <h2 className="text-black text-2xl py-2 mb-2">{i.title}</h2>
              <p className="text-gray-700 mb-2">{i.description}</p>
              <a href="#" className="text-black font-bold">
                Continue Reading...
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
