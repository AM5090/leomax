import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';

import { setMenuItem } from '../../store/slices/mainSlice';

import styled from './childMenu.module.scss';


export function ChildMenu() {
  
  const {selectMenuItem} = useAppSelector(state => state.main);

  const dispatch = useAppDispatch();

  function handlerCloseMenu() {
    dispatch(setMenuItem(null));
  }

  return (
    <section className={styled.childMenu} onMouseLeave={handlerCloseMenu}>
      <h2>{selectMenuItem?.name}</h2>
      <p>{selectMenuItem?.childs ? selectMenuItem?.childs.length : selectMenuItem?.id}</p>
    </section>
  );
}