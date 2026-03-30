
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    const fxTo = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3.out" });
    const fyTo = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3.out" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fxTo(e.clientX);
      fyTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleHover = (e) => {
      const target = e.target;

      if (target.closest('button, a, .cursor-pointer')) {
        gsap.to(cursor, { opacity: 0, duration: 0.2 });

        gsap.to(follower, {
          opacity: 1,
          backgroundColor: "rgba(14, 140, 233, 0.12)",
          borderColor: "rgba(14, 140, 233, 0.4)",
          duration: 0.25,
        });
      } else {
        gsap.to(cursor, { opacity: 1, duration: 0.2 });

        gsap.to(follower, {
          opacity: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(14, 140, 233, 0.5)",
          duration: 0.25,
        });
      }
    };

    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-brand-600 rounded-full pointer-events-none z-[999]
        -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[998]
        -translate-x-1/2 -translate-y-1/2 border border-brand-500/50 hidden md:block"
      />
    </>
  );
};

export default CustomCursor;
