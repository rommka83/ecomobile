// "Номер, как участник группы номеров"
export type GroupNumberType = {
  msisdn: number;
  isActive: boolean;
  balance: number;
  pricePlan?: string;
  description?: string; //   "Описание номера"
  hasFullAccess: boolean; //   "Настройка полного доступа для номера (для UI)"

  // payMethodType: string;
  // remains?: string;
  // access: string[]; //   "Доступ в личный кабинет"
  // // @deprecated(
  // //   reason: "Устаревшее свойство. Для определения прав доступа следует использовать систему разрешений."
  // // )
  // recommendedPayment?: string; //   "Рекомендованный платеж"
  // services: string[]; //   @auth(authority: "service.view")
  // mobileOperator?: string; //   bonusInfo?: BonusInfo@auth(authority: "bonus")
  // expenses: string;
  // mark: string; //   "Личные отметки для номера"
  // balanceTopUpList: { page: number; pageSize: number }[];
  // // groups: Group[]; //   "Группы, в которые входит этот номер, и в которых залогиненный номер является главным."
  // details: string;
  // blockHelp?: string;
  // promisedPaymentInfo?: string; //   "Информация об обещанных платежах"
  // paymentAccounts: string[]; // @auth(authority: "payment.pay")//   "Доступные для использования способы оплаты."
};
