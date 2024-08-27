import React from 'react';
import { IMyNumbersPage } from './MyNumbersPage.types.ts';
import { Typography } from '../../shared/Typography/index.ts';
import { GroupOfNumbers } from '../../shared/groupOfNumbers/groupOfNumbers.tsx';

export function MyNumbersPage({}: IMyNumbersPage) {
  return (
    <div className="flex flex-col gap-8">
      <Typography
        value="Дочерние номера"
        size="page-title"
        className="font-semibold"
      />
      <GroupOfNumbers />
    </div>
  );
}
