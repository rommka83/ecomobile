import { GroupNumberType } from './groupNumberType';

// Группа номеров
export type GroupType = {
  id: number;
  balance: number;
  numbers: GroupNumberType[]; //   "Номер в группе"
  mark: string; //   "Личные отметки для группы"
  defaultName: string; //   "Название группы по умолчанию, если не задано название в `GroupMark.name`"
  isBalancerEnabled: boolean; //   "Включен ли балансировщик балансов номеров"
}[];
