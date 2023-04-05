import { CSSProperties, FC } from 'react';

interface Icon {
  width?: string,
  height?: string,
  fill?: string,
  className?: string,
  style?: CSSProperties,
}

export const BurgerMenu: FC<Icon> = () => (
  <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="2" rx="1" fill="white"/>
    <rect y="6" width="22" height="2" rx="1" fill="white"/>
    <rect y="12" width="22" height="2" rx="1" fill="white"/>
  </svg>
);