"use client";

import { useState, type ReactNode } from "react";

interface HoverExpandProps {
  children: ReactNode;
  className?: string;
  activeColor?: string;
  baseColor?: string;
}

export function HoverExpand({
  children,
  className = "",
  activeColor = "rgb(192, 132, 252)",
  baseColor = "oklch(0.65 0 0)",
}: HoverExpandProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={className}
      style={{
        backgroundImage: `linear-gradient(${activeColor}, ${activeColor}), linear-gradient(${baseColor}, ${baseColor})`,
        backgroundSize: hovered
          ? "100% 100%, 100% 100%"
          : "0% 100%, 100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        transition: "background-size 0.35s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}
