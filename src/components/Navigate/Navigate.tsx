import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { linksHandler } from '../../libs/functions/linksHandler';
import { IMenuItem } from '../../store/rtk/menuInterface';
import { setMenuItem } from '../../store/slices/mainSlice';

import styled from './navigate.module.scss';



interface INavigate {
  menu: string[] | undefined
}

export function Navigate({ menu }: INavigate) {

  const { selectMenuItem, openMenu} = useAppSelector(state => state.main);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectMenuItem) {
      localStorage.setItem('category', selectMenuItem);
    }
  }, [selectMenuItem]);

  function handlerOpenMenu(e: any, menuItem: string) {
    e.preventDefault();
    dispatch(setMenuItem(menuItem));
  }

  return (
    <nav className={`${styled.navMenu} ${openMenu ? styled.active : ''}`}>
        {menu?.length && menu.map(item => {
          return (
              <NavLink 
                to={item} 
                key={item}
                onClick={(e) => handlerOpenMenu(e, item)}
                className={({ isActive }) => { return isActive ? styled.active : ''; }}
              >
                {item}
              </NavLink>
          );

        })}
    </nav>
  );
}
