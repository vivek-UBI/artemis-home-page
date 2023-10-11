import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1466 566' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1465.36 0H0.163635V565.815H1465.36V0Z' fill='url(#paint0_radial_9_5)' />
    <defs>
      <radialGradient
        id='paint0_radial_9_5'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(711.28 294.798) rotate(-0.818806) scale(1281.83 384.953)'
      >
        <stop stopColor='#FEFFFF' />
        <stop offset={0.0001} stopColor='#F8FDFE' />
        <stop offset={0.315625} stopColor='#F5F5F5' stopOpacity={0.17} />
        <stop offset={0.471875} stopColor='#F0F0F0' />
        <stop offset={0.617708} stopColor='#ECECEC' />
        <stop offset={0.867708} stopColor='#FFDBE2' stopOpacity={0.33} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
