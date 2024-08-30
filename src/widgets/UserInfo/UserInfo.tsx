import { IUserInfo } from './UserInfo.types.ts';
import { Status } from '../../shared/Status/Status.tsx';
import { ButtonLink } from '../../shared/ButtonLink/ButtonLink.tsx';
import { Typography } from '../../shared/Typography/Typography.tsx';

export function UserInfo({ className }: IUserInfo) {
  return (
    <article className={`widgets flex gap-8 p-8 ${className}`}>
      <div className="flex w-1/2 flex-col">
        <Typography value="Петров Константин Александрович" size="page-title" />
        <ButtonLink link="/profile" name="Профиль" />
        <Typography
          value="Мой тариф"
          size="small"
          color="secondary"
          className="mb-3 mt-10"
        />
        <Typography value="Интернет 50 Гб за 200" className="text-2xl" />
        <ButtonLink link="/detailing" name="Подробнее" />
      </div>
      <div className="flex w-1/2 flex-col">
        <div className="flex w-full items-center gap-2 border-b border-gray-300 pb-6">
          <Typography value="+7 (900) 123-45-67" className="text-2xl" />
          <Status name="Активен" type="positive" />
        </div>
        <Typography
          size="small"
          color="secondary"
          value="Мой баланс"
          className="mt-10"
        />
        <Typography
          size="page-title"
          value="250 ₽"
          className="my-3 font-semibold"
        />
        <button className="w-fit rounded-md bg-blue-600 px-4 py-3 text-white">
          Пополнить
        </button>
      </div>
    </article>
  );
}
