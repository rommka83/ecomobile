import { IPackageBalances } from './PackageBalances.types.ts';
import { DonutChart } from '../../shared/DonutChart/DonutChart.tsx';
import { Typography } from '../../shared/Typography/Typography.tsx';
import { ButtonLink } from '../../shared/ButtonLink/index.ts';

export function PackageBalances({ className }: IPackageBalances) {
  return (
    <article className={`widgets ${className} flex flex-col`}>
      <Typography
        value="Остатки по пакетам"
        size="large"
        className="border-b border-gray-300 px-8 py-3"
      />
      <div className="flex h-full p-8">
        <DonutChart title="Мин" total={400} value={300} />
        <DonutChart title="СМС" total={400} value={200} color="#3b82f6" />
        <DonutChart title="ГБ" color="#93c5fd" />
      </div>
      <div className="widgets-footer">
        <ButtonLink link="/remainingPackages" name="Подробнее" />
      </div>
    </article>
  );
}
