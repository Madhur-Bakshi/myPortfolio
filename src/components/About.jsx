import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! I'm Madhur Bakshi, a student of Computer Science Engineering
          with specialization in Mathematics and Computing at Netaji Subhas
          University of Technology Delhi.
        </p>
        <br />

        <p className="text-xl">
          My strong communication skills bridge the gap between technical
          complexities and business goals. Beyond full stack development, I'm a
          competitive programmer,avid problem solver, and a continuous learner.
          I'm excited to contribute my expertise and passion to new projects.
          Let's connect and code a brighter future together!
        </p>
      </div>
    </div>
  );
};

export default About;
