import React from "react";
import Nav from "./conponents/Nav";
import LandingPage from "./conponents/LandingPage";
import Marquee from "./conponents/Marquee";

function App() {
  return <div className="w-full  h-screen text-[#212121]">
    <Nav/>
    <LandingPage/>
    <Marquee/>
  </div>;
}

export default App;
