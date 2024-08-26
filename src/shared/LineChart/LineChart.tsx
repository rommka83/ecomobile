import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ILineChart } from './LineChart.types.ts';
import gsap from 'gsap';
import { Typography } from '../Typography/Typography.tsx';

export function LineChart({ params }: ILineChart) {
  const parent = useRef<HTMLDivElement>(null);
  const line1 = useRef<SVGRectElement>(null);
  const line2 = useRef<SVGRectElement>(null);
  const line3 = useRef<SVGRectElement>(null);

  const [lengthline1, setLengthline1] = useState(0);
  const [x1line2, setX1line2] = useState(0);
  const [x2line2, setX2line2] = useState(0);
  const [x1line3, setX1line3] = useState(0);
  const [x2line3, setX2line3] = useState(0);

  const GAP = 3;

  useLayoutEffect(() => {
    if (!parent.current) return;

    const widthParent =
      parent.current.getBoundingClientRect().width - GAP * (params.length + 1);

    const totalValue = params.reduce((acc, curentValue) => {
      return acc + curentValue.value;
    }, 0);

    const lengthline1 = (widthParent * params[0].value) / totalValue;
    const lengthline2 = (widthParent * params[1].value) / totalValue;
    const lengthline3 = (widthParent * params[2].value) / totalValue;

    setLengthline1(lengthline1);
    setX1line2(2 * GAP + lengthline1);
    setX2line2(lengthline2);
    setX1line3(3 * GAP + lengthline1 + lengthline2);
    setX2line3(lengthline3);
  }, [params, x1line2, x1line3, x2line2]);

  useEffect(() => {
    gsap.to(line1.current, {
      width: lengthline1,
      duration: 2,
    });

    gsap.to(line2.current, {
      x: x1line2,
      width: x2line2,
      duration: 2,
    });

    gsap.to(line3.current, {
      x: x1line3,
      width: x2line3,
      duration: 2,
    });
  }, [lengthline1, x1line2, x1line3, x2line2, x2line3]);

  return (
    <div ref={parent} className="flex flex-col">
      <svg height="50px" width="100%" className="">
        <rect
          ref={line1}
          x={GAP}
          y="40%"
          rx={GAP}
          ry={GAP}
          fill="#1d4ed8"
          className="h-2 w-0"
        />
        <rect
          ref={line2}
          y="40%"
          rx={GAP}
          ry={GAP}
          fill="#fbbf24"
          className="h-2 w-0"
        />
        <rect
          ref={line3}
          y="40%"
          rx={GAP}
          ry={GAP}
          fill="#38bdf8"
          className="h-2 w-0"
        />
      </svg>
      <ul className="flex items-center gap-4 text-sm">
        {params.map((item, num) => {
          return (
            <li className="flex items-center gap-1" key={item.name}>
              <div
                className={`h-3 w-3 rounded-full ${num === 0 && 'bg-blue-700'} ${num === 1 && 'bg-amber-400'} ${num === 2 && 'bg-sky-400'}`}
              ></div>
              <Typography value={item.name} />
              <Typography value={`${item.value} ₽`} color="secondary" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
