import { GroupType } from './GroupType';
import { BillingNumberServiceEnabled } from './ServicesType';

// Номер в биллинге
export type NumberType = {
  msisdn: number;
  role: string;
  isActive: boolean;
  balance: number;
  payMethodType: string;
  pricePlan?: string;
  remains?: string;
  groups: GroupType[]; // "Группы, в которых этот номер является главным."
  contract?: string; // "Договор"
  recommendedPayment?: string; // "Рекомендованный платеж"
  services: BillingNumberServiceEnabled[]; // @auth(authority: "service.view")
  codewordMasked?: string; // "Кодовое слово с маской вида `а***я`. Null - если кодовое слово не установлено."
  region?: string; // "Регион номера (НЕ роуминг)"
  mobileOperator?: string; // "Мобильный оператор номера"
  bonusInfo?: string; // @auth(authority: "bonus")
  expenses: number;
  balanceTopUpList: {
    page: number;
    pageSize: number;
  }[];
  details: number;
  blockHelp?: string;
  promisedPaymentInfo?: string; // "Информация об обещанных платежах"
  paymentAccounts: string[]; //  @auth(authority: "payment.pay")    // "Доступные для использования способы оплаты."
};
