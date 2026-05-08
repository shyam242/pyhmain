"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PageProgressBar() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Listen to route changes
    const originalPush = router.push;
    const originalReplace = router.replace;

    router.push = function (...args) {
      handleStart();
      setTimeout(handleComplete, 800);
      return originalPush.apply(router, args);
    };

    router.replace = function (...args) {
      handleStart();
      setTimeout(handleComplete, 800);
      return originalReplace.apply(router, args);
    };

    return () => {
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 z-50 animate-pulse-ring w-1/3 transition-all duration-300">
      <div className="h-full w-full animate-gradient-shift" />
    </div>
  );
}
