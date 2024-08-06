"use client";
import { useState, useEffect } from "react";

const useToggleState = (initialState = false) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setState(initialState);
    }
  }, [initialState]);

  const close = () => {
    setState(false);
  };

  const open = () => {
    setState(true);
  };

  const toggle = () => {
    setState((state) => !state);
  };

  const hookData = [state, open, close, toggle];
  hookData.state = state;
  hookData.open = open;
  hookData.close = close;
  hookData.toggle = toggle;
  return hookData;
};

export default useToggleState;
