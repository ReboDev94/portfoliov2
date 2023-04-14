import { useMemo } from 'react';

type btnVariant = 'outline-danger';
interface Props
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'className'
  > {
  variant?: btnVariant;
}

const BASE_BUTTON_CLASSES = 'rounded-md focus:ring-2 focus:outline-none px-4 h-9 text-sm flex items-center';
const OUTLINE_DANGER_CLASSES = 'focus:ring-red-300  text-red-600 border border-red-600';
const TYPE_BTNS = {
  'outline-danger': OUTLINE_DANGER_CLASSES,
};

export const Button = ({ variant = 'outline-danger', ...props }: Props) => {
  const computedClass = useMemo(() => TYPE_BTNS[variant], [variant]);

  return (
    <button className={`${BASE_BUTTON_CLASSES} ${computedClass}`} {...props}>
      Contact Me
    </button>
  );
};
