import { IServicesPage } from './ServicesPage.types.ts';
import { Typography } from '../../shared/Typography/Typography.tsx';
import { SelectCastum } from '../../shared/SelectCastum/SelectCastum.tsx';
import { TabsCustom } from '../../shared/TabsCustom/TabsCustom.tsx';
import { connectedFree, connectedPaid } from './tables/connected.tsx';
import { useState } from 'react';
import { availableFree, availablePaid } from './tables/available.tsx';

export function ServicesPage({}: IServicesPage) {
  const [typeService, setTypeService] = useState('Подключенные');

  return (
    <article className="flex flex-col gap-7 pb-10">
      <Typography value="Услуги" size="page-title" />
      <SelectCastum
        options={['Подключенные', 'Доступные']}
        returnOption={(val) => setTypeService(val)}
      />
      {typeService === 'Подключенные' ? (
        <TabsCustom
          headerStyle="mb-8"
          tabs={['Платные', 'Бесплатные']}
          children={[connectedFree, connectedPaid]}
        />
      ) : (
        <TabsCustom
          headerStyle="mb-8"
          tabs={['Платные', 'Бесплатные']}
          children={[availableFree, availablePaid]}
        />
      )}
    </article>
  );
}
