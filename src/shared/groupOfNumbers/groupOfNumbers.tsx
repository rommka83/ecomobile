import React from 'react';
import { IGroupOfNumbers } from './groupOfNumbers.types';
import { ChildrenGroupNumbersType } from '../../types/children-group-numbers-type';
import { Typography } from '../Typography';
import { SvgSprite } from '../SvgSprite';
import { Status } from '../Status';
import { ButtonLink } from '../ButtonLink';
import { nanoid } from 'nanoid';

const groupOfNumbers: ChildrenGroupNumbersType = [
  {
    id: 1,
    balance: 400,
    numbers: [
      {
        msisdn: 8991234567, //номер
        isActive: false, //Статус
        balance: 100, //баланс
        pricePlan: 'Москва - Стратегический (КОРП) (SS)', //тариф
        description: 'string', //Описание
        hasFullAccess: false, //   Полный доступ в ЛК
      },
      {
        msisdn: 8991234567, //номер
        isActive: true, //Статус
        balance: 100, //баланс
        pricePlan: 'string', //тариф
        description: 'string', //Описание
        hasFullAccess: true, //   Полный доступ в ЛК
      },
      {
        msisdn: 8991234567, //номер
        isActive: false, //Статус
        balance: 100, //баланс
        pricePlan: 'string', //тариф
        description: 'string', //Описание
        hasFullAccess: true, //   Полный доступ в ЛК
      },
      {
        msisdn: 8991234567, //номер
        isActive: true, //Статус
        balance: 100, //баланс
        pricePlan: 'Адаптивный 1 2022', //тариф
        description: 'string', //Описание
        hasFullAccess: false, //   Полный доступ в ЛК
      },
    ],
    mark: 'aaa',
    defaultName: 'aaa',
    isBalancerEnabled: true,
  },
  {
    id: 2,
    balance: -600,
    numbers: [
      {
        msisdn: 8991234567, //номер
        isActive: false, //Статус
        balance: 100, //баланс
        pricePlan: 'string', //тариф
        description: 'string', //Описание
        hasFullAccess: true, //   Полный доступ в ЛК
      },
      {
        msisdn: 8991234567, //номер
        isActive: true, //Статус
        balance: -1000, //баланс
        pricePlan: 'string', //тариф
        description: 'string', //Описание
        hasFullAccess: false, //   Полный доступ в ЛК
      },
      {
        msisdn: 8991234567, //номер
        isActive: true, //Статус
        balance: 100, //баланс
        pricePlan: 'string', //тариф
        description: 'string', //Описание
        hasFullAccess: true, //   Полный доступ в ЛК
      },
      {
        msisdn: 8991234567, //номер
        isActive: false, //Статус
        balance: 100, //баланс
        pricePlan: 'Москва - Стратегический (КОРП) (SS)', //тариф
        description: 'string', //Описание
        hasFullAccess: false, //   Полный доступ в ЛК
      },
    ],
    mark: 'bbb',
    defaultName: 'bbb',
    isBalancerEnabled: true,
  },
];

export function GroupOfNumbers({}: IGroupOfNumbers) {
  return groupOfNumbers.map((item) => {
    return (
      <div className="widgets flex flex-col py-5" key={item.id}>
        <Typography
          value={item.defaultName}
          size="title"
          className="mb-5 ml-8"
        />
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-t border-gray-300 bg-gray-100">
              <th className="py-3 pl-8">
                <Typography
                  value="Номер"
                  color="secondary"
                  className="flex justify-start"
                />
              </th>
              <th>
                <Typography
                  value="Тариф"
                  color="secondary"
                  className="flex justify-start"
                />
              </th>
              <th>
                <Typography
                  value="Баланс"
                  color="secondary"
                  className="flex justify-start"
                />
              </th>
              <th>
                <Typography
                  value="Статус"
                  color="secondary"
                  className="flex justify-start"
                />
              </th>
              <th>
                <Typography
                  value="Полный доступ в ЛК"
                  color="secondary"
                  className="flex justify-start"
                />
              </th>
              <th>
                <Typography
                  value="Описание"
                  color="secondary"
                  className="flex justify-start"
                />
              </th>
              <th className="text-transparent">dd</th>
            </tr>
          </thead>
          <tbody>
            {item.numbers.map((number) => (
              <tr className="border-b border-gray-300" key={nanoid()}>
                <td className="py-3 pl-8">{number.msisdn}</td>
                <td>{number.pricePlan}</td>
                <td>
                  <Typography
                    value={`${number.balance} ₽`}
                    color={number.balance < 0 ? 'danger' : 'primary'}
                  />
                </td>
                <td>
                  {
                    <Status
                      name={number.isActive ? 'Активен' : 'Заблокирован'}
                      type={number.isActive ? 'positive' : 'disabled'}
                    />
                  }
                </td>
                <td>
                  {
                    <Status
                      name={number.hasFullAccess ? 'Есть' : 'Нет'}
                      type={number.hasFullAccess ? 'positive' : 'negative'}
                    />
                  }
                </td>
                <td>
                  {<ButtonLink link={'#'} name={number.description ?? ''} />}
                </td>
                <td className="pr-8">
                  {<SvgSprite name="notepad-edit" className="h-4 w-4" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="ml-8 mt-5 flex gap-2">
          <Typography value="Баланс группы" />
          <Typography value={`${item.balance}  ₽`} color="secondary" />
        </div>
      </div>
    );
  });
}
