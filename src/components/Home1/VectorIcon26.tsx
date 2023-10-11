import { memo, SVGProps } from 'react';

const VectorIcon26 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 384 402' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'screen',
      }}
      d='M192.227 401.383C298.068 401.383 383.869 311.53 383.869 200.691C383.869 89.8525 298.068 -7.94836e-05 192.227 -7.94836e-05C86.3859 -7.94836e-05 0.584923 89.8525 0.584923 200.691C0.584923 311.53 86.3859 401.383 192.227 401.383Z'
      fill='url(#paint0_linear_9_1546)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_9_1546'
        x1={312.002}
        y1={75.2603}
        x2={63.6175}
        y2={312.445}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset={0.5} stopColor='#666666' />
        <stop offset={1} stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon26);
export { Memo as VectorIcon26 };
