import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

export default function Confetti({ activate = false }) {
  const [start, setStart] = useState(activate);

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        angle: 60,
        origin: { x: 0, y: 1 },
        particleCount: Math.floor(400 * particleRatio),
      });
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        angle: 120,
        origin: { x: 1, y: 1 },
        particleCount: Math.floor(400 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 55,
      startVelocity: 65,
    });
  }, [makeShot]);

  useEffect(() => {
    if (start)
      setTimeout(function () {
        fire();
      }, 4000);
    setStart(false);
  }, [start]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
