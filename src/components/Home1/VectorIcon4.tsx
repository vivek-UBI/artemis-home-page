import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 427 84' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.3}
      d='M214.287 79.3069C331.69 77.015 426.537 58.4563 426.134 37.855C425.73 17.2536 330.229 2.41084 212.826 4.70275C95.4226 6.99467 0.575422 25.5533 0.97877 46.1547C1.38212 66.7561 96.8833 81.5989 214.287 79.3069Z'
      fill='url(#paint0_radial_9_14)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_14'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(211.546 40.8383) rotate(-1.1683) scale(212.806 36.9006)'
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
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
