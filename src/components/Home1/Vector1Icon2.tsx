import { memo, SVGProps } from 'react';

const Vector1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 0.25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1440' stroke='#203662' strokeWidth={0.25} />
  </svg>
);
const Memo = memo(Vector1Icon2);
export { Memo as Vector1Icon2 };
