import { Typography } from '../../shared/Typography/Typography.tsx';
import { IFooter } from './Footer.types.ts';

export function Footer({}: IFooter) {
  return (
    <footer className="flex flex-[0_0_auto] justify-between bg-gray-100 px-10 py-6">
      <div className="flex gap-1">
        <Typography value="2024 ©" color="secondary" />
        <Typography value="EkoMobile" color="info" />
      </div>
      <div className="flex gap-1">
        <Typography value="E-mail:" color="secondary" />
        <a href="mailto:info@ekomobile.ru" className="text-blue-800">
          info@ekomobile.ru
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <Typography
          value="+7 (495) 011-05-22 или 0522 (с мобильного)"
          color="secondary"
        />
        <Typography value="+7 (800) 777-05-22" color="secondary" />
      </div>
    </footer>
  );
}
