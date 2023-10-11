import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 475 128' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M470.527 84.2057C472.622 60.0994 370.03 31.5197 241.382 20.3711C112.733 9.22257 6.7444 19.7269 4.64927 43.8333C2.55415 67.9396 105.146 96.5193 233.795 107.668C362.443 118.816 468.432 108.312 470.527 84.2057Z'
      fill='url(#paint0_radial_9_19)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_19'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(258.13 65.6432) rotate(5.19247) scale(233.926 43.7984)'
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
const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
