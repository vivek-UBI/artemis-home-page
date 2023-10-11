import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1713 1381' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1414.36 1250.15C734.791 1219.02 338.994 634.483 226.041 346.106L339.513 0L1712.16 792.5L1572.79 975.74L1414.36 1250.15Z'
      fill='url(#paint0_linear_9_2)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_9_2'
        x1={1025.84}
        y1={396.25}
        x2={686.325}
        y2={984.304}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#C5203F' stopOpacity={0.14} />
        <stop offset={1} stopColor='#203662' stopOpacity={0.13} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
