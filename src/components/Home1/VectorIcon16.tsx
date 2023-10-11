import { memo, SVGProps } from 'react';

const VectorIcon16 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 488 168' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'multiply',
      }}
      opacity={0.2}
      d='M248.267 153.537C380.497 145.669 485.837 108.235 483.551 69.9263C481.265 31.6172 372.218 6.93949 239.989 14.8071C107.759 22.6746 2.41935 60.1082 4.70536 98.4173C6.99138 136.726 116.038 161.404 248.267 153.537Z'
      fill='url(#paint0_radial_9_26)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_26'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(214.591 88.234) rotate(-3.86438) scale(239.565 69.9844)'
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
const Memo = memo(VectorIcon16);
export { Memo as VectorIcon16 };
