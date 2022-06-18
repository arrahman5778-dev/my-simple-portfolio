import React from "react";
import "./home.css";
import banner_img from "../../img/Programming-amico (1).png";
import Project_1 from "../../img/Screenshot_30.png";
import About from "../About/About";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <div className="banner  flex justify-between">
        <div className="banner-txet mt-20">
          <h4 className="my-name text-xl">Hi! I am Abdur Rahman.</h4>
          <h5 className="job-title text-4xl">Full Stack Web Developer</h5>
          <p className=" text-xxl w-50 mt-3 ">
            Let me help you increase business engagement with
            <br />
            qualityful Websites and Web Applications
          </p>
          <button
            to="/about"
            className=" btn py-2 px-2 bg-blue-500 text-white mt-8 rounded"
          >
            About Me
          </button>
          <button
            href="https://drive.google.com/drive/u/0/folders/11TS71X-OG7zhoyGYutGnoe7w6oIXotyM"
            className=" btn py-2 px-2 bg-blue-500 text-white mt-8  ml-4 rounded"
          >
            Download Resume
          </button>
        </div>
        <div className="banner-img  mt-14">
          <img className=" w-80 " src={banner_img} alt="" />
        </div>
      </div>
      <div className="project mb-5">
        <h2 className=" text-2xl">Project</h2>
        <h3 className="text-sm mb-5">My Recent work</h3>
        <div className="project-img ">
          <img className="w-40" src={Project_1} alt="" />
          <p className="text-xs mt-2">Menufecture App </p>
        </div>
      </div>
      <About></About>
    </div>
  );
};

export default Home;
