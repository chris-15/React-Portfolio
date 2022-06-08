import React from "react";
import profilePicture from "../../assets/images/chris_pic.jpg";

function Home() {
  return (
    <section className="flex justify-center items-center h-screen">
      
      <div className="image-container">
        <img src={profilePicture} alt="Profile" className="profile-pic" />
      </div>

      <h1 className="pl-6 text-5xl">Welcome! My name is Chris.</h1>
    
    </section>
  );
}

export default Home;
