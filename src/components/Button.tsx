import classNames from 'classnames';
import { useMemo } from 'react';

type btnVariant = 'outline-primary' | 'primary';
interface Props
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'className'
  > {
  variant?: btnVariant;
  block?: boolean;
}
const BASE_BUTTON_CLASSES = 'rounded-md focus:ring-2 focus:outline-none px-4 h-9 text-sm';
const BLOCK_BUTTON = 'w-full';
const PRIMARY_CLASSES = 'focus:ring-light-black/70  border border-light-black/70 bg-light-black text-light';
const OUTLINE_PRIMARY_CLASSES = 'focus:ring-light-black/70  border border-light-black/70  text-light-black';
const TYPE_BTNS = {
  primary: PRIMARY_CLASSES,
  'outline-primary': OUTLINE_PRIMARY_CLASSES,
};

export const Button = ({ variant = 'primary', block = false, children, ...props }: Props) => {
  const computedClass = useMemo(() => TYPE_BTNS[variant], [variant]);

  return (
    <button
      className={classNames(`${BASE_BUTTON_CLASSES} ${computedClass}`, { [BLOCK_BUTTON]: block })}
      {...props}
    >
      {children}
    </button>
  );
};
