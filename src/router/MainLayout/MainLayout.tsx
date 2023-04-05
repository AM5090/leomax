import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import ChildMenu from '../../components/ChildMenu';
import Header from '../../components/Header';
import Navigate from '../../components/Navigate';
import { useGetMenuQuery } from '../../store/rtk';

import styled from './mainLayout.module.scss';

export function MainLayout() {

  const location = useLocation();
  const navigate = useNavigate();

  const {data} = useGetMenuQuery();


  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/main');
    }
  }, [location.pathname]);

  

  return(
    <Suspense>
      <Header/>
      <main className={styled.container}>
        <Navigate menu={data}/>
        {/* <ChildMenu/> */}
        <section className={styled.content}>
          <Outlet/>
        </section>
      </main>
    </Suspense>
  );
}