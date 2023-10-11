import { memo, SVGProps } from 'react';

const VectorIcon15 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 466 135' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'multiply',
      }}
      opacity={0.1}
      d='M233.977 130.65C361.975 128.753 465.315 98.7715 464.793 63.6831C464.272 28.5948 360.087 1.68727 232.089 3.58353C104.092 5.47978 0.752115 35.4617 1.27346 70.5501C1.7948 105.638 105.98 132.546 233.977 130.65Z'
      fill='url(#paint0_radial_9_25)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_25'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(226.922 67.6053) rotate(-0.948617) scale(231.921 63.6218)'
      >
        <stop stopColor='#C6CAC6' />
        <stop offset={0.11} stopColor='#A6B7B6' stopOpacity={0.84} />
        <stop offset={0.44} stopColor='#4C8189' stopOpacity={0.38} />
        <stop offset={0.59} stopColor='#286C78' stopOpacity={0.2} />
        <stop offset={0.8} stopColor='#286C78' stopOpacity={0.08} />
        <stop offset={1} stopColor='#286C78' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon15);
export { Memo as VectorIcon15 };
