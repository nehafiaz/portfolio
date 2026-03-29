"use client";

import { EffectComposer, Bloom, Noise, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.5}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        blendFunction={BlendFunction.SCREEN}
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0005, 0.0005]}
      />
      <Noise opacity={0.02} blendFunction={BlendFunction.SOFT_LIGHT} />
    </EffectComposer>
  );
}
