"use client";
import React from "react";
// import { HeroParallax } from "../components/ui/hero-parallax";
// import products from "../components/ui/hero-parallax";
// import { IconName } from "@tabler/icons-react";

import Bento from "../components/comps/bento";
import Parallax from "../components/comps/parallax";

// const NewSection: React.FC = () => {
//   return (
//     <div style={{ width: "10vw" }}>
//       <h2>This is a new section</h2>
//       {/* Add your content here */}
//     </div>
//   );
// };
export default function notes() {
  return (
    <div>
      <Parallax />
      {/* <NewSection /> */}
      <div className="flex justify-center mt-24 text-4xl ">
        <h1>My Work</h1>
      </div>
      <Bento />
    </div>
  );
}
