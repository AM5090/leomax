import { useEffect } from 'react';

import { useGetCatalogQuery } from '../../store/rtk';

export function Main() {

  const queryData = {
    shard: 'children_shoes',
    query: 'cat=631',
  };

  const {data} = useGetCatalogQuery(queryData);

  useEffect(() => {
    console.log('data >>>', data);
  }, [data]);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {data && data.map((item: any) => (
        <div key={item.id} style={{ width: '100px' }}>
          <h2>{item.title}</h2>
          <small>{item.category}</small>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
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