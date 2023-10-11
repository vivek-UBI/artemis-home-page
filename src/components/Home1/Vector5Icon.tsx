import { memo, SVGProps } from 'react';

const Vector5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1200 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1200' stroke='white' strokeWidth={5} />
  </svg>
);
const Memo = memo(Vector5Icon);
export { Memo as Vector5Icon };
