import React from 'react';
import { IInformMessage } from './InformMessage.types.ts';
import { SvgSprite } from '../SvgSprite/index.ts';
import { Typography } from '../Typography/index.ts';

export function InformMessage({}: IInformMessage) {
  return (
    <div className="flex items-center justify-between bg-yellow-100/70 px-10 py-4">
      <div className="flex items-center gap-4">
        <SvgSprite name="security" />
        <div className="flex flex-col gap-2">
          <Typography
            value="Требуется подтверждение"
            className="font-semibold"
          />
          <Typography
            value="Требуется подтверждение номера на Госуслугах. "
            color="secondary"
            size="small"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex rounded-md bg-orange-400/80 p-2 text-white">
          <Typography value="Подтвердить" size="small" color="white" />
        </button>
        <SvgSprite name="down" className="h-10 w-10 -rotate-90" />
      </div>
    </div>
  );
}
