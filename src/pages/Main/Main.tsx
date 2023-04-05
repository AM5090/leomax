import { useEffect, useState } from 'react';
import Cookies from 'cookies-ts';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { useGetCatalogQuery } from '../../store/rtk';
import { setSelectProduct } from '../../store/slices/mainSlice';

import styled from './main.module.scss';

const cookies = new Cookies();


export function Main() {

  const {selectMenuItem, selectProduct} = useAppSelector(state => state.main);

  const {data} = useGetCatalogQuery(selectMenuItem);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('selectProduct >>>', selectProduct);
    if (selectProduct) {
      cookies.set('product', selectProduct);
    }
  }, [selectProduct]);

  function hundlerCardClick(item: any) {
    console.log(item.id);
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
