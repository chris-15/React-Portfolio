import React from "react";
import profilePicture from "../../assets/images/chris_pic.jpg";

function Home() {
  return (
    <section className="flex justify-center items-center h-screen flex-wrap
    ">
      <h1 className="text-5xl">Welcome! My name is Chris.</h1>

      <div className="image-container ml-6">
        <img src={profilePicture} alt="Profile" className="profile-pic" />
      </div>

      
    
    </section>
  );
}

export default Home;
