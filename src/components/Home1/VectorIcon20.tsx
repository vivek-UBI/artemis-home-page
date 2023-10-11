import { memo, SVGProps } from 'react';

const VectorIcon20 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1461 566' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'soft-light',
      }}
      opacity={0.2}
      d='M1460.09 0H0.454514V565.815H1460.09V0Z'
      fill='url(#paint0_radial_9_47)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_47'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(697.473 302.342) rotate(-91.2118) scale(366.054 1410.28)'
      >
        <stop stopColor='white' />
        <stop offset={0.13} stopColor='#EFF0EF' />
        <stop offset={0.5} stopColor='#C6CAC6' />
        <stop offset={0.6} stopColor='#A3A6A5' />
        <stop offset={0.71} stopColor='#818385' />
        <stop offset={0.82} stopColor='#686A6E' />
        <stop offset={0.92} stopColor='#595B5F' />
        <stop offset={1} stopColor='#54565B' />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon20);
export { Memo as VectorIcon20 };
