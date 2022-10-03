import React from "react";

import profilePicture from "../../assets/images/chris2.jpeg";

function Home() {
  return (
    <section className="">
      <div className="max-w-[2000px] flex justify-center items-center h-screen">
        <h1 className="text-5xl">Welcome! My name is <span className="text-white">Chris</span>.</h1>

        <div className="ml-6 w-72 h-60 ">
          <img src={profilePicture} alt="Profile" className="profile-pic rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Home;
