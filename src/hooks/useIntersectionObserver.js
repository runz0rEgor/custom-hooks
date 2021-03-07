import { useEffect, useRef } from "react";

export function useIntersectionObserver(parentRef, childRef, callback, ...args) {
  const argumentsRef = useRef(args);

  useEffect(() => {
    argumentsRef.current = args
  }, [args]);

  useEffect(() => {
    if (!parentRef || !childRef) return;
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0
    };
    const childNode = childRef.current

    const observer = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        callback(...argumentsRef.current);
      }
    }, options);

    observer.observe(childNode);

    return function () {
      observer.unobserve(childNode);
    }
  }, [callback, childRef, parentRef]);
}
