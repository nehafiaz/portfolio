"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollStore } from "@/lib/store";

const PARTICLE_COUNT = 3000;

export default function ParticleField() {
  const points = useRef<THREE.Points>(null!);
  const currentSection = useScrollStore((state) => state.currentSection);
  const mouse = useRef({ x: 0, y: 0 });

  const { viewport } = useThree();

  // Create base positions and targets for each section
  const [positions, targets] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const tar = [
      new Float32Array(PARTICLE_COUNT * 3), // Hero: Random Cloud
      new Float32Array(PARTICLE_COUNT * 3), // About: Sphere
      new Float32Array(PARTICLE_COUNT * 3), // Projects: DNA Helix
      new Float32Array(PARTICLE_COUNT * 3), // Skills: Torus
      new Float32Array(PARTICLE_COUNT * 3), // Timeline: Sine Wave
      new Float32Array(PARTICLE_COUNT * 3), // Contact: Center Point
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        
        // Initial random positions
        pos[i3] = (Math.random() - 0.5) * 10;
        pos[i3 + 1] = (Math.random() - 0.5) * 10;
        pos[i3 + 2] = (Math.random() - 0.5) * 10;

        // 0: Hero (Cloud)
        tar[0][i3] = (Math.random() - 0.5) * 15;
        tar[0][i3 + 1] = (Math.random() - 0.5) * 15;
        tar[0][i3 + 2] = (Math.random() - 0.5) * 15;

        // 1: About (Sphere)
        const radius = 3.5;
        const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
        const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
        tar[1][i3] = radius * Math.cos(theta) * Math.sin(phi);
        tar[1][i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        tar[1][i3 + 2] = radius * Math.cos(phi);

        // 2: Projects (DNA Helix)
        const helixRadius = 2.5;
        const helixHeight = 10;
        const angle = (i / PARTICLE_COUNT) * Math.PI * 4;
        const h = (i / PARTICLE_COUNT - 0.5) * helixHeight;
        tar[2][i3] = Math.cos(angle) * helixRadius;
        tar[2][i3 + 1] = h;
        tar[2][i3 + 2] = Math.sin(angle) * helixRadius;

        // 3: Skills (Torus)
        const torusRadius = 3.5;
        const tubeRadius = 1.2;
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI * 2;
        tar[3][i3] = (torusRadius + tubeRadius * Math.cos(v)) * Math.cos(u);
        tar[3][i3 + 1] = (torusRadius + tubeRadius * Math.cos(v)) * Math.sin(u);
        tar[3][i3 + 2] = tubeRadius * Math.sin(v);

        // 4: Timeline (Sine Wave)
        tar[4][i3] = (i / PARTICLE_COUNT - 0.5) * 12;
        tar[4][i3 + 1] = Math.sin((i / PARTICLE_COUNT) * Math.PI * 4) * 2;
        tar[4][i3 + 2] = (Math.random() - 0.5) * 2;

        // 5: Contact (Center)
        tar[5][i3] = (Math.random() - 0.5) * 0.5;
        tar[5][i3 + 1] = (Math.random() - 0.5) * 0.5;
        tar[5][i3 + 2] = (Math.random() - 0.5) * 0.5;
    }

    return [pos, tar];
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const colorViolet = new THREE.Color("#8B5CF6");
    const colorRose = new THREE.Color("#B76E79");
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const mixed = i % 2 === 0 ? colorViolet : colorRose;
      col[i3] = mixed.r;

      col[i3 + 1] = mixed.g;
      col[i3 + 2] = mixed.b;
    }
    return col;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const target = targets[currentSection] || targets[0];
    const positionsAttr = points.current.geometry.attributes.position;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        
        // Lerp to target
        positionsAttr.array[i3] += (target[i3] - positionsAttr.array[i3]) * 0.05;
        positionsAttr.array[i3 + 1] += (target[i3 + 1] - positionsAttr.array[i3 + 1]) * 0.05;
        positionsAttr.array[i3 + 2] += (target[i3 + 2] - positionsAttr.array[i3 + 2]) * 0.05;

        // Subtle movement
        positionsAttr.array[i3 + 1] += Math.sin(time + i) * 0.002;
    }
    positionsAttr.needsUpdate = true;
    
    // Rotate slowly
    points.current.rotation.y += 0.0005;
    points.current.rotation.x += 0.0002;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
