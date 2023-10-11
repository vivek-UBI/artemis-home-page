import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 430 121' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M425.556 80.3722C427.652 58.0297 335.108 31.1048 218.853 20.2337C102.599 9.36264 6.6574 18.662 4.56204 41.0045C2.46667 63.347 95.0108 90.2719 211.265 101.143C327.52 112.014 423.461 102.715 425.556 80.3722Z'
      fill='url(#paint0_radial_9_16)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_16'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(264.306 66.401) rotate(5.62185) scale(211.547 40.722)'
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
const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
