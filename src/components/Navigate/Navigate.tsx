import { Link } from 'react-router-dom';

import { linksHandler } from '../../libs/functions/linksHandler';
import { IMenuItem } from '../../store/rtk/menuInterface';

interface INavigate {
  menu: IMenuItem[] | undefined
}

export function Navigate({ menu }: INavigate) {
  return (
    <nav>
      {menu?.length && menu.map(item => {

        const link = linksHandler(item.url);

        if(!link) return;

        return <Link to={link} key={item.id}>{item.name}</Link>;
      })}
    </nav>
  );
}