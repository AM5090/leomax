import { useAppSelector } from '../../hooks/reduxHook';
import { useGetCatalogQuery } from '../../store/rtk';

import styled from './main.module.scss';

export function Main() {

  const {selectMenuItem} = useAppSelector(state => state.main);

  const {data} = useGetCatalogQuery(selectMenuItem);


  return (
    <>
      <h1 className={styled.mainTitle}>{selectMenuItem}</h1>
      <div className={styled.list}>
        {data && data.map((item: any) => (
          <article className={styled.listItme}>
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
