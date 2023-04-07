import { useMemo } from 'react';

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'className'
  > {
  variant?: 'outline-danger';
}

const BASE_BUTTON_cLASS = 'rounded-md focus:ring-2 focus:outline-none px-4 h-9 text-sm flex items-center';
const TYPE_BTNS = {
  'outline-danger': 'focus:ring-red-300  text-red-600 border border-red-600',
};

export const Button = ({ variant = 'outline-danger', ...props }: Props) => {
  const computedClass = useMemo(() => TYPE_BTNS[variant], [variant]);

  return (
    <button className={`${BASE_BUTTON_cLASS} ${computedClass}`} {...props}>
      Contact Me
    </button>
  );
};
