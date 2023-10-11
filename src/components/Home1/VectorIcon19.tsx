import { memo, SVGProps } from 'react';

const VectorIcon19 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 984 378' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'color-dodge',
      }}
      opacity={0.75}
      d='M735.68 353.668L290.011 376.522C141.996 384.115 12.6691 311.206 1.16003 213.701C-10.36 116.185 100.291 30.9897 248.295 23.3971L693.964 0.543162C841.967 -7.0494 971.294 65.8479 982.814 163.364C994.334 260.88 883.684 346.076 735.68 353.668Z'
      fill='url(#paint0_radial_9_29)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_29'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(417.35 225.758) rotate(-7.49919) scale(410.916 138.933)'
      >
        <stop stopColor='#C6CAC6' />
        <stop offset={0.12} stopColor='#C1C8C6' stopOpacity={0.97} />
        <stop offset={0.26} stopColor='#B6C5C6' stopOpacity={0.9} />
        <stop offset={0.41} stopColor='#A2C0C6' stopOpacity={0.78} />
        <stop offset={0.58} stopColor='#87B8C6' stopOpacity={0.6} />
        <stop offset={0.75} stopColor='#65AEC6' stopOpacity={0.38} />
        <stop offset={0.93} stopColor='#3BA3C6' stopOpacity={0.12} />
        <stop offset={1} stopColor='#299EC7' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon19);
export { Memo as VectorIcon19 };
