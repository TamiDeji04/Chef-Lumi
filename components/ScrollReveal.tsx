"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "fade";
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialTransform = direction === "up" ? "translateY(28px)" : "translateY(0)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: `opacity 0.65s ease-out, transform 0.65s ease-out`,
      }}
    >
      {children}
    </div>
  );
}
