import { useState } from 'react';
import { ITabsCustom } from './TabsCustom.types.ts';
import { nanoid } from 'nanoid';
import { Typography } from '../Typography/index.ts';

export function TabsCustom({
  tabs,
  children,
  headerStyle,
  bodyStyle,
}: ITabsCustom) {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="h-full">
      <ul className={`flex gap-6 border-gray-300 ${headerStyle}`}>
        {tabs.map((item, num) => (
          <li
            className={`cursor-pointer border-b-2 py-3 ${tab === num ? 'border-blue-600' : 'border-transparent'}`}
            key={nanoid()}
            onClick={() => setTab(num)}
          >
            <Typography value={item} color={tab === num ? 'info' : 'primary'} />
          </li>
        ))}
      </ul>
      <div className={`flex h-full w-full ${bodyStyle ?? bodyStyle}`}>
        {children.map((item, num) => (
          <div
            className={`w-full flex-wrap content-start ${tab === num ? 'flex' : 'hidden'}`}
            key={nanoid()}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
