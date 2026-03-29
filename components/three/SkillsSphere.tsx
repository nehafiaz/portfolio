"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "GraphQL",
  "PostgreSQL", "Tailwind", "Git", "Figma", "Three.js",
  "Framer", "GSAP", "Docker", "AWS", "Python",
  "Web3", "Unity", "Shader", "Go", "Prisma"
];

function Word({ children, ...props }: any) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 0.25,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };

  const ref = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  
  // Transition color
  useFrame(() => {
    ref.current.material.color.lerp(color.set(hovered ? '#3ECF8E' : 'white'), 0.1);
  });
  
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 4 }) {
  // Create a spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (skills.length / 2);
    const thetaSpan = (Math.PI * 2) / (skills.length / 2);
    
    for (let i = 0; i < skills.length; i++) {
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
        temp.push([pos, skills[i]]);
    }
    return temp;
  }, [count, radius]);

  const group = useRef<any>(null);
  useFrame((state) => {
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group}>
      {words.map(([pos, word]: any, index) => (
        <Word key={index} position={pos}>
           {word}
        </Word>
      ))}
    </group>
  );
}

export default function SkillsSphere() {
  return (
    <group>
      <Cloud radius={5} />
    </group>
  );
}
