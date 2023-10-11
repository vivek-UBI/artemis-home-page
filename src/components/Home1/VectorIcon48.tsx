import { memo, SVGProps } from 'react';

const VectorIcon48 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1937 747' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'soft-light',
      }}
      opacity={0.2}
      d='M1936.3 -5.59851e-05L0.235046 -5.59851e-05V746.351H1936.3V-5.59851e-05Z'
      fill='url(#paint0_radial_9_1618)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1618'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(924.763 398.812) rotate(-91.2185) scale(482.854 1870.6)'
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
const Memo = memo(VectorIcon48);
export { Memo as VectorIcon48 };
