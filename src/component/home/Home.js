import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container mx-auto p-2 hero-content flex-col lg:flex-row-reverse">
        <div className="foto-profile"></div>
        <div>
          <h1 className="text-4xl font-bold">
            <span className="orange">FRONT-END</span> DEVELOPER
          </h1>
          <p className="py-1">
            A passionate Front-end Developer based in Jakarta.
          </p>
          <button className="btn btn-outline btn-primary mr-5">
            See Resume
          </button>
          <button className="btn btn-outline btn-primary">Portfolio</button>
        </div>
      </div>
    </>
  );
};

export default Home;
