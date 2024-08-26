import { SelectCastum } from '../../shared/SelectCastum/SelectCastum.tsx';
import { SvgSprite } from '../../shared/SvgSprite/SvgSprite.tsx';

export function Header() {
  return (
    <header className="flex items-center gap-3 bg-gray-200 px-10 py-3">
      <span className="">Мои номера:</span>
      <SelectCastum />
      <button className="rounded-md bg-white p-3">
        <SvgSprite className="h-6 w-6" name="public-services" />
      </button>
      <button className="rounded-md bg-white p-3">
        <SvgSprite className="h-6 w-6" name="bell" />
      </button>
    </header>
  );
}
