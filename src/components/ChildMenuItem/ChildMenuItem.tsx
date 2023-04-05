import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { linksHandler } from '../../libs/functions/linksHandler';
import { IMenuItemChilds } from '../../store/rtk/menuInterface';
import { setMenuItem } from '../../store/slices/mainSlice';

import styled from './childMenuItem.module.scss';


interface IChildMenuItemProps {
  name: string | undefined,
  childs: IMenuItemChilds[] | undefined,
}

export function ChildMenuItem({name, childs}: IChildMenuItemProps) {

  const [selectChild, setSelectChild] = useState<IMenuItemChilds | null>(null);
  
  function handlerOpenChild(item: IMenuItemChilds) {
    console.log('childItem >>>', item);
    setSelectChild(item);
  }

  return (
    <div className={styled.childMenuItemWrap}>
      <article>
        <h2>{name}</h2>
        <nav>
          <ul>
            {childs && childs?.map(item => {
              const link = linksHandler(item.url);

              if (link) {
                return (
                  <li key={item.id} onMouseEnter={() => handlerOpenChild(item)}>
                    <Link to={link}>{item.name}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </article>
      {selectChild?.childs &&
        <ChildMenuItem name={selectChild?.name} childs={selectChild?.childs} />
      }
    </div>
  );
}