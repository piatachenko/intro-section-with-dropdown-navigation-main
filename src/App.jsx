import React, { useState } from "react";
import clientAudiophile from "./assets/client-audiophile.svg";
import clientDatabiz from "./assets/client-databiz.svg";
import clientMaker from "./assets/client-maker.svg";
import clientMeet from "./assets/client-meet.svg";
import desktopImage from "./assets/image-hero-desktop.png";
import mobileImage from "./assets/image-hero-mobile.png";
import snapLogo from "./assets/logo.svg";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <header className="flex justify-between p-3">
        <a href="./intro-section-with-dropdown-navigation-main">
          <img src={snapLogo} alt="SNAP logo" />
        </a>
        <nav className="bg-red-200">
          <button
            className={toggle ? "" : "hidden"}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fill-rule="evenodd">
                <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
              </g>
            </svg>
          </button>
          <button
            className={toggle ? "hidden" : ""}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fill-rule="evenodd">
                <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
              </g>
            </svg>
          </button>
          {/* <button>Features</button>
          <ul className="hidden">
            <li>
              <a href="#">Todo List</a>
            </li>
            <li>
              <a href="#">Calendar</a>
            </li>
            <li>
              <a href="#">Reminders</a>
            </li>
            <li>
              <a href="#">Planning</a>
            </li>
          </ul>
          <button>Company</button>
          <ul className="hidden">
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <a href="#">Careers</a>
          <a href="#">About</a> 
          <Login />
          <Register />
          */}
        </nav>
      </header>
      <main>
        <picture>
          <source media="(min-width:768px)" srcSet={desktopImage} />
          <img src={mobileImage} alt="" />
        </picture>
        <article className="text-center	p-3 ">
          <h1 className="font-bold text-4xl text-[#141414] my-5">
            Make remote work
          </h1>
          <p className="text-[#696969] mb-6">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-[#141414] rounded-2xl pt-3 pb-2.5 px-6 text-[#fafafa]">
            Learn more
          </button>
        </article>
        <article className="flex justify-around items-center flex-wrap mt-7 ">
          <a href="#">
            <img src={clientDatabiz} alt="" className=" shrink-0 w-20" />
          </a>
          <a href="#">
            <img src={clientAudiophile} alt="" className=" shrink-0 w-16" />
          </a>
          <a href="#">
            <img src={clientMeet} alt="" className=" shrink-0 w-16" />
          </a>
          <a href="#">
            <img src={clientMaker} alt="" className=" shrink-0 w-16" />
          </a>
        </article>
      </main>
    </div>
  );
}

export default App;
