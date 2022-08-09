import React, { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

export default function Confetti() {
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
    setTimeout(function () {
      fire();
    }, 5000);
  });

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
