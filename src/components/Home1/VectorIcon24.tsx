import { memo, SVGProps } from 'react';

const VectorIcon24 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 580' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1440 0H0V580H1440V0Z' fill='url(#paint0_linear_9_68)' />
    <defs>
      <linearGradient id='paint0_linear_9_68' x1={1440} y1={289.998} x2={0} y2={289.998} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#203662' stopOpacity={0.6} />
        <stop offset={0.03} stopColor='#33476F' stopOpacity={0.64} />
        <stop offset={0.08} stopColor='#61708F' stopOpacity={0.72} />
        <stop offset={0.14} stopColor='#8994AA' stopOpacity={0.8} />
        <stop offset={0.19} stopColor='#ABB2C2' stopOpacity={0.86} />
        <stop offset={0.26} stopColor='#C6CBD5' stopOpacity={0.91} />
        <stop offset={0.32} stopColor='#DCDEE4' stopOpacity={0.95} />
        <stop offset={0.39} stopColor='#EBECEE' stopOpacity={0.98} />
        <stop offset={0.47} stopColor='#F4F4F5' stopOpacity={0.99} />
        <stop offset={0.58} stopColor='#F7F7F7' />
        <stop offset={0.87} stopColor='#FAFAFA' />
        <stop offset={1} stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon24);
export { Memo as VectorIcon24 };
