import React from 'react';
import { ICurrentPeriodExpenses } from './CurrentPeriodExpenses.types.ts';
import { Typography } from '../../shared/Typography/index.ts';
import { ButtonLink } from '../../shared/ButtonLink/index.ts';
import { LineChart } from '../../shared/LineChart/index.ts';

const paramsChart = [
  { name: 'Связь', value: 30 },
  { name: 'Услуги', value: 50 },
  { name: 'Другое', value: 10 },
];

export function CurrentPeriodExpenses({ className }: ICurrentPeriodExpenses) {
  return (
    <article className={`widgets ${className} flex flex-col`}>
      <Typography
        value="Расходы текущего периода"
        size="large"
        className="border-b border-gray-300 px-8 py-3"
      />
      <div className="flex h-full flex-col p-8">
        <Typography size="title" value="1250,66 ₽" className="flex w-full" />
        <LineChart params={paramsChart} />
      </div>
      <div className="widgets-footer">
        <ButtonLink link="/detailing" name="Посмотреть все" />
      </div>
    </article>
  );
}
