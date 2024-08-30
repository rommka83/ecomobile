import { useLocation } from 'react-router-dom';
import { InformMessage } from '../../shared/InformMessage/index.ts';
import { SelectCastum } from '../../shared/SelectCastum/index.ts';
import { SvgSprite } from '../../shared/SvgSprite/index.ts';

const optionsMoc = [
  '+79999999997',
  '+79999999991',
  '+79999999992',
  '+79999999993',
  '+79999999994',
  '+79999999995',
  '+79999999996',
];

export function Header() {
  const location = useLocation();

  return (
    <header className="flex flex-col gap-3 bg-gray-200 py-10">
      <div className="px-10">
        <div className="flex items-center gap-3">
          <span className="">Мои номера:</span>
          <SelectCastum options={optionsMoc} />
          <button className="rounded-md bg-white p-2">
            <SvgSprite className="h-6 w-6" name="public-services" />
          </button>
          <button className="rounded-md bg-white p-2">
            <SvgSprite className="h-6 w-6" name="bell" />
          </button>
        </div>
      </div>
      {location.pathname === '/' && <InformMessage />}
    </header>
  );
}
