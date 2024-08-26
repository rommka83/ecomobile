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
  const totalValue = paramsChart.reduce((acc, p) => {
    return acc + p.value;
  }, 0);

  return (
    <article className={`widgets ${className} flex flex-col`}>
      <Typography
        value="Расходы текущего периода"
        size="large"
        className="border-b border-gray-300 px-8 py-3"
      />
      <div className="flex h-full flex-col p-8">
        <Typography
          size="title"
          value={`${totalValue} ₽`}
          className="flex w-full"
        />
        <LineChart params={paramsChart} />
      </div>
      <div className="widgets-footer">
        <ButtonLink link="/expenses" name="Посмотреть все" />
      </div>
    </article>
  );
}
