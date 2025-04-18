'use client';

import { useRef, useEffect } from 'react';
import styles from './ΔυαδικήΒροχή.module.css';

const BinaryRain = ({ screenType, fontSize, speed }) => {
  const canvasRef = useRef(null);

  const characters = 'ΑΒΓΔΕϜΖΗΘΙΚΛΜΝΞΟΠϘΡΣΤΥΦΧΨΩͶ├┤ϚϛϻϟϡϠͳ';
  let rainColor = '';
  const rainSpeed = Number(speed);

  if (screenType === 'not-found') {
    rainColor = '#ffbb00';
  } else if (screenType === 'error') {
    rainColor = '#ad0000';
  } else {
    rainColor = '#00fcfd';
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `${rainColor}`;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, rainSpeed);

    function handleResize() {
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, [fontSize, rainColor, rainSpeed]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default BinaryRain;
