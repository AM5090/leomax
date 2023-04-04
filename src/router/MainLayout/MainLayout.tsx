import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import ChildMenu from '../../components/ChildMenu';
import Header from '../../components/Header';
import Navigate from '../../components/Navigate';
import { useAppSelector } from '../../hooks/reduxHook';
import { useGetMenuQuery } from '../../store/rtk';

import styled from './mainLayout.module.scss';

export function MainLayout() {

  const location = useLocation();
  const navigate = useNavigate();

  const {data} = useGetMenuQuery();

  const {selectMenuItem} = useAppSelector(state => state.main);

  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/main');
    }
  }, [location.pathname]);

  useEffect(() => {
    // console.log('data >>>', data);
    if (data) {
      data.forEach((element: any) => {
        if(!element.url.includes('http')) {
          // console.log(element.url);
        }
      });
    }
  }, [data]);

  

  return(
    <Suspense>
      <Header/>
      <main className={styled.container}>
        <Navigate menu={data}/>
        {selectMenuItem && <ChildMenu/>}
        <section className="content">
          <Outlet/>
        </section>
      </main>
    </Suspense>
  );
}