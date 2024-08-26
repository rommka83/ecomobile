import React from 'react';
import { IHomePage } from './HomePage.types.ts';
import { UserInfo } from '../../widgets/UserInfo/UserInfo.tsx';
import { PackageBalances } from '../../widgets/PackageBalances/PackageBalances.tsx';
import { CurrentPeriodExpenses } from '../../widgets/CurrentPeriodExpenses/CurrentPeriodExpenses.tsx';
import { MyServices } from '../../widgets/MyServices/MyServices.tsx';

export function HomePage({}: IHomePage) {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-8 py-10">
      <UserInfo className="col-span-2" />
      <PackageBalances />
      <CurrentPeriodExpenses />
      <MyServices />
    </div>
  );
}
