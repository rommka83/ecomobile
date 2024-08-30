import { IHomePage } from './HomePage.types.ts';
import { UserInfo } from '../../widgets/UserInfo/UserInfo.tsx';
import { PackageBalances } from '../../widgets/PackageBalances/PackageBalances.tsx';
import { CurrentPeriodExpenses } from '../../widgets/CurrentPeriodExpenses/CurrentPeriodExpenses.tsx';
import { MyServices } from '../../widgets/MyServices/MyServices.tsx';

export function HomePage({}: IHomePage) {
  return (
    <div className="grid grid-cols-2 grid-rows-[0.25fr_0.5fr_0.25fr] gap-8 pb-10">
      <UserInfo className="col-span-2" />
      <PackageBalances />
      <CurrentPeriodExpenses />
      <MyServices />
    </div>
  );
}
