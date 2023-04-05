import { useEffect, useState } from 'react';
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
  const {selectMenuItem} = useAppSelector(state => state.main);

  useEffect(() => {
    setSelectChild(null);
  }, [selectMenuItem]);
  
  function handlerOpenChild(item: IMenuItemChilds) {
    setSelectChild(item);
  }

  return (
    <div className={styled.childMenuItemWrap}>

      <article className={styled.childMenuList}>
        <h2>{name}</h2>
        <nav>
          <ul>
            {childs && childs?.map(item => {
              console.log('22 >>>', item);

            //   const link = linksHandler(item.url);

            //   if (link) {
            //     return (
            //       <li key={item.id} onMouseEnter={() => handlerOpenChild(item)}>
            //         <Link to={link} onClick={(e) => e.preventDefault()}>{item.name}</Link>
            //       </li>
            //     );
            //   }
            return <></>;

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