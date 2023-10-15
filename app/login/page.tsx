'use client'
import { Canvas } from "@react-three/fiber";

import React from "react";

export default function Login() {
  return (
    <>
      <Canvas>
            <Cube/>
      </Canvas>
    </>
  );
}
function Cube(){
    return(
        <mesh>
        <boxBufferGeometry attach="geometry" args={[2,1,1]}/>
        <meshStandardMaterial attach="material" color="hotpink"/>
        </mesh>
    )
}

