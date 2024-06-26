import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1439px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return { isDesktop: isDesktop, isTablet: isTablet, isMobile: isMobile };
};
