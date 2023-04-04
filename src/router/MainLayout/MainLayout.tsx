import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import Navigate from '../../components/Navigate';

import { useGetMenuQuery } from '../../store/rtk';

export function MainLayout() {

  const location = useLocation();
  const navigate = useNavigate();

  const {data} = useGetMenuQuery();

  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/main');
    }
  }, [location.pathname]);

  useEffect(() => {
    console.log('data >>>', data);
    if (data) {
      data.forEach((element: any) => {
        if(!element.url.includes('http')) {
          console.log(element.url);
        }
      });
    }
    
  }, [data]);

  

  return(
    <Suspense>
      <header>Заголовок</header>
      <main className="container">
        <Navigate menu={data}/>
        <section className="content">
          <Outlet/>
        </section>
      </main>
    </Suspense>
  );
}