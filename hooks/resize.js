import { useEffect, useState } from "react";

export function useResize(ref) {
  const [state, setState] = useState([0, 0]);

  useEffect(() => {
    const getSize = () => {
      if (!ref || !ref.current) {
        return;
      }
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;

      setState({ width, height });
    };

    window.addEventListener("resize", getSize);
    getSize();
    return () => window.removeEventListener("resize", getSize);
  }, [ref]);

  return state;
}