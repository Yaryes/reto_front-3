import React from 'react';

export const Container = () => {
  return (
    <div className="sm:mx-auto p-8 mt-20 text-center sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-zinc-800 rounded-md mx-20">
      <div className="flex items-center justify-center">
        <img
          src="/avatar-jessica.jpeg"
          alt="imagen-avatar"
          className="h-16 w-16 rounded-full"
        />
      </div>
      <div>
        <h3 className="text-white">Jssica Randall</h3>
        <h3 className="text-lime-400">London, United Kingdom</h3>
        <h3 className="text-sm">"Front-end developer and avid reader."</h3>
      </div>
      <div className="bg-zinc-700 text-xs rounded-md p-2 mb-2 text-white">
        <button className="">GitHub</button>
      </div>
      <div className="bg-zinc-700 text-sm rounded-md p-2 mb-2 text-white">
        <button className="">Frontend Mentor</button>
      </div>
      <div className="bg-zinc-700 text-sm rounded-md p-2 mb-2 text-white">
        <button className="">LinkedIn</button>
      </div>
      <div className="bg-zinc-700 text-sm rounded-md p-2 mb-2 text-white">
        <button className="">Twitter</button>
      </div>
      <div className="bg-zinc-700 text-sm rounded-md p-2 mb-2 text-white">
        <button className="">Instagram</button>
      </div>
    </div>
  );
};  