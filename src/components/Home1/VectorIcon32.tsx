import { memo, SVGProps } from 'react';

const VectorIcon32 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 764 154' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M383.202 147.199C593.215 143.886 762.963 109.785 762.343 71.0316C761.723 32.2783 590.971 3.54793 380.957 6.86049C170.943 10.173 1.19623 44.2741 1.81611 83.0274C2.43598 121.781 173.188 150.511 383.202 147.199Z'
      fill='url(#paint0_radial_9_1591)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1591'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(374.58 78.9171) rotate(-0.943375) scale(380.332 70.5004)'
      >
        <stop stopColor='#2C8AC7' />
        <stop offset={0.01} stopColor='#2C8AC7' stopOpacity={0.97} />
        <stop offset={0.2} stopColor='#2C8AC7' stopOpacity={0.42} />
        <stop offset={0.28} stopColor='#2C8AC7' stopOpacity={0.2} />
        <stop offset={0.33} stopColor='#2C8AC7' stopOpacity={0.18} />
        <stop offset={0.65} stopColor='#2C8AC7' stopOpacity={0.05} />
        <stop offset={0.84} stopColor='#2C8AC7' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon32);
export { Memo as VectorIcon32 };
