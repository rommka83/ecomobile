import { useLocation } from 'react-router-dom';
import { InformMessage } from '../../shared/InformMessage/index.ts';
import { SelectCastum } from '../../shared/SelectCastum/index.ts';
import { SvgSprite } from '../../shared/SvgSprite/index.ts';

export function Header() {
  const location = useLocation();

  return (
    <header className="flex flex-col gap-3 bg-gray-200 py-3">
      <div className="px-10">
        <div className="flex items-center gap-3">
          <span className="">Мои номера:</span>
          <SelectCastum />
          <button className="rounded-md bg-white p-3">
            <SvgSprite className="h-6 w-6" name="public-services" />
          </button>
          <button className="rounded-md bg-white p-3">
            <SvgSprite className="h-6 w-6" name="bell" />
          </button>
        </div>
      </div>
      {location.pathname === '/' && <InformMessage />}
    </header>
  );
}
