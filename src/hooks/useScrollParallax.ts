import { useEffect, useRef, useState } from "react";

export function useScrollParallax() {
  const ref = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const height = ref.current.offsetHeight;
      // 0 = top of section at top of viewport, 1 = fully scrolled past
      const progress = Math.max(0, Math.min(1, -rect.top / height));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, scrollProgress };
}
