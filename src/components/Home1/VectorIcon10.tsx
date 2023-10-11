import { memo, SVGProps } from 'react';

const VectorIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 334 111' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M328.576 79.9079C331.133 62.8436 260.789 38.1902 171.457 24.843C82.1262 11.4959 7.63609 14.5094 5.07904 31.5738C2.52199 48.6381 72.8663 73.2914 162.198 86.6385C251.529 99.9856 326.019 96.9723 328.576 79.9079Z'
      fill='url(#paint0_radial_9_20)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_20'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(220.003 61.2561) rotate(8.9172) scale(163.709 30.9291)'
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
const Memo = memo(VectorIcon10);
export { Memo as VectorIcon10 };
