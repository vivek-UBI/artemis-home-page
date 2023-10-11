import { memo, SVGProps } from 'react';

const VectorIcon18 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 813 175' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'color-dodge',
      }}
      opacity={0.2}
      d='M406.444 174.2C630.721 174.2 812.534 135.364 812.534 87.4572C812.534 39.5505 630.721 0.714569 406.444 0.714569C182.166 0.714569 0.352661 39.5505 0.352661 87.4572C0.352661 135.364 182.166 174.2 406.444 174.2Z'
      fill='url(#paint0_radial_9_28)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_28'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(411.66 87.1164) scale(407.222 86.6193)'
      >
        <stop stopColor='#868686' />
        <stop offset={0.17} stopColor='#757575' />
        <stop offset={0.5} stopColor='#4B4B4B' />
        <stop offset={0.95} stopColor='#080808' />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon18);
export { Memo as VectorIcon18 };
