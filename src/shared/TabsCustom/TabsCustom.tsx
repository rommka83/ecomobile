import { useState } from 'react';
import { ITabsCustom } from './TabsCustom.types.ts';
import { nanoid } from 'nanoid';
import { Typography } from '../Typography/index.ts';

const services1 = [
  'Определитель номера',
  'Мир без границ',
  '10Гб',
  'Роуминг по Европе',
  'Интернет и ТВ',
  'Определитель номера Определитель номера',
  'Мир без границ Мир без границ Мир без границ',
  'Определитель номера Определитель номера',
];
const services2 = [
  'Интернет и ТВ',
  'Определитель номера Определитель номера',
  'Мир без границ Мир без границ Мир без границ',
  'Определитель номера Определитель номера',
  'Определитель номера',
  'Мир без границ',
  '10Гб',
  'Роуминг по Европе',
];

export function TabsCustom({}: ITabsCustom) {
  const [tab, setTab] = useState<'tab1' | 'tab2'>('tab1');

  return (
    <div className="h-full">
      <ul className="flex gap-4 border-b border-gray-300 px-8">
        <li
          className={`cursor-pointer border-b-2 py-3 ${tab === 'tab1' ? 'border-blue-600' : 'border-transparent'}`}
          key={nanoid()}
          onClick={() => setTab('tab1')}
        >
          <Typography
            value="Без абонентской платы"
            size="small"
            color={`${tab === 'tab1' ? 'info' : 'primary'}`}
          />
        </li>
        <li
          className={`cursor-pointer border-b-2 py-3 ${tab === 'tab2' ? 'border-blue-600' : 'border-transparent'}`}
          key={nanoid()}
          onClick={() => setTab('tab2')}
        >
          <Typography
            value="С абонентской платой"
            size="small"
            color={`${tab === 'tab2' ? 'info' : 'primary'}`}
          />
        </li>
      </ul>
      <div className="flex h-full px-8 py-3">
        <div className="flex flex-wrap content-start">
          {tab === 'tab1'
            ? services1.map((item) => {
                return (
                  <div
                    className="mb-2 flex h-fit w-fit items-center justify-center rounded-md bg-gray-200 px-2 py-1 text-xs [&:not(:last-child)]:mr-3"
                    key={nanoid()}
                  >
                    {item}
                  </div>
                );
              })
            : services2.map((item) => {
                return (
                  <div
                    className="mb-2 flex h-fit w-fit items-center justify-center rounded-md bg-gray-200 px-2 py-1 text-xs [&:not(:last-child)]:mr-3"
                    key={nanoid()}
                  >
                    {item}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
