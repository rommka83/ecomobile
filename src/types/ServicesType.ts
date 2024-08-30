// 'Подключенные услуги на номере (в т.ч. в процессе подключения/отключения)';
export type BillingNumberServiceEnabled = {
  id: string;
  serviceId: string;
  name: string;
  description?: string;
  enabledAt?: string; // "Время подключения. Может быть в будущем."
  fee?: BillingServiceFee;
  isReadonly: boolean; // "Состояние услуги (подключена/отключена) нельзя менять."
  category?: BillingServiceCategory;

  //   feeToEnable?: number;
  //   state: BillingNumberServiceState; // "Состояние услуги"
  //   enableRequestedAt?: string; // "Время запроса на подключение. Может быть в будущем."
  //   disableRequestedAt?: string; // "Время запроса на отключение. Может быть в будущем."
  //   disabledAt?: string; // "Время отключения. Может быть в будущем."
};

// "Услуги доступные для подключения на номере (с учетом тарифа, уже подключенных услуг и пр. условий)"
export type BillingNumberServiceAvailable = {
  serviceId: string;
  name: string;
  category?: BillingServiceCategory;
  description?: string;
  feeToEnable?: number;
  fee: BillingServiceFee;
};

// 'Категория услуг';
export type BillingServiceCategory = {
  id: string;
  name: string; // "Наименование"
};

// 'Абонентская плата за услугу';
export type BillingServiceFee = {
  amount?: number; // "Кол-во денег (в копейках)"
  type?: 'В день' | 'В месяц'; // "Тип начисления"
};

// 'Тип начисления абонентской платы за услугу';
// enum BillingServiceFeeType {
//   'DAY' = 'В день',
//   'MONTH' = 'В месяц',
// }

// 'Состояние услуги';
enum BillingNumberServiceState {
  'FUTURE' = 'Будет подключена или отключена в будущем',
  'ENABLE_REQUESTED' = 'Отправлен запрос на подключение',
  'ENABLED' = 'Подключена',
  'DISABLE_REQUESTED' = 'Отправлен запрос на отключение',
  'DISABLED' = 'Отключена',
  'UNKNOWN__' = 'Неизвестное для API значение (исключительная ситуация).',
}

// "Услуги доступные для подключения на номере (с учетом тарифа, уже подключенных услуг и пр. условий)"
// type BillingNumberServiceAvailable implements BillingService {
//     serviceId: number!
//     name: string!
//     category: BillingServiceCategory
//     description: string
//     feeToEnable: number
//     fee: BillingServiceFee
// }

// "Услуга в биллинге (как самостоятельная сущность)"
// numbererface BillingService {
//     "ID услуги"
//     serviceId: number!
//     "Наименование"
//     name: string!
//     "Категория"
//     category: BillingServiceCategory
//     "Описание"
//     description: string
//     "Стоимость подключения (копейки)"
//     feeToEnable: number
//     "Абонентская плата"
//     fee: BillingServiceFee
