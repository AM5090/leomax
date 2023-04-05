import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { linksHandler } from '../../libs/functions/linksHandler';
import { IMenuItem } from '../../store/rtk/menuInterface';
import { setMenuItem } from '../../store/slices/mainSlice';

import styled from './navigate.module.scss';

interface INavigate {
  // menu: IMenuItem[] | undefined
  menu: string[] | undefined
}

export function Navigate({ menu }: INavigate) {

  const {openMenu} = useAppSelector(state => state.main);
  const dispatch = useAppDispatch();

  function handlerOpenMenu(menuItem: string) {
    dispatch(setMenuItem(menuItem));
  }

  return (
    <nav className={`${styled.navMenu} ${openMenu ? styled.active : ''}`}>
      <ul>
        {menu?.length && menu.map(item => {

          return (
            <li key={item} onClick={() => handlerOpenMenu(item)}>
              <Link to={item} onClick={(e) => e.preventDefault()}>{item}</Link>
            </li>
          );

        })}
      </ul>
    </nav>
  );
}
