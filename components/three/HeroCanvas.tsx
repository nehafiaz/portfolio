"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function HeroCanvas() {
  const mainRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mainRef.current.rotation.y = time * 0.1;
    mainRef.current.rotation.z = time * 0.05;
    orbitRef.current.rotation.y = time * 0.2;
  });

  return (
    <group position={[1.5, 0, 0]}>
      <mesh ref={mainRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial color="#3ECF8E" wireframe opacity={0.08} transparent />
      </mesh>

      <group ref={orbitRef}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 4 + Math.random();
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const color = i % 2 === 0 ? "#3ECF8E" : "#D4A853";

          return (
            <mesh key={i} position={[x, (Math.random() - 0.5) * 5, z]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
