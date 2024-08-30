import { useEffect, useRef, useState } from 'react';
import { SvgSprite } from '../SvgSprite/SvgSprite.tsx';
import gsap from 'gsap';
import { ISelectCastum } from './SelectCastum.types.ts';
import { nanoid } from 'nanoid';

export function SelectCastum({ options, returnOption }: ISelectCastum) {
  const [open, setOpen] = useState(false);
  const inputBlock = useRef<HTMLDivElement>(null);
  const down = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [check, setCheck] = useState(options[0]);

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

  useEffect(() => {
    if (!returnOption) return;
    returnOption(check);
  }, [check, returnOption]);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative w-fit"
      ref={inputBlock}
    >
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

      <ul
        ref={list}
        className="absolute z-10 w-full rounded-md bg-white p-3 opacity-0"
      >
        {options.map((item) => (
          <li
            key={nanoid()}
            className="flex cursor-pointer items-center px-1 py-3 pl-3"
            onClick={() => setCheck(item)}
          >
            <span
              className={`font-medium ${check === item ? 'text-blue-700' : 'text-gray-600/50'}`}
            >
              {item}
            </span>
            {check === item && (
              <SvgSprite name="check" className="ml-auto h-6 w-6" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
