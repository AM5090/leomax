import { NavLink } from 'react-router-dom';

import { linksHandler } from '../../libs/functions/linksHandler';
import { IMenuItem } from '../../store/rtk/menuInterface';

import styled from './navigate.module.scss';

interface INavigate {
  menu: IMenuItem[] | undefined
}

export function Navigate({ menu }: INavigate) {
  return (
    <nav className={styled.navMenu}>
      <ul>
        {menu?.length && menu.map(item => {

          const link = linksHandler(item.url);

          if(link) {
            return (
              <li key={item.id}>
                <NavLink to={link}>{item.name}</NavLink>
              </li>
            );
          };

          return <></>;
        })}
      </ul>
    </nav>
  );
}