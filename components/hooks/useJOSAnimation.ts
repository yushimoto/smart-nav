import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import JOS from 'jos-animation';

// Custom hook for initializing JOS animations
const useJOSAnimation = (): void => {
  const pathname = usePathname();
  useEffect(() => {
    JOS.init({
      passive: false,
      once: true,
      animation: 'fade-up',
      timingFunction: 'ease',
      threshold: 0,
      delay: 0.5,
      duration: 0.7,
      scrollDirection: 'down',
      rootMargin: '0% 0% 15% 0%',
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    JOS.refresh();
  }, [pathname]);
};

export default useJOSAnimation;
