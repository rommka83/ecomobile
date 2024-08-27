import { useEffect, useRef, useState } from 'react';
import { SvgSprite } from '../SvgSprite/SvgSprite.tsx';
import gsap from 'gsap';

const options = [
  { group: 'one', value: '+79999999997' },
  { group: 'one', value: '+79999999991' },
  { group: 'one', value: '+79999999992' },
  { group: 'one', value: '+79999999993' },
  { group: 'second', value: '+79999999994' },
  { group: 'second', value: '+79999999995' },
  { group: 'second', value: '+79999999996' },
];

export function SelectCastum() {
  const [open, setOpen] = useState(false);
  const inputBlock = useRef<HTMLDivElement>(null);
  const down = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [check, setCheck] = useState(options[0].value);

  useEffect(() => {
    if (!open) {
      gsap.to(down.current, {
        rotation: '0',
      });
      gsap.to(list.current, {
        opacity: '0',
        pointerEvents: 'none',
        top: '50%',
      });
    } else {
      {
        gsap.to(down.current, {
          rotation: '+=180',
        });
        gsap.to(list.current, {
          opacity: '1',
          pointerEvents: 'auto',
          top: '110%',
        });
      }
    }

    document.addEventListener('click', (event) => {
      if (event.target !== inputBlock.current) {
        setOpen(false);
      }
    });

    return () => {
      document.removeEventListener('click', () => {});
    };
  }, [open]);

  return (
    <div onClick={() => setOpen(!open)} className="relative" ref={inputBlock}>
      <div className="pointer-events-none flex w-fit items-center rounded-md bg-white px-3 py-2">
        <input
          readOnly
          type="text"
          className="bg-white font-medium"
          value={check}
        />
        <div className="" ref={down}>
          <SvgSprite name="down" className="h-5 w-5" />
        </div>
      </div>

      <ul ref={list} className="absolute rounded-md bg-white p-3 opacity-0">
        {options.map(({ group, value }) => (
          <li
            key={group + value}
            className="flex cursor-pointer items-center gap-16 py-3"
            onClick={() => setCheck(value)}
          >
            <span
              className={`font-medium ${check === value ? 'text-blue-700' : 'text-gray-600/50'}`}
            >
              {value}
            </span>
            {check === value && <SvgSprite name="check" className="h-6 w-6" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
