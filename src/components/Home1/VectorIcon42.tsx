import { memo, SVGProps } from 'react';

const VectorIcon42 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 399 114' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.9}
      d='M395.469 68.4089C396.966 43.6224 310.385 18.3037 202.087 11.858C93.7894 5.41226 4.78373 20.2804 3.28769 45.0669C1.79164 69.8533 88.3717 95.172 196.67 101.618C304.968 108.063 393.973 93.1954 395.469 68.4089Z'
      fill='url(#paint0_radial_9_1601)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1601'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(242.675 59.4143) rotate(3.67426) scale(196.668 44.9452)'
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
const Memo = memo(VectorIcon42);
export { Memo as VectorIcon42 };
