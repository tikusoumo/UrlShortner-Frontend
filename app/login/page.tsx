"use client";

import { Canvas, useFrame,useThree  } from "@react-three/fiber";
import { easing } from 'maath'
import React, { useRef } from "react";
import { WaveMaterial } from "../Glsl/WaveMaterial";

export default function Login() {
  return (
    <div className="h-screen">
     <Canvas>
      <ShaderPlane />
    </Canvas>
    </div>
  );
}
function ShaderPlane() {
  const ref = useRef()
  const { viewport, size } = useThree()
  useFrame((state, delta) => {
    ref.current.time += delta
    easing.damp3(ref.current.pointer, state.pointer, 0.2, delta)
  })
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <waveMaterial ref={ref} key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} />
    </mesh>
  )
}
