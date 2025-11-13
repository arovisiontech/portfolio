"use client";
import dynamic from "next/dynamic";

const ParticleTrail = dynamic(() => import("./ParticleTrail"), { ssr: false });

export default function ParticleTrailClient() {
  return <ParticleTrail />;
}
