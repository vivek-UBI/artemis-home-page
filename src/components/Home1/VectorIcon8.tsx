import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 474 128' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M240.572 107.617C369.221 96.4682 471.813 67.8884 469.718 43.7821C467.623 19.6757 361.634 9.17137 232.985 20.3199C104.336 31.4685 1.74458 60.0482 3.8397 84.1545C5.93483 108.261 111.924 118.765 240.572 107.617Z'
      fill='url(#paint0_radial_9_18)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_18'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(217.337 65.5054) rotate(174.808) scale(233.927 43.7984)'
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
const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
