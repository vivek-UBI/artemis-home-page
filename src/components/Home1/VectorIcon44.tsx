import { memo, SVGProps } from 'react';

const VectorIcon44 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 464 175' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'multiply',
      }}
      opacity={0.1}
      d='M233.029 171.196C360.202 169.521 462.795 130.648 462.177 84.3709C461.559 38.0937 357.963 1.9367 230.79 3.61192C103.617 5.28714 1.02373 44.1603 1.64192 90.4374C2.26011 136.715 105.856 172.872 233.029 171.196Z'
      fill='url(#paint0_radial_9_1603)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1603'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(221.449 88.109) rotate(-0.943375) scale(229.87 83.9219)'
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
const Memo = memo(VectorIcon44);
export { Memo as VectorIcon44 };
