import React, { useState } from "react";
import { useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

function Navbar() {
  const [isActive, setIsActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    setIsActive(section);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleScroll = () => {
    const sections = ["home", "services", "about us", "pricing", "testimonial"];
    const scrollPosition = window.scrollY + 100;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setIsActive(section);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  };

  const NavLinks = (
    <ul className="font-medium flex flex-col md:justify-between justify-normal md:flex-row gap-4">
      <li>
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`text-white ${isActive === "home" ? "isActive" : ""}`}
          onClick={() => {
            handleClick("home");
            scrollTo("home");
            handleClose();
          }}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`text-white ${isActive === "services" ? "isActive" : ""}`}
          onClick={() => {
            handleClick("services");
            scrollTo("services");
            handleClose();
          }}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`text-white ${isActive === "about us" ? "isActive" : ""}`}
          onClick={() => {
            handleClose();
            handleClick("about us");
            scrollTo("about us");
          }}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`text-white ${isActive === "pricing" ? "isActive" : ""}`}
          onClick={() => {
            handleClose();
            handleClick("pricing");
            scrollTo("pricing");
          }}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#testimonial"
          className={`text-white ${
            isActive === "testimonial" ? "isActive" : ""
          }`}
          onClick={() => {
            handleClose();
            handleClick("testimonial");
            scrollTo("testimonial");
          }}
        >
          Testimonial
        </motion.a>
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
            <li className="block md:hidden">
              <a
                href="#contact"
                className="text-white bg-primary hover:bg-primary/90 px-3 py-1.5 rounded"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
