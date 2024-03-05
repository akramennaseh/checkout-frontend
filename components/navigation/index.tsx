"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
    <>
    
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    
    </>
    </nav>
  );
};

export default Navigation;