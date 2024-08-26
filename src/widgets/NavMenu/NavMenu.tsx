/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { SvgSprite } from '../../shared/SvgSprite/SvgSprite.tsx';
import { TRoute } from './NavMenu.types.ts';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '../../shared/Typography/Typography.tsx';

const routes: TRoute[] = [
  { path: '/', name: 'Главная', icon: 'home' },
  { path: '/myNumbers', name: 'Мои номера', icon: 'data' },
  { path: '/services', name: 'Услуги', icon: 'office-bag' },
  { path: '/expenses', name: 'Расходы', icon: 'chart-pie' },
  { path: '/detailing', name: 'Детализация', icon: 'setting' },
  { path: '/remainingPackages', name: 'Остатки пакетов', icon: 'chart-col' },
  { path: '/topUpBalance', name: 'Пополнение баланса', icon: 'wallet' },
  { path: '/applications', name: 'Заявки', icon: 'message' },
  { path: '/profile', name: 'Профиль', icon: 'user' },
];

export function NavMenu() {
  const location = useLocation();
  const [href, setHref] = useState(location.pathname);
  const [hover, setHover] = useState('');

  const handleMouseEnter = (ev: string) => {
    setHover(ev);
  };

  const handleMouseLeave = () => {
    setHover('');
  };

  useEffect(() => {
    if (location.pathname === href) return;
    setHref(location.pathname);
  }, [location]);

  return (
    <div className="flex h-full flex-col bg-black md:px-6 md:pb-10 md:pt-6">
      <SvgSprite className="mb-10" name="logo" />
      <nav className="text-gray-300">
        <ul>
          {routes.map((route) => {
            return (
              <li
                key={route.name}
                className={`${href === route.path ? 'bg-white/10' : 'bg-none'} rounded-md p-3 last:mt-10`}
                onMouseEnter={() => handleMouseEnter(route.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={route.path} className="flex items-center gap-3">
                  <SvgSprite
                    className="h-6 w-6"
                    name={route.icon}
                    active={href === route.path || hover === route.name}
                  />
                  <Typography
                    value={route.name}
                    color={hover === route.name ? 'white' : 'secondary'}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="mt-auto w-fit rounded-md border border-gray-300 px-3 py-2 text-gray-300">
        Выйти
      </button>
    </div>
  );
}
