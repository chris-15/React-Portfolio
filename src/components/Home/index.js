import React from "react";

import profilePicture from "../../assets/images/chris2.jpeg";

function Home() {
  return (
    <section className="max-w-[2000px] flex justify-center items-center h-screen">
        <h1 className="text-5xl">Welcome! My name is <span className="text-white animate-pulse">Chris</span>.</h1>

        <div className="ml-6 mt-24 sm:mt-0 w-72 h-60 ">
          <img src={profilePicture} alt="Profile" className="profile-pic rounded-full" />
        </div>
      
    </section>
  );
}

export default Home;
