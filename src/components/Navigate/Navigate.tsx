import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/reduxHook';
import { linksHandler } from '../../libs/functions/linksHandler';
import { IMenuItem } from '../../store/rtk/menuInterface';
import { setMenuItem } from '../../store/slices/mainSlice';

import styled from './navigate.module.scss';

interface INavigate {
  menu: IMenuItem[] | undefined
}

export function Navigate({ menu }: INavigate) {

  const dispatch = useAppDispatch();

  function handlerOpenMenu(menuItem: IMenuItem) {
    dispatch(setMenuItem(menuItem));
  }

  return (
    <nav className={styled.navMenu}>
      <ul>
        {menu?.length && menu.map(item => {

          const link = linksHandler(item.url);

          if(link) {
            return (
              <li key={item.id} onMouseEnter={() => handlerOpenMenu(item)}>
                <Link to={link} onClick={(e) => e.preventDefault()}>{item.name}</Link>
              </li>
            );
          };

          return <></>;
        })}
      </ul>
    </nav>
  );
}
