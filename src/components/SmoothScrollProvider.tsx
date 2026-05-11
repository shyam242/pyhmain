"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

interface SmoothScrollContextType {
  lenis: Lenis | null;
  setSmoothScrollEnabled: (enabled: boolean) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  setSmoothScrollEnabled: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Start the animation loop
    function raf(time: number) {
      if (lenisRef.current && isEnabled) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
    };
  }, [isEnabled]);

  const setSmoothScrollEnabled = (enabled: boolean) => {
    setIsEnabled(enabled);
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, setSmoothScrollEnabled }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}