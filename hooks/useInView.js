import { useState, useEffect } from 'react';

// useInView: returns true when an element is visible in the viewport.
// Defaults to a 15% threshold. Disconnects after first intersection (one-time animation).
export default function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref && ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: options.threshold ?? 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, options.threshold]);

  return inView;
}
