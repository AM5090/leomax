import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { useGetCatalogQuery } from '../../store/rtk';
import { setSelectProduct } from '../../store/slices/mainSlice';

import styled from './main.module.scss';



export function Main() {

  const {selectMenuItem, selectProduct} = useAppSelector(state => state.main);

  const {data} = useGetCatalogQuery(selectMenuItem);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectProduct) {
      localStorage.setItem('product', selectProduct);
    }
  }, [selectProduct]);

  function hundlerCardClick(item: any) {
    dispatch(setSelectProduct(String(item.id)));
  }

  return (
    <>
      <h1 className={styled.mainTitle}>{selectMenuItem}</h1>
      <div className={styled.list}>
        {data && data.map((item: any) => (
          <article 
            className={`${styled.listItme} ${selectProduct === String(item.id) ? styled.active : ''}`} 
            onClick={() => hundlerCardClick(item)}
          >
            <div className={styled.image}>
              <img src={item?.image}/>
            </div>
            <div className={styled.content}>
              <h4 className={styled.title}>{item?.title}</h4>
              <p className={styled.price}>{item?.price}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
