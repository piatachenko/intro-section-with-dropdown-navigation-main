import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import clientAudiophile from "./assets/client-audiophile.svg";
import clientDatabiz from "./assets/client-databiz.svg";
import clientMaker from "./assets/client-maker.svg";
import clientMeet from "./assets/client-meet.svg";
import iconArrowDown from "./assets/icon-arrow-down.svg";
import iconArrowUp from "./assets/icon-arrow-up.svg";
import iconCalendar from "./assets/icon-calendar.svg";
import iconCloseMenu from "./assets/icon-close-menu.svg";
import iconMenu from "./assets/icon-menu.svg";
import iconPlanning from "./assets/icon-planning.svg";
import iconReminders from "./assets/icon-reminders.svg";
import iconToDo from "./assets/icon-todo.svg";
import desktopImage from "./assets/image-hero-desktop.png";
import mobileImage from "./assets/image-hero-mobile.png";
import snapLogo from "./assets/logo.svg";

function App() {
  const [mobileNavToggle, setMobileNavToggle] = useState(true);
  const [featuresToggle, setFeaturesToggle] = useState(true);
  const [companyToggle, setCompanyToggle] = useState(true);
  const [featuresToggleMobile, setFeaturesToggleMobile] = useState(true);
  const [mobileCompanyToggle, setMobileCompanyToggle] = useState(true);

  const useBodyScrollLock = (isBodyScrollLocked) => {
    useLayoutEffect(() => {
      const originalOverflow = window.getComputedStyle(document.body).overflow;
      if (isBodyScrollLocked) {
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }, [isBodyScrollLocked]);
  };

  useBodyScrollLock(!mobileNavToggle);

  const mobileNavToggleRef = useRef();
  const featuresToggleRef = useRef();
  const companyToggleRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!mobileNavToggleRef.current.contains(e.target)) {
        setMobileNavToggle(true);
      }
      if (!featuresToggleRef.current.contains(e.target)) {
        setFeaturesToggle(true);
      }
      if (!companyToggleRef.current.contains(e.target)) {
        setCompanyToggle(true);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="text-[#696969] bg-gradient-to-br from-[#f0f0f0] py-1 lg:px-5 lg:py-2 min-h-screen">
      <header className="flex justify-between items-center p-5 min-h-[5rem]">
        <nav className="flex items-center md:gap-8 lg:gap-16">
          <a href="#">
            <img src={snapLogo} alt="SNAP logo" />
          </a>
          <aside
            className={
              mobileNavToggle ? "hidden" : "flex fixed inset-0 md:hidden"
            }
          >
            <div className="backdrop-blur-sm bg-white/50 inset-y-0 left-0 w-2/6 sm:w-1/2 "></div>
            <div
              ref={mobileNavToggleRef}
              className="flex flex-col bg-[#ffffff] space-y-5 p-5 inset-y-0 right-0 w-4/6 sm:w-1/2 overflow-auto"
            >
              <button
                className="self-end mt-2 mr-1 mb-5"
                onClick={() => {
                  setMobileNavToggle(!mobileNavToggle);
                }}
              >
                <img src={iconCloseMenu} alt="Close" />
              </button>
              <ul className="space-y-5">
                <li>
                  <button
                    onClick={() => {
                      setFeaturesToggleMobile(!featuresToggleMobile);
                    }}
                  >
                    Features{" "}
                    <img
                      className={
                        featuresToggleMobile ? "inline ml-2" : "hidden"
                      }
                      src={iconArrowDown}
                      alt=""
                    />
                    <img
                      className={
                        featuresToggleMobile ? "hidden" : "inline ml-2"
                      }
                      src={iconArrowUp}
                      alt=""
                    />
                  </button>
                  <ul
                    className={
                      featuresToggleMobile ? "hidden" : "m-5 space-y-3"
                    }
                  >
                    <li>
                      <a href="#">
                        <img
                          src={iconToDo}
                          alt=""
                          className="inline mr-3 mb-1 w-4"
                        />
                        Todo List
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={iconCalendar}
                          alt=""
                          className="inline mr-3 mb-1 w-4"
                        />
                        Calendar
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={iconReminders}
                          alt=""
                          className="inline mr-3 mb-1 w-4"
                        />
                        Reminders
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={iconPlanning}
                          alt=""
                          className="inline mr-3 mb-1 w-4"
                        />
                        Planning
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    className="self-start"
                    onClick={() => {
                      setMobileCompanyToggle(!mobileCompanyToggle);
                    }}
                  >
                    Company{" "}
                    <img
                      className={mobileCompanyToggle ? "inline ml-2" : "hidden"}
                      src={iconArrowDown}
                      alt=""
                    />
                    <img
                      className={mobileCompanyToggle ? "hidden" : "inline ml-2"}
                      src={iconArrowUp}
                      alt=""
                    />
                  </button>
                  <ul
                    className={mobileCompanyToggle ? "hidden" : "m-5 space-y-3"}
                  >
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
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
              <button>Login</button>
              <button className="border-[#696969] border-2 p-2 rounded-2xl">
                Register
              </button>
            </div>
          </aside>
          <ul className="hidden md:flex space-x-6 mb-1 lg:space-x-10">
            <li ref={featuresToggleRef}>
              <button
                className="hover:text-[#141414]"
                onClick={() => {
                  setFeaturesToggle(!featuresToggle);
                }}
              >
                Features{" "}
                <img
                  className={featuresToggle ? "inline ml-1" : "hidden"}
                  src={iconArrowDown}
                  alt=""
                />
                <img
                  className={featuresToggle ? "hidden" : "inline ml-1"}
                  src={iconArrowUp}
                  alt=""
                />
              </button>
              <ul
                className={
                  featuresToggle
                    ? "hidden"
                    : "absolute m-5 bg-[#ffffff] shadow-2xl rounded-xl left-20 lg:left-[8.5rem] top-11"
                }
              >
                <li className="hover:bg-[#fafafa] first:rounded-t-xl last:rounded-b-xl">
                  <a href="#" className="px-5 py-3 inline-block">
                    <img
                      src={iconToDo}
                      alt=""
                      className="inline mr-3 mb-1 w-4"
                    />
                    Todo List
                  </a>
                </li>
                <li className="hover:bg-[#fafafa] first:rounded-t-xl last:rounded-b-xl">
                  <a href="#" className="px-5 py-3 inline-block">
                    <img
                      src={iconCalendar}
                      alt=""
                      className="inline mr-3 mb-1 w-4"
                    />
                    Calendar
                  </a>
                </li>
                <li className="hover:bg-[#fafafa] first:rounded-t-xl last:rounded-b-xl">
                  <a href="#" className="px-5 py-3 inline-block">
                    <img
                      src={iconReminders}
                      alt=""
                      className="inline mr-3 mb-1 w-4"
                    />
                    Reminders
                  </a>
                </li>
                <li className="hover:bg-[#fafafa] first:rounded-t-xl last:rounded-b-xl">
                  <a href="#" className="px-5 py-3 inline-block">
                    <img
                      src={iconPlanning}
                      alt=""
                      className="inline mr-3 mb-1 w-4"
                    />
                    Planning
                  </a>
                </li>
              </ul>
            </li>
            <li ref={companyToggleRef}>
              <button
                className="hover:text-[#141414]"
                onClick={() => {
                  setCompanyToggle(!companyToggle);
                }}
              >
                Company{" "}
                <img
                  className={companyToggle ? "inline ml-1" : "hidden"}
                  src={iconArrowDown}
                  alt=""
                />
                <img
                  className={companyToggle ? "hidden" : "inline ml-1"}
                  src={iconArrowUp}
                  alt=""
                />
              </button>
              <ul
                className={
                  companyToggle
                    ? "hidden"
                    : "absolute m-5 bg-[#ffffff] rounded-xl shadow-2xl left-[13.5rem] lg:left-[17.7rem] top-11"
                }
              >
                <li className="hover:bg-[#fafafa] first:rounded-t-xl last:rounded-b-xl">
                  <a href="#" className="px-5 py-3 inline-block">
                    History
                  </a>
                </li>
                <li className="hover:bg-[#fafafa] first:rounded-t-xl last:rounded-b-xl">
                  <a href="#" className="px-5 py-3 inline-block">
                    Our Team
                  </a>
                </li>
                <li className="hover:bg-[#fafafa] first:rounded-t-xl last:rounded-b-xl">
                  <a href="#" className="px-5 py-3 inline-block">
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="hover:text-[#141414]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#141414]">
                About
              </a>
            </li>
          </ul>
        </nav>
        <button
          className={
            mobileNavToggle
              ? "flex justify-center items-center h-full mb-2 md:hidden"
              : "hidden"
          }
          onClick={() => {
            setMobileNavToggle(!mobileNavToggle);
            document.querySelector("aside").style.overflow = "hidden";
          }}
        >
          <img src={iconMenu} alt="Menu" />
        </button>
        <div className="hidden -mt-1 lg:space-x-7 md:block">
          <button className="py-2 px-6 hover:text-[#141414] rounded-2xl">
            Login
          </button>
          <button className="border-[#696969] border-2 py-2 px-6 rounded-2xl hover:text-[#141414] hover:border-[#141414]">
            Register
          </button>
        </div>
      </header>

      <main className="md:flex justify-around min-h-[85vh] items-center gap-14 md:mx-12">
        <img
          src={mobileImage}
          alt=""
          className="md:hidden min-[384px]:max-w-sm object-contain mx-auto mb-16 mt-5"
        />
        <section className="d:ml-10">
          <article className="text-center md:text-left p-3 m-auto">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-[#141414] mb-6 md:mb-12">
              Make <br className="hidden md:block" /> remote work
            </h1>
            <p className="text-[#696969] mb-8 max-w-md lg:text-lg mx-auto md:ml-0 md:mb-12">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-[#141414] rounded-2xl pt-3 pb-2.5 px-6 text-[#fafafa] lg:text-lg lg:px-7 lg:pt-3 lg:pb-2.5 hover:text-[#141414] hover:bg-[#fafafa] border-2 border-[#141414]">
              Learn more
            </button>
          </article>
          <article className="flex justify-around items-center flex-wrap mb-8 mt-16 md:mb-0 md:justify-between md:px-4">
            <a href="#">
              <img
                src={clientDatabiz}
                alt="Databiz Logo"
                className=" shrink-0 w-20 lg:w-28"
              />
            </a>
            <a href="#">
              <img
                src={clientAudiophile}
                alt="Audiophile Logo"
                className=" shrink-0 w-16 lg:w-20"
              />
            </a>
            <a href="#">
              <img
                src={clientMeet}
                alt="Meet Logo"
                className=" shrink-0 w-16 lg:w-20"
              />
            </a>
            <a href="#">
              <img
                src={clientMaker}
                alt="Maker Logo"
                className=" shrink-0 w-16 lg:w-20"
              />
            </a>
          </article>
        </section>
        <img
          src={desktopImage}
          alt=""
          className="hidden w-1/3 md:block mb-14"
        />
      </main>
    </div>
  );
}

export default App;
