import React, { useEffect, useState } from "react";

export default function Review() {
  const [user, setUser] = useState(null);

  async function getUser() {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    setUser(data[0]);
  }

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#f3f5f7] p-20">
      <div className="container flex flex-col items-center">
        <h1 className="text-black text-5xl text-center font-mono pb-5">
          Client Reviews
        </h1>
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-full w-28 h-28"
        />
        <p className="text-gray-360 text-center text-black py-5">
          Dolor consequat sint in laborum ad amet tempor esse sunt ad elit ad.
          Commodo pariatur enim cupidatat aliquip velit cupidatat velit tempor
          ea. Qui fugiat elit ad fugiat excepteur veniam adipisicing fugiat
          dolore consequat nulla. Dolor consequat sint in laborum ad amet tempor
          esse sunt ad elit ad. Commodo pariatur enim cupidatat aliquip velit
          cupidatat velit tempor ea. Qui fugiat elit ad fugiat excepteur veniam
          adipisicing fugiat dolore consequat nulla. Dolor consequat sint in
          laborum ad amet tempor esse sunt ad elit ad. Commodo pariatur enim
          cupidatat aliquip velit cupidatat velit tempor ea. Qui fugiat elit ad
          fugiat excepteur veniam adipisicing fugiat dolore consequat nulla.
        </p>
        <h2 className="text-center text-4xl text-black">{user.login}</h2>
        <p className="text-center text-gray-500 pt-2">CEO of Addle</p>
      </div>
    </div>
  );
}
