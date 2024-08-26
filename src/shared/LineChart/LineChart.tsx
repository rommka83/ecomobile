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
  const [startLine2, setStartLine2] = useState(0);
  const [lengthline2, setLengthline2] = useState(0);
  const [startLine3, setStartLine3] = useState(0);
  const [lengthline3, setLengthline3] = useState(0);

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
    setStartLine2(2 * GAP + lengthline1);
    setLengthline2(lengthline2);
    setStartLine3(3 * GAP + lengthline1 + lengthline2);
    setLengthline3(lengthline3);
  }, [params, startLine2, lengthline2]);

  useEffect(() => {
    gsap.to(line1.current, {
      width: lengthline1,
      duration: 1,
    });

    gsap.to(line2.current, {
      x: startLine2,
      width: lengthline2,
      duration: 1,
    });

    gsap.to(line3.current, {
      x: startLine3,
      width: lengthline3,
      duration: 1,
    });
  }, [lengthline1, lengthline2, lengthline3, startLine2, startLine3]);

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
