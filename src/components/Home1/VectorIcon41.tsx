import { memo, SVGProps } from 'react';

const VectorIcon41 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 397 113' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.9}
      d='M200.153 106.884C308.795 103.626 396.18 78.3817 395.332 50.5003C394.484 22.6188 305.724 2.65801 197.082 5.91649C88.4389 9.17498 1.05416 34.4189 1.90219 62.3003C2.75022 90.1817 91.5099 110.143 200.153 106.884Z'
      fill='url(#paint0_radial_9_1600)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1600'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(171.798 58.9303) rotate(-1.89669) scale(196.672 50.6644)'
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
const Memo = memo(VectorIcon41);
export { Memo as VectorIcon41 };
