import { IMyServices } from './MyServices.types.ts';
import { Typography } from '../../shared/Typography/index.ts';
import { ButtonLink } from '../../shared/ButtonLink/index.ts';
import { TabsCustom } from '../../shared/TabsCustom/index.ts';
import { nanoid } from 'nanoid';

export function MyServices({ className }: IMyServices) {
  return (
    <article className={`widgets ${className} flex flex-col`}>
      <Typography
        value="Мои  услуги"
        className="border-b border-gray-300 px-8 py-3"
      />
      <TabsCustom
        tabs={tabsNames}
        children={children}
        headerStyle="border-b px-8"
        bodyStyle="px-8 py-3"
      />
      <div className="widgets-footer">
        <ButtonLink link="/services" name="Посмотреть все" />
      </div>
    </article>
  );
}

// TODO: убрать мокки
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

const childOne = services1.map((item) => {
  return (
    <div
      className="mb-2 flex h-fit w-fit items-center justify-center rounded-md bg-gray-200/80 px-2 py-1 [&:not(:last-child)]:mr-3"
      key={nanoid()}
    >
      <Typography value={item} size="small" color="secondary" />
    </div>
  );
});

const childTwo = services2.map((item) => {
  return (
    <div
      className="mb-2 flex h-fit w-fit items-center justify-center rounded-md bg-gray-200/80 px-2 py-1 [&:not(:last-child)]:mr-3"
      key={nanoid()}
    >
      <Typography value={item} size="small" color="secondary" />
    </div>
  );
});

const children = [childOne, childTwo];

const tabsNames = ['Без абонентской платы', 'С абонентской платой'];
