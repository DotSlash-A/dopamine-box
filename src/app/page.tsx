"use client";
import React from "react";
import EvervaultCardDemo from "./components/comps/EvervaultCardDemo";
import { SparklesPreview } from "./components/comps/hero-sparkles";

export default function Home() {
  return (
    <div className="mb-8">
      <SparklesPreview />
      <EvervaultCardDemo />
    </div>
  );
}
