import { memo, SVGProps } from 'react';

const Ellipse10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={23} cy={23} r={23} fill='white' stroke='#203662' strokeWidth={0.5} />
  </svg>
);
const Memo = memo(Ellipse10Icon);
export { Memo as Ellipse10Icon };
