import { useMemo } from 'react';
import { ITypography } from './Typography.types.ts';

export function Typography({ value, color, size, className }: ITypography) {
  const colorTw = useMemo(() => {
    switch (color) {
      case 'primary':
        return 'text-zinc-800';
      case 'secondary':
        return 'text-gray-400';
      case 'danger':
        return 'text-red-500';
      case 'info':
        return 'text-blue-800';
      case 'white':
        return 'text-white';
      default:
        return 'text-zinc-950';
    }
  }, [color]);

  const sizeTw = useMemo(() => {
    switch (size) {
      case 'small':
        return 'text-xs';
      case 'medium':
        return 'text-sm';
      case 'title':
        return 'text-base';
      case 'page-title':
        return 'text-3xl';
      default:
        return 'text-base';
    }
  }, [size]);

  return (
    <span className={`${colorTw} ${sizeTw} ${className} flex text-left`}>
      {value}
    </span>
  );
}
