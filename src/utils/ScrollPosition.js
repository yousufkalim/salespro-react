/* eslint-disable import/newline-after-import */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
};
