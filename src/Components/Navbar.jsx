import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

function Navbar() {
  const [isActive, setIsActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    setIsActive(section);
    setIsOpen(false); // Close the menu after clicking
  };

  const handleScroll = () => {
    const sections = ["home", "services", "about", "pricing", "testimonial"];
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
      top: targetElement.offsetTop - 70, // Adjust for the fixed header height
      behavior: "smooth",
    });
  };

  const NavLinks = (
    <ul className="font-medium flex flex-col md:flex-row gap-4">
      {["home", "services", "about", "pricing", "testimonial"].map(
        (section) => (
          <li key={section}>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`text-white cursor-pointer ${
                isActive === section ? "isActive" : ""
              }`}
              onClick={() => {
                handleClick(section);
                scrollTo(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          </li>
        )
      )}
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div>
          <a href="#">
            <img src="/logo.svg" alt="Logo" />
          </a>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex">{NavLinks}</div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <MdOutlineClose className="size-6" />
            ) : (
              <HiMenuAlt3 className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {NavLinks.props.children}
            <li>
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
