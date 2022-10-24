import React, { useEffect, useState } from "react";
import MagicCount from "./components/magicCount/MagicCount";
import MagicArray from "./components/magicArray/MagicArray";

function Home() {
  return (
    <>
      <MagicCount />
      <MagicArray />
    </>
  );
}

export default Home;
