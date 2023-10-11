import { memo, SVGProps } from 'react';

const VectorIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 300 86' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.9}
      d='M150.983 81.3707C232.891 78.9004 298.772 59.7628 298.133 38.6257C297.493 17.4886 230.576 2.35609 148.668 4.82638C66.7603 7.29666 0.879344 26.4342 1.51869 47.5714C2.15803 68.7085 69.0756 83.841 150.983 81.3707Z'
      fill='url(#paint0_radial_9_21)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_21'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(129.607 45.0166) rotate(-1.90722) scale(148.275 38.4089)'
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
const Memo = memo(VectorIcon11);
export { Memo as VectorIcon11 };
