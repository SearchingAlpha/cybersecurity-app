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
    
    // Eye parameters - BIGGER eye
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const eyeWidth = rect.width * 0.95; // Increased from 0.8
    const eyeHeight = rect.height * 0.6; // Increased from 0.4
    
    let animationFrameId;
    let time = 0;
    
    const render = () => {
      time += 0.015;
      
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw eye outline with stronger gradient - MORE ACCENT COLOR
      const gradient = ctx.createRadialGradient(
        centerX, centerY, eyeHeight * 0.1,
        centerX, centerY, eyeWidth * 0.8
      );
      gradient.addColorStop(0, 'rgba(45, 212, 191, 0.6)');  // Brighter teal at center - MORE ACCENT
      gradient.addColorStop(0.5, 'rgba(45, 212, 191, 0.2)'); // Mid teal - MORE ACCENT
      gradient.addColorStop(1, 'rgba(45, 212, 191, 0.05)');  // Almost transparent
      
      // Draw base eye shape
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, eyeWidth / 2, eyeHeight / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw outer glow for more emphasis
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, (eyeWidth / 2) + 10, (eyeHeight / 2) + 5, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.3)';
      ctx.lineWidth = 5;
      ctx.stroke();
      
      // Draw iris with stronger gradient - MORE ACCENT COLOR
      const irisGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, eyeHeight / 2.5
      );
      irisGradient.addColorStop(0, 'rgba(45, 212, 191, 0.9)'); // Much brighter - MORE ACCENT
      irisGradient.addColorStop(0.6, 'rgba(45, 212, 191, 0.6)'); // Stronger middle - MORE ACCENT
      irisGradient.addColorStop(1, 'rgba(45, 212, 191, 0.3)');   // Stronger edge - MORE ACCENT
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, eyeHeight / 2.5, 0, Math.PI * 2); // Slightly bigger iris
      ctx.fillStyle = irisGradient;
      ctx.fill();
      
      // Add iris texture
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2;
        const innerRadius = eyeHeight / 5;
        const outerRadius = eyeHeight / 2.5;
        
        ctx.beginPath();
        ctx.moveTo(
          centerX + innerRadius * Math.cos(angle),
          centerY + innerRadius * Math.sin(angle)
        );
        ctx.lineTo(
          centerX + outerRadius * Math.cos(angle),
          centerY + outerRadius * Math.sin(angle)
        );
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw pupil - DARKER for more contrast
      ctx.beginPath();
      // Make pupil size fluctuate slightly
      const pupilSize = (eyeHeight / 5) * (1 + Math.sin(time * 0.5) * 0.1);
      ctx.arc(centerX, centerY, pupilSize, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.85)'; // Darker pupil
      ctx.fill();
      
      // Draw highlight - BRIGHTER
      ctx.beginPath();
      ctx.arc(
        centerX - eyeHeight / 10, 
        centerY - eyeHeight / 10, 
        eyeHeight / 12, 
        0, Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // Brighter highlight
      ctx.fill();
      
      // Small secondary highlight
      ctx.beginPath();
      ctx.arc(
        centerX + eyeHeight / 15, 
        centerY + eyeHeight / 15, 
        eyeHeight / 25, 
        0, Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();
      
      // Draw scanning line (horizontal) - BRIGHTER
      ctx.beginPath();
      const scanAmplitude = eyeHeight / 8;
      const scanY = centerY + Math.sin(time * 2) * scanAmplitude;
      ctx.moveTo(centerX - eyeWidth / 2, scanY);
      ctx.lineTo(centerX + eyeWidth / 2, scanY);
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.8)'; // Brighter scan line - MORE ACCENT
      ctx.lineWidth = 3; // Thicker line
      ctx.stroke();
      
      // Add a glow effect to the scan line
      ctx.beginPath();
      ctx.moveTo(centerX - eyeWidth / 2, scanY);
      ctx.lineTo(centerX + eyeWidth / 2, scanY);
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.3)';
      ctx.lineWidth = 9;
      ctx.stroke();
      
      // Draw pulsing circle around iris - MORE ACCENT
      const pulseSize = (1 + Math.sin(time * 3) * 0.1) * (eyeHeight / 2);
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.5)'; // Brighter pulse - MORE ACCENT
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw vibration waves (concentric circles) - MORE ACCENT
      for (let i = 0; i < 4; i++) { // Added an extra wave
        const waveRadius = (eyeWidth / 2) * (0.6 + i * 0.15) * (1 + Math.sin(time + i) * 0.05);
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, waveRadius, waveRadius * 0.6, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(45, 212, 191, ${0.25 - i * 0.05})`; // Brighter waves - MORE ACCENT
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      
      // Draw data points along the outer wave
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time * 0.2;
        const dataPointRadius = (eyeWidth / 2) * 0.9;
        const x = centerX + dataPointRadius * Math.cos(angle);
        const y = centerY + (dataPointRadius * 0.6) * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(45, 212, 191, 0.8)'; // Bright accent
        ctx.fill();
      }
      
      // Draw eyelids (optional, comment out for full eye)
      // top eyelid animation
      const blinkAmount = Math.pow(Math.sin(time * 0.2), 12) * 0.5; // Occasional blink
      
      // Top eyelid
      ctx.beginPath();
      ctx.moveTo(centerX - eyeWidth / 2, centerY);
      ctx.quadraticCurveTo(
        centerX, 
        centerY - eyeHeight/2 + eyeHeight * blinkAmount, 
        centerX + eyeWidth / 2, 
        centerY
      );
      ctx.lineTo(centerX + eyeWidth / 2, centerY - eyeHeight / 2);
      ctx.quadraticCurveTo(
        centerX, 
        centerY - eyeHeight * 0.8, 
        centerX - eyeWidth / 2, 
        centerY - eyeHeight / 2
      );
      ctx.closePath();
      ctx.fillStyle = 'rgba(249, 250, 251, 0.97)'; // Almost matches background
      ctx.fill();
      
      // Bottom eyelid
      ctx.beginPath();
      ctx.moveTo(centerX - eyeWidth / 2, centerY);
      ctx.quadraticCurveTo(
        centerX, 
        centerY + eyeHeight/2 - eyeHeight * blinkAmount, 
        centerX + eyeWidth / 2, 
        centerY
      );
      ctx.lineTo(centerX + eyeWidth / 2, centerY + eyeHeight / 2);
      ctx.quadraticCurveTo(
        centerX, 
        centerY + eyeHeight * 0.8, 
        centerX - eyeWidth / 2, 
        centerY + eyeHeight / 2
      );
      ctx.closePath();
      ctx.fillStyle = 'rgba(249, 250, 251, 0.97)'; // Almost matches background
      ctx.fill();
      
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