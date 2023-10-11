import { memo, SVGProps } from 'react';

const VectorIcon45 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 619 177' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'multiply',
      }}
      opacity={0.1}
      d='M310.864 172.159C480.64 169.658 617.711 130.11 617.019 83.8255C616.328 37.5414 478.136 2.04848 308.36 4.54978C138.584 7.05108 1.5132 46.5994 2.20471 92.8835C2.89623 139.168 141.088 174.661 310.864 172.159Z'
      fill='url(#paint0_radial_9_1604)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1604'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(301.506 88.9992) rotate(-0.943375) scale(307.62 83.9219)'
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
const Memo = memo(VectorIcon45);
export { Memo as VectorIcon45 };
