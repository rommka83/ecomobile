import React, { useEffect, useRef, useState } from 'react';
import { IAccordeon } from './Accordeon.types.ts';
import { Typography } from '../Typography/index.ts';
import { SvgSprite } from '../SvgSprite/index.ts';
import gsap from 'gsap';

export function Accordeon({ title, amountChildren, children }: IAccordeon) {
  const minus = useRef(null);
  const minusSecond = useRef(null);
  const content = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      minus.current,
      {
        rotation: isOpen ? '90' : '0',
        transformOrigin: 'center',
      },
      { rotation: isOpen ? '180' : '90' },
    );
    gsap.fromTo(
      minusSecond.current,
      {
        rotation: isOpen ? '180' : '0',
        transformOrigin: 'center',
      },
      { rotation: isOpen ? '360' : '180' },
    );
    gsap.to(content.current, {
      height: isOpen ? 'auto' : 0,
      marginTop: isOpen ? 20 : 0,
    });
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="widgets relative flex cursor-pointer flex-col py-5"
      onClick={() => handleClick()}
    >
      <div className="px-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Typography value={title} size="title" className="font-semibold" />
            <Typography
              value={amountChildren ? amountChildren : ''}
              size="title"
              className="font-semibold"
              color="secondary"
            />
          </div>
          <div className="relative h-4 w-4">
            <SvgSprite
              ref={minus}
              name="minus"
              className="absolute left-0 top-1/2 h-1 w-4 -translate-y-1/2"
            />
            <SvgSprite
              ref={minusSecond}
              name="minus"
              className="absolute left-0 top-1/2 h-1 w-4 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
      <div ref={content} className={`h-0 w-full overflow-hidden`}>
        <div className={`w-full`}>{children}</div>
      </div>
    </div>
  );
}
