import classNames from 'classnames';
import { useMemo } from 'react';

type btnVariant = 'outline-danger';
interface Props
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'className'
  > {
  variant?: btnVariant;
  block?: boolean
}
// flex items - center
const BASE_BUTTON_CLASSES = 'rounded-md focus:ring-2 focus:outline-none px-4 h-9 text-sm';
const BLOCK_BUTTON = 'w-full';
const OUTLINE_DANGER_CLASSES = 'focus:ring-red-300  text-red-600 border border-red-600';
const TYPE_BTNS = {
  'outline-danger': OUTLINE_DANGER_CLASSES,
};

export const Button = ({ variant = 'outline-danger', block = false, children, ...props }: Props) => {
  const computedClass = useMemo(() => TYPE_BTNS[variant], [variant]);

  return (
    <button className={classNames(`${BASE_BUTTON_CLASSES} ${computedClass}`, { [BLOCK_BUTTON]: block })} {...props}>
      {children}
    </button>
  );
};
