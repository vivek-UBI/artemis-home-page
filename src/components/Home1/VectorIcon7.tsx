import { memo, SVGProps } from 'react';

const VectorIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 430 118' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M218.712 99.2886C335.185 89.4406 428.069 63.3501 426.175 41.0139C424.281 18.6776 328.325 8.55393 211.853 18.4019C95.3799 28.25 2.49555 54.3405 4.38964 76.6767C6.28373 99.013 102.239 109.137 218.712 99.2886Z'
      fill='url(#paint0_radial_9_17)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_17'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(197.779 60.7863) rotate(-5.08263) scale(211.53 40.7184)'
      >
        <stop stopColor='#C5203F' />
        <stop offset={0.28} stopColor='#2C8AC7' stopOpacity={0.2} />
        <stop offset={0.33} stopColor='#2C8AC7' stopOpacity={0.18} />
        <stop offset={0.65} stopColor='#2C8AC7' stopOpacity={0.05} />
        <stop offset={0.84} stopColor='#2C8AC7' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon7);
export { Memo as VectorIcon7 };
