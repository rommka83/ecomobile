import { IButtonLink } from './ButtonLink.types.ts';
import { Link } from 'react-router-dom';
import { Typography } from '../Typography/Typography.tsx';

export function ButtonLink({ link, name }: IButtonLink) {
  return (
    <button className="w-fit border-b border-dashed border-blue-800">
      <Link to={link}>
        <Typography value={name} color="info" />
      </Link>
    </button>
  );
}
