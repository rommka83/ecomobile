import { useEffect, useRef } from 'react';
import { IDonutChart } from './DonutChart.types.ts';
import gsap from 'gsap';

// При радиусе 160 длина окружности составляет 1005px

export function DonutChart({ title, total, value, color }: IDonutChart) {
  const circle = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!total || !value) {
      gsap.to(circle.current, {
        stroke: color ? color : '#1d4ed8',
        strokeDasharray: `1005 0`,
      });
      return;
    }

    const percent = value / total;
    const percentageInCircle = 1005 * percent;
    const dash = 1005 - percentageInCircle;

    gsap.to(circle.current, {
      stroke: color ? color : '#1d4ed8',
      strokeDasharray: `${percentageInCircle} ${dash}`,
      duration: 1.5,
    });
  }, [total, value, color]);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
      >
        <text y="50%" transform="translate(0, 2)">
          {title && (
            <tspan x="50%" y="47%" textAnchor="middle" className="text-4xl">
              {title}
            </tspan>
          )}
          {total && value ? (
            <tspan
              x="50%"
              y="57%"
              textAnchor="middle"
              fill="grey"
              className="text-3xl font-light"
            >
              {value + ' ' + 'из' + ' ' + total}
            </tspan>
          ) : (
            <tspan
              x="50%"
              y="57%"
              textAnchor="middle"
              fill="grey"
              className="text-4xl font-light"
            >
              ∞
            </tspan>
          )}
        </text>
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="#EFF6FF"
          strokeWidth="25"
        />
        <circle
          ref={circle}
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="transparent"
          strokeWidth="25"
          strokeDashoffset={250}
          strokeDasharray="0 1005"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
