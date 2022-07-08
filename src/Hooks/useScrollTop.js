import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

export default function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  useEffect(() => {
    const reScrollTop = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", throttle(reScrollTop, 1000));

    return () => {
      window.removeEventListener("scroll", throttle(reScrollTop, 1000));
    };
  });

  return scrollTop;
}
