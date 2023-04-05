import { useEffect } from 'react';

import { useAppSelector } from '../../hooks/reduxHook';
import { useGetCatalogQuery } from '../../store/rtk';

export function Main() {

  const {selectMenuItem} = useAppSelector(state => state.main);

  const queryData = {
    shard: 'children_shoes',
    query: 'cat=631',
    category: 'electronics',
  };

  const {data} = useGetCatalogQuery();

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <>
      {data && data.map((item: any) => (
        <div>
          <h4>{item?.title}</h4>
          <div style={{width: '200px', height: '200px'}}>
            <img src={item?.image} style={{ width: '100%', height: '100%' }}/>
          </div>
          <p>{item?.description}</p>
        </div>
      ))}
    </>
  );
}


// useEffect(() => {
//   async function queryFetch() {
//     try {
//       const json = await fetch('https://fakestoreapi.com/products', {
//         method: 'GET',
//       });
//       const res = await json.json();
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   queryFetch();
// }, []);