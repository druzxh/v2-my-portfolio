import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMouseInApp, setIsMouseInApp] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsMouseInApp(true);
  };

  const handleMouseOver = (e) => {
    const element = e.target.id;
    setHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setIsMouseInApp(false);
    setHoveredElement(null);
    setMousePosition({ x: null, y: null });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Nav */}
      <Nav handleNav={handleNav} isNavOpen={isNavOpen} />
      {isNavOpen ? (
        /* Nav */
        <div className="absolute z-20 m-10">
          <ul>
            <li>
              <button
                id="home"
                onClick={() => handleMenuItemClick("Home")}
                className={`text-4xl font-bold py-2 px-4 rounded focus:ring-emerald-500 ${
                  hoveredElement === "home"
                    ? "text-second-ground"
                    : "text-amber-300"
                } `}
                onMouseOver={handleMouseOver}
                onMouseOut={() => setHoveredElement(null)}
              >
                Home
              </button>
            </li>
            <li>
              <button
                id="project"
                onClick={() => handleMenuItemClick("Projects")}
                className={`text-4xl font-bold py-2 px-4 rounded focus:ring-emerald-500 ${
                  hoveredElement === "project"
                    ? "text-second-ground"
                    : "text-amber-300 "
                } `}
                onMouseOver={handleMouseOver}
                onMouseOut={() => setHoveredElement(null)}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                id="about"
                onClick={() => handleMenuItemClick("About")}
                className={`text-4xl font-bold py-2 px-4 rounded focus:ring-emerald-500 ${
                  hoveredElement === "about"
                    ? "text-second-ground"
                    : "text-amber-300"
                } `}
                onMouseOver={handleMouseOver}
                onMouseOut={() => setHoveredElement(null)}
              >
                About
              </button>
            </li>
            <li>
              <button
                id="contact"
                onClick={() => handleMenuItemClick("Contact")}
                className={`text-4xl font-bold py-2 px-4 rounded focus:ring-emerald-500 ${
                  hoveredElement === "contact"
                    ? "text-second-ground"
                    : "text-amber-300"
                } `}
                onMouseOver={handleMouseOver}
                onMouseOut={() => setHoveredElement(null)}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      ) : (
        /* Main */
        <>
          <div className="absolute z-20 m-10">
            <h1 className="font-bold text-3xl mt-7 text-center font-mono">
              <span className="text-amber-300">Hii there!</span>
            </h1>
            <h1 className="font-bold text-6xl text-center font-mono">
              <span
                id="name"
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={() => setHoveredElement(null)}
                className={
                  hoveredElement === "name"
                    ? "text-second-ground"
                    : "text-second-ground"
                }
              >
                I'm Badrudin
              </span>
            </h1>
            <div
              className="flex justify-center mt-6"
              onMouseOver={(e) => handleMouseOver(e)}
              onMouseOut={() => setHoveredElement(null)}
            >
              <p className="font-bold text-1xl text-amber-300 text-center max-w-md">
                I'm a Web Developer, with a strong passion for backend,
                operating system, and DevOps practices.
              </p>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                id="project"
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={() => setHoveredElement(null)}
                className={`text-2xl font-bold py-2 px-4 rounded focus:ring-emerald-500 ${
                  hoveredElement === "project"
                    ? "text-second-ground"
                    : "text-amber-300"
                } `}
              >
                <span className="text-5xl">&rarr;</span>
                My Projects
              </button>
              <button
                id="about"
                onMouseOver={(e) => handleMouseOver(e)}
                onMouseOut={() => setHoveredElement(null)}
                className={`text-2xl font-bold py-2 px-4 rounded focus:ring-emerald-500 ${
                  hoveredElement === "about"
                    ? "text-second-ground"
                    : "text-amber-300"
                } `}
              >
                <span className="text-5xl">&rarr;</span>
                About Me
              </button>
            </div>{" "}
          </div>
        </>
      )}
      <div className="absolute bottom-5 z-21">
        <img src="footer-logo.png" alt="footer-logo" />
      </div>
      {/* Hover */}
      {isMouseInApp && mousePosition.x !== null && mousePosition.y !== null && (
        <div
          style={{
            position: "absolute",
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={`rounded-full border-teal-900 relative ${
              hoveredElement
                ? "bg-teal-900 border-2 w-10 h-10"
                : "w-8 h-8 border-2"
            }`}
          >
            <div
              className="w-2 h-2 bg-teal-900 rounded-full absolute "
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
