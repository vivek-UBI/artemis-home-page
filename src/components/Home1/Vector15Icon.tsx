import { memo, SVGProps } from 'react';

const Vector15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 100 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H100' stroke='#203662' strokeWidth={2} />
  </svg>
);
const Memo = memo(Vector15Icon);
export { Memo as Vector15Icon };
