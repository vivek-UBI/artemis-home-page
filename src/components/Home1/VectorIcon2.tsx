import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 576 117' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M289.296 111.759C447.629 109.248 575.605 83.3956 575.137 54.0164C574.67 24.6373 445.937 2.85653 287.604 5.36781C129.271 7.87908 1.29505 33.7314 1.76238 63.1106C2.22972 92.4897 130.963 114.27 289.296 111.759Z'
      fill='url(#paint0_radial_9_12)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_12'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(282.796 59.9945) rotate(-0.948617) scale(286.74 53.4469)'
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
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
