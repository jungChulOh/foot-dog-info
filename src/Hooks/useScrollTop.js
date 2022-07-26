import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

export default function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  useEffect(() => {
    const reScrollTop = () => {
      setScrollTop(window.scrollY);
    };

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.addEventListener("scroll", throttle(reScrollTop, 300));

    return () => {
      window.removeEventListener("scroll", throttle(reScrollTop, 300));
    };
  }, []);

  return scrollTop;
}
