import { useCallback } from "react";

const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToSection };
};

export default useSmoothScroll;
