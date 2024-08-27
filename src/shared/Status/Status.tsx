import { IStatus } from './Status.types.ts';

export function Status({ name, type }: IStatus) {
  return (
    <div
      className={`w-fit rounded-md border px-2 text-xs ${type === 'positive' && 'border-green-600 bg-green-100/50 text-green-600'} ${type === 'negative' && 'border-red-600 bg-red-100/50 text-red-600'} ${type === 'disabled' && 'border-gray-600 bg-gray-100/50 text-gray-600'}`}
    >
      {name}
    </div>
  );
}
