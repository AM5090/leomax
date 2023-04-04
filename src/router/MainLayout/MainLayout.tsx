import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

export function MainLayout() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/main');
    }
  }, [location.pathname]);

  return(
    <Suspense>
      <header>Заголовок</header>
      <main className="container">
        <Outlet/>
      </main>
    </Suspense>
  );
}