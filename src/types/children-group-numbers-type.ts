import { NumberInGroupType } from './number-in-group-type';

// Группа номеров (?) где он главный (?)
export type ChildrenGroupNumbersType = {
  id: number;
  balance: number;
  numbers: NumberInGroupType[]; //   "Номер в группе"
  mark: string; //   "Личные отметки для группы"
  defaultName: string; //   "Название группы по умолчанию, если не задано название в `GroupMark.name`"
  isBalancerEnabled: boolean; //   "Включен ли балансировщик балансов номеров"
}[];
