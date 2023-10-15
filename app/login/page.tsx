"use client";
import { Canvas, useFrame } from "@react-three/fiber";

import React, { useRef } from "react";

export default function Login() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[2,1,1]}/>
        <Cube />
      </Canvas>
    </div>
  );
}
function Cube() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.51;
    mesh.current.rotation.y += delta * 0.51;
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry attach="geometry" args={[2, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
