import { useEffect } from "react";

interface ScrollTrackerProps {
  onScroll25Percent: () => void;
  //   isModalOpen: boolean;
}

export function ScrollTracker({ onScroll25Percent }: ScrollTrackerProps) {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;
      const scrollPosition = window.scrollY;

      const scrollPercentage =
        (scrollPosition / (totalHeight - windowHeight)) * 100;
      console.log("scrollPercentage", scrollPercentage);
      if (scrollPercentage >= 25 && scrollPercentage <= 26) {
        console.log("deu certo ");
        onScroll25Percent();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScroll25Percent]);

  return null;
}
