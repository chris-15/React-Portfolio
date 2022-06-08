import React from "react";
import profilePicture from "../../assets/images/chris_pic.jpg";

function Home() {
  return (
    <section className="flex justify-center items-center h-screen">
      
      <div className="image-container">
        <img src={profilePicture} alt="Profile" className="profile-pic" />
      </div>

      <p className="pl-6 text-3xl">Welcome! My name is Chris.</p>
    
    </section>
  );
}

export default Home;
