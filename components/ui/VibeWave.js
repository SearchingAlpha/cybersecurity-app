// components/ui/VibeWave.jsx
"use client";

import { useEffect, useRef } from 'react';

export default function VibeWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas dimensions with proper scaling
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Wave parameters
    const waves = [
      { amplitude: 20, frequency: 0.02, speed: 0.03, color: 'rgba(45, 212, 191, 0.2)' },
      { amplitude: 15, frequency: 0.03, speed: 0.02, color: 'rgba(45, 212, 191, 0.15)' },
      { amplitude: 10, frequency: 0.04, speed: 0.01, color: 'rgba(45, 212, 191, 0.1)' }
    ];
    
    let animationFrameId;
    let time = 0;
    
    const render = () => {
      time += 0.05;
      
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw center of eye
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const eyeWidth = rect.width * 0.7;
      const eyeHeight = rect.height * 0.35;
      
      // Draw eye outline
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, eyeWidth / 2, eyeHeight / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(45, 212, 191, 0.05)';
      ctx.fill();
      
      // Draw pupil
      ctx.beginPath();
      ctx.arc(centerX, centerY, eyeHeight / 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(45, 212, 191, 0.3)';
      ctx.fill();
      
      // Draw waves
      waves.forEach((wave, index) => {
        ctx.beginPath();
        
        // Create outer wave
        for (let x = 0; x < rect.width; x += 5) {
          const y = centerY + 
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude * 
            Math.sin(Math.PI * (x / rect.width));
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Complete the path
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="h-full w-full"
      style={{ touchAction: 'none' }}
    />
  );
}