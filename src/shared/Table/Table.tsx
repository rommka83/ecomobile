import { ITable } from './Table.types.ts';
import { Typography } from '../Typography/index.ts';
import { nanoid } from 'nanoid';

export function Table({ tableBody, tableHeader, layoutFix }: ITable) {
  return (
    <table className={`w-full ${layoutFix ? 'table-fixed' : 'table-auto'}`}>
      <thead>
        <tr className="border-b border-t border-gray-300 bg-gray-100">
          {tableHeader.map((item, num) => (
            <th className={num === 0 ? 'py-3 pl-8' : ''} key={nanoid()}>
              <Typography
                value={item}
                color="secondary"
                className="flex justify-start"
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
}
