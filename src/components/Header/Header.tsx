import { useEffect } from 'react';

import { BurgerMenu } from '../../assets/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setOpenMenu } from '../../store/slices/mainSlice';

import styled from './header.module.scss';

export function Header() {

  const {openMenu} = useAppSelector(state => state.main);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);
  
  return (
    <header className={styled.header}>
      <div onClick={() => dispatch(setOpenMenu(!openMenu))}>
        <BurgerMenu />
      </div>
      <h2>Leomax</h2>
    </header>
  );
};