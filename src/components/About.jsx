import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-1">
        For me, coding is not just a job or a means to an end; it is a way to bring my imagination to reality and understand how people think.
        As I delved deeper into the world of programming, I realized that frontend development resonated with me the most. The frontend is where creativity meets functionality, where aesthetics blend seamlessly with user experience.
        </p>

        <br />

        <p className="text-xl">
        If you're looking for a frontend developer who is not only passionate about coding but also dedicated to creating exceptional user experiences, I would be delighted to collaborate with you. Let's bring ideas to life and make a positive impact together!
        </p>
      </div>
    </div>
  );
};

export default About;
