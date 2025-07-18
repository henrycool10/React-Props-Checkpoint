import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* background video */}
      <div className="absolute w-full h-full">
        <video
          className=" w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="hero.mp4"
        ></video>
      </div>
      {/* dark overlay */}
      <div className=" absolute inset-0 bg-black/50">

      </div>
       <div className=" relative z-20 h-full flex mx-auto max-w-6xl flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl text-white md:text-7xl mb-6">Hello there you can shop here on <span className="text-green-600"> Routing Class</span></h1>
      
      <p className="text-lg mb-6 text-white max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis accusamus commodi enim.</p>
      <a href="/players"> <button className="bg-green-500 px-9 py-4 rounded text-white transition hover:bg-green-600">View Player</button></a>
      
    </div>
    </div>
  );
};

export default Home;
