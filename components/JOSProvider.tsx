'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import JOS from 'jos-animation';

const jos_options = {
  passive: false,
  once: true,
  animation: 'fade-up',
  timingFunction: 'ease',
  threshold: 0,
  delay: 0.5,
  duration: 0.7,
  scrollDirection: 'down',
  rootMargin: '0% 0% 15% 0%',
};

export default function JOSProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    JOS.init(jos_options);
  }, []);

  useEffect(() => {
    JOS.refresh();
  }, [pathname]);

  return <>{children}</>;
}
