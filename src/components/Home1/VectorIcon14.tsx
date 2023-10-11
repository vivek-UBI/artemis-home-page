import { memo, SVGProps } from 'react';

const VectorIcon14 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 350 132' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'multiply',
      }}
      opacity={0.1}
      d='M175.771 129.498C271.649 128.228 348.996 98.758 348.53 63.6749C348.064 28.5918 269.961 1.18087 174.083 2.45087C78.2048 3.72087 0.857924 33.1909 1.32399 68.274C1.79006 103.357 79.8926 130.768 175.771 129.498Z'
      fill='url(#paint0_radial_9_24)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_24'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(167.041 66.5088) rotate(-0.948617) scale(173.304 63.6218)'
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
const Memo = memo(VectorIcon14);
export { Memo as VectorIcon14 };
