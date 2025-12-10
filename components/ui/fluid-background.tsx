"use client";

import { useEffect, useRef } from "react";

interface FluidBackgroundProps {
  color?: string;
  backgroundColor?: string;
  dotSize?: number;
  gap?: number;
}

export function FluidBackground({
  color = "rgba(255, 255, 255, 0.15)", // Subtle white dots
  backgroundColor = "transparent",
  dotSize = 3,
  gap = 25,
}: FluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("FluidBackground mounted");
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = -1000;
    let mouseY = -1000;

    const dots: Dot[] = [];

    class Dot {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      size: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.vx = 0;
        this.vy = 0;
        this.size = dotSize;
      }

      update() {
        // Distance from mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Interaction radius
        const radius = 100;
        const force = (radius - distance) / radius;

        if (distance < radius) {
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 1.5; // Push strength
          const pushY = Math.sin(angle) * force * 1.5;
          
          this.vx -= pushX;
          this.vy -= pushY;
        }

        // Spring back to origin
        const springX = (this.originX - this.x) * 0.05;
        const springY = (this.originY - this.y) * 0.05;

        this.vx += springX;
        this.vy += springY;

        // Friction/Damping
        this.vx *= 0.9;
        this.vy *= 0.9;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw(context: CanvasRenderingContext2D, opacity: number) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.globalAlpha = opacity;
        context.fillStyle = color;
        context.fill();
        context.globalAlpha = 1.0; // Reset
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      dots.length = 0;
      for (let x = gap / 2; x < width; x += gap) {
        for (let y = gap / 2; y < height; y += gap) {
          dots.push(new Dot(x, y));
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      dots.forEach((dot) => {
        dot.update();
        
        // Calculate distance from mouse for visibility
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const visibilityRadius = 300;

        if (distance < visibilityRadius) {
          // Opacity decreases as distance increases
          const opacity = 1 - (distance / visibilityRadius);
          // Ease the opacity for smoother fade
          const easedOpacity = opacity * opacity; 
          dot.draw(ctx, easedOpacity);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    init();
    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, backgroundColor, dotSize, gap]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
