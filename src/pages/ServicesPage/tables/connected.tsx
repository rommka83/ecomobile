import { nanoid } from 'nanoid';
import { Accordeon } from '../../../shared/Accordeon';
import { Typography } from '../../../shared/Typography';
import { SvgSprite } from '../../../shared/SvgSprite';

const thead = (
  <thead className="bg-gray-100">
    <tr>
      <th className="">
        <Typography
          value="Название"
          size="medium"
          className="py-3 pl-8 pr-3"
          color="secondary"
        />
      </th>
      <th className="pr-3">
        <Typography value="Описание услуги" size="medium" color="secondary" />
      </th>
      <th className="pr-3">
        <Typography
          value="Дата подключения"
          size="medium"
          color="secondary"
          className="text-nowrap"
        />
      </th>
      <th className="pr-3">
        <Typography
          value="Стоимость"
          size="medium"
          color="secondary"
          className="text-nowrap"
        />
      </th>
      <th className="pr-3">
        <Typography
          value="Тип стоимости"
          size="medium"
          color="secondary"
          className="text-nowrap"
        />
      </th>
      <th className="pr-3">
        <Typography
          value="Действия"
          size="medium"
          color="secondary"
          className="text-nowrap"
        />
      </th>
    </tr>
  </thead>
);

const row = (
  <tr>
    <th className="">
      <Typography
        value="Отмена роуминга по России"
        size="medium"
        className="py-7 pl-8 font-semibold"
      />
    </th>
    <th className="py-7">
      <Typography
        value="Услуга меняет тарификацию вызовов в поездках по России.Звонки на номера
      региона нахождения тарифицируются как местные, а вызовы в регион
      подключения становятся междугородними."
        size="medium"
        color="secondary"
        className=""
      />
    </th>
    <th className="py-7">
      <Typography value="31.05.2019, 00:00:00" size="medium" className="" />
    </th>
    <th className="py-7">
      <Typography value="0 ₽" size="medium" className="" />
    </th>
    <th className="relative py-7">
      <Typography
        value="В
      месяц"
        size="medium"
        className=""
      />
      <SvgSprite
        name="information"
        className="absolute left-2/3 top-1/2 flex h-4 w-4 -translate-y-1/2"
      />
    </th>
    <th className="py-7 pr-8">
      <Typography
        value="Для уточнения обратитесь в поддержку"
        size="medium"
        className=""
        color="secondary"
      />
    </th>
  </tr>
);

const rowSecond = (
  <>
    <tr>
      <th className="">
        <Typography
          value="Отмена роуминга по России"
          size="medium"
          className="py-7 pl-8 font-semibold"
        />
      </th>
      <th className="py-7">
        <Typography
          value="Услуга меняет тарификацию вызовов в поездках по России.Звонки на номера
      региона нахождения тарифицируются как местные, а вызовы в регион
      подключения становятся междугородними."
          size="medium"
          color="secondary"
          className=""
        />
      </th>
      <th className="py-7">
        <Typography value="31.05.2019, 00:00:00" size="medium" className="" />
      </th>
      <th className="py-7">
        <Typography value="0 ₽" size="medium" className="" />
      </th>
      <th className="relative py-7">
        <Typography
          value="В
      месяц"
          size="medium"
          className=""
        />
        <SvgSprite
          name="information"
          className="absolute left-2/3 top-1/2 flex h-4 w-4 -translate-y-1/2"
        />
      </th>
      <th className="py-7 pr-8">
        <Typography
          value="Для уточнения обратитесь в поддержку"
          size="medium"
          className=""
          color="secondary"
        />
      </th>
    </tr>
    <tr>
      <th className="">
        <Typography
          value="Авансовый счет"
          size="medium"
          className="py-7 pl-8 font-semibold"
        />
      </th>
      <th className="py-7">
        <Typography
          value="С услугой «Авансовый счёт» вы можете оплачивать коммунальные услуги, телевидение, междугородную и международную связь, интернет, сотовую связь и ещё много нужных вам услуг прямо со специального счета мобильного телефона!"
          size="medium"
          color="secondary"
          className=""
        />
      </th>
      <th className="py-7">
        <Typography value="31.05.2019, 00:00:00" size="medium" className="" />
      </th>
      <th className="py-7">
        <Typography value="0 ₽" size="medium" className="" />
      </th>
      <th className="relative py-7">
        <Typography
          value="В
      месяц"
          size="medium"
          className=""
        />
        <SvgSprite
          name="information"
          className="absolute left-2/3 top-1/2 flex h-4 w-4 -translate-y-1/2"
        />
      </th>
      <th className="py-7 pr-8">
        <Typography
          value="Для уточнения обратитесь в поддержку"
          size="medium"
          className=""
          color="secondary"
        />
      </th>
    </tr>
  </>
);

export const connectedFree = (
  <div className="flex flex-col gap-5" key={nanoid()}>
    <Accordeon title="Международный роуминг" amountChildren={1}>
      <table className="border-collapse">
        {thead}
        <tbody>{row}</tbody>
      </table>
    </Accordeon>
    <Accordeon title="Базовые услуги" amountChildren={1}>
      <table className="border-collapse">
        {thead}
        <tbody>{row}</tbody>
      </table>
    </Accordeon>
    <Accordeon title="Остальные услуги" amountChildren={2}>
      <table className="border-collapse">
        {thead}
        <tbody>{rowSecond}</tbody>
      </table>
    </Accordeon>
  </div>
);

export const connectedPaid = (
  <div className="flex flex-col gap-5" key={nanoid()}>
    <Accordeon title="Международная связь" amountChildren={1}>
      <table className="border-collapse">
        {thead}
        <tbody>{row}</tbody>
      </table>
    </Accordeon>
    <Accordeon title="Остальные услуги" amountChildren={2}>
      <table className="border-collapse">
        {thead}
        <tbody>{rowSecond}</tbody>
      </table>
    </Accordeon>
    <Accordeon title="Базовые услуги" amountChildren={1}>
      <table className="border-collapse">
        {thead}
        <tbody>{row}</tbody>
      </table>
    </Accordeon>
  </div>
);
