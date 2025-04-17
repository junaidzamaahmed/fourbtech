import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-red-400">
      <div className="h-screen w-full relative">
        <video
          src="/herobg.mp4"
          autoPlay
          loop
          className="h-screen w-full object-cover absolute"
        />
      </div>
    </section>
  );
};

export default Hero;
