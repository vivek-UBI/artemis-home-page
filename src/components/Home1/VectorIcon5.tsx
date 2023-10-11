import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 245 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      d='M122.861 45.297C189.81 43.9901 243.896 33.4075 243.666 21.6602C243.436 9.91293 188.977 1.44935 122.029 2.7563C55.0804 4.06324 0.994555 14.6458 1.22455 26.3931C1.45455 38.1404 55.9133 46.604 122.861 45.297Z'
      fill='url(#paint0_radial_9_15)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_15'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(120.708 22.6877) rotate(-1.1683) scale(121.351 21.0423)'
      >
        <stop stopColor='#C5203F' />
        <stop offset={0.05} stopColor='#A83358' stopOpacity={0.85} />
        <stop offset={0.21} stopColor='#4F71A7' stopOpacity={0.39} />
        <stop offset={0.28} stopColor='#2C8AC7' stopOpacity={0.2} />
        <stop offset={0.33} stopColor='#2C8AC7' stopOpacity={0.18} />
        <stop offset={0.65} stopColor='#2C8AC7' stopOpacity={0.05} />
        <stop offset={0.84} stopColor='#2C8AC7' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
