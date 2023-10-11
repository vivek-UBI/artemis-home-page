import { memo, SVGProps } from 'react';

const VectorIcon12 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 300 87' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.9}
      d='M297.711 52.2823C298.839 33.4915 233.565 14.2971 151.917 9.41056C70.2691 4.52401 3.16604 15.7957 2.03815 34.5865C0.91025 53.3773 66.1846 72.5716 147.832 77.4581C229.48 82.3447 296.583 71.0731 297.711 52.2823Z'
      fill='url(#paint0_radial_9_22)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_22'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(182.517 45.4634) rotate(3.69463) scale(148.275 34.0725)'
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
const Memo = memo(VectorIcon12);
export { Memo as VectorIcon12 };
