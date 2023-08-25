import React from "react";

const Educations = () => {
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold orange">Educations</h1>
        <div className="flex flex-col w-full lg:flex-row mt-5">
          <div className="grid flex-grow card border border-orange-300 p-5 gap-2">
            <h1 className="text-lg font-bold">Kuningan University</h1>
            <h1 className="text-md font-bold">
              Bachelor Degree in Informatics Engineering
            </h1>
            <div className="flex ">
              <h1 className="text-md font-bold orange-bg text-gray-950 w-72 p-1 rounded">
                SEPTEMBER 2015 - AGUSTUS 2020
              </h1>
              <h1 className="text-md font-bold orange-bg text-gray-950 w-16 ml-1 p-1 rounded">
                IPK 3.4
              </h1>
            </div>
            <p>
              Learn SDLC, create a virtual reality application to introduce
              Kuningan University to new students
            </p>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow card border border-orange-300 p-5 gap-2">
            <h1 className="text-lg font-bold">Harisenin Bootcamp</h1>
            <h1 className="text-md font-bold">Full Stack Software Developer</h1>
            <div className="flex ">
              <h1 className="text-md font-bold orange-bg text-gray-950 w-72 p-1 rounded">
                DESEMBER 2023 - APRIL 2024
              </h1>
            </div>
            <p>
              Learn and build RESTful API using Express JS, Create a web
              application using React JS, and Build a mobile application using
              React Native
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
