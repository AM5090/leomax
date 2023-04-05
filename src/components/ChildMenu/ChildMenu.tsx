import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setMenuItem } from '../../store/slices/mainSlice';
import ChildMenuItem from '../ChildMenuItem';

import styled from './childMenu.module.scss';


export function ChildMenu() {
  
  const {selectMenuItem} = useAppSelector(state => state.main);

  const dispatch = useAppDispatch();

  function handlerCloseMenu() {
    dispatch(setMenuItem(null));
  }

  return (
    <section className={styled.childMenu} >
      <ChildMenuItem name={selectMenuItem?.name} childs={selectMenuItem?.childs}/>
    </section>
  );
}

// onMouseLeave={handlerCloseMenu}