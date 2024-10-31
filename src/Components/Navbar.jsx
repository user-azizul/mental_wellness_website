import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [isActive, setIsActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    setIsActive(section);
  };

  const NavLinks = (
    <ul className="font-medium flex flex-col md:justify-between justify-normal md:flex-row gap-4">
      <li>
        <a
          href="#home"
          className={`text-white ${isActive === "home" ? "isActive" : ""}`}
          onClick={() => handleClick("home")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#services"
          className={`text-white ${isActive === "services" ? "isActive" : ""}`}
          onClick={() => handleClick("services")}
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={`text-white ${isActive === "about us" ? "isActive" : ""}`}
          onClick={() => handleClick("about us")}
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="#pricing"
          className={`text-white ${isActive === "pricing" ? "isActive" : ""}`}
          onClick={() => handleClick("pricing")}
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          href="#testimonial"
          className={`text-white ${
            isActive === "testimonial" ? "isActive" : ""
          }`}
          onClick={() => handleClick("testimonial")}
        >
          Testimonial
        </a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div>
          <a href="#">
            <img src="/logo.svg" alt="Logo" />
          </a>
        </div>
        {/* nav items  */}
        <div className="hidden md:flex justify-center">
          <nav>{NavLinks}</nav>
        </div>
        {/* button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>
        {/* menu icon  */}
        <div className="md:hidden block">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className={`text-white focus:outline-none `}
            >
              <HiMenuAlt3 className="size-6" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className={`text-white focus:outline-none `}
            >
              <MdOutlineClose className="size-6" />
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <nav className=" absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="felx flex-col p-4 space-y-3">
            {NavLinks.props.children}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
