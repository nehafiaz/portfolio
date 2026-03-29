"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingOrbs() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.children.forEach((orb, i) => {
      orb.position.y = Math.sin(time * 0.3 + i) * 1.5;
      orb.position.x = Math.cos(time * 0.2 + i) * 2;
      orb.rotation.z = time * 0.1;
    });
  });

  return (
    <group ref={group}>
      <Sphere args={[1.5, 64, 64]} position={[-3, 2, -5]}>
        <MeshDistortMaterial
          color="#3ECF8E"
          speed={2}
          distort={0.4}
          roughness={0}
          transmission={0.9}
          thickness={1.5}
        />
      </Sphere>
      <Sphere args={[2, 64, 64]} position={[3, -2, -10]}>
        <MeshDistortMaterial
          color="#D4A853"
          speed={1.5}
          distort={0.3}
          roughness={0}
          transmission={0.9}
          thickness={1.5}
        />
      </Sphere>
      <Sphere args={[1.2, 64, 64]} position={[0, -4, -8]}>
        <MeshDistortMaterial
          color="#3ECF8E"
          speed={3}
          distort={0.5}
          roughness={0}
          transmission={0.9}
          thickness={1.5}
        />
      </Sphere>
    </group>
  );
}
