"use client";
// ParticleTrail.tsx
import { useEffect, useRef } from "react";

const COLORS = [
  "#b983ff", // vibrant purple
  "#a8a0ff", // accent purple
  "#7f7fd5", // blue-purple gradient
  "#86a8e7", // soft blue
  "#f6d365", // gold accent
  "#fbc2eb", // pinkish purple
  "#c3b6ff", // light purple
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number; // length of the line
  angle: number;  // direction of the line
  color: string;
  alpha: number;
  life: number;
}

export default function ParticleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let running = true;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // Add new particles at mouse
      for (let i = 0; i < 6; i++) {
        particles.current.push({
          x: mouse.current.x + randomBetween(-10, 10),
          y: mouse.current.y + randomBetween(-10, 10),
          vx: randomBetween(-0.7, 0.7),
          vy: randomBetween(-0.7, 0.7),
          length: randomBetween(4, 10), // even shorter line
          angle: randomBetween(0, Math.PI * 2),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.7,
          life: randomBetween(20, 40),
        });
      }
    }
    window.addEventListener("mousemove", onMouseMove);

    function animate() {
      if (!running || !canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw and update particles
      particles.current.forEach((p) => {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 0.7; // thinner line
        // Draw a short line instead of a dot
        const x2 = p.x + Math.cos(p.angle) * p.length;
        const y2 = p.y + Math.sin(p.angle) * p.length;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
        // Update
        p.x += p.vx;
        p.y += p.vy;
        p.length *= 0.97;
        p.alpha *= 0.94;
        p.life--;
      });
      // Remove dead particles
      particles.current = particles.current.filter((p) => p.life > 0 && p.alpha > 0.05 && p.length > 2);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 0 }} />;
}
