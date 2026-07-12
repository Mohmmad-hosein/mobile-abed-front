import { useEffect, useState } from "react";

export const useAnimationSettings = () => {
  const [enableAnimations, setEnableAnimations] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("animations");

    if (saved !== null) {
      setEnableAnimations(saved === "true");
      return;
    }

    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;

    const weakDevice = cores <= 4 || memory <= 4;

    if (weakDevice) {
      setEnableAnimations(false);
      localStorage.setItem("animations", "false");
    }
  }, []);

  return enableAnimations;
};