import { useMediaQuery } from 'react-responsive';

export interface BreakPoints {
  isLargeScreen: boolean;
  isMediumScreen: boolean;
  isSmallScreen: boolean;
}

export default function useBreakPoints() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768 });
  const isSmallScreen = useMediaQuery({ minWidth: 640 });

  return {
    isLargeScreen,
    isMediumScreen,
    isSmallScreen,
  };
}

// Tailwind Implementation

export interface MediaQueries {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export function useMediaQueries(): MediaQueries {
  const sm = '@media (min-width: 640px)';
  const md = '@media (min-width: 768px)';
  const lg = '@media (min-width: 1024px)';
  const xl = '@media (min-width: 1280px)';
  const xxl = '@media (min-width: 1536px)';

  return {
    sm,
    md,
    lg,
    xl,
    xxl,
  };
}