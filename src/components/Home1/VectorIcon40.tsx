import { memo, SVGProps } from 'react';

const VectorIcon40 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 442 146' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M435.827 104.632C439.218 82.1226 345.913 49.6029 227.424 31.9971C108.935 14.3913 10.1309 18.3663 6.73919 40.8754C3.34751 63.3846 96.6525 95.9041 215.142 113.51C333.631 131.116 432.435 127.141 435.827 104.632Z'
      fill='url(#paint0_radial_9_1599)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1599'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(291.815 80.0286) rotate(8.86871) scale(217.116 40.8031)'
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
const Memo = memo(VectorIcon40);
export { Memo as VectorIcon40 };
