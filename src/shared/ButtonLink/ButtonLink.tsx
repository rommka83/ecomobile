import React from 'react';
import { IButtonLink } from './ButtonLink.types.ts';
import { Link } from 'react-router-dom';

export function ButtonLink({ link, name }: IButtonLink) {
  return (
    <button className="w-fit border-b border-dashed border-blue-800">
      <Link to={link} className="text-xs text-blue-800">
        {name}
      </Link>
    </button>
  );
}
