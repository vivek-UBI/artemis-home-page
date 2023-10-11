import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 580 178' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M576.187 103.242C578.24 62.4864 451.906 23.0172 294.012 15.0855C136.118 7.15373 6.45428 33.763 4.40094 74.519C2.3476 115.275 128.682 154.744 286.576 162.676C444.47 170.608 574.134 143.998 576.187 103.242Z'
      fill='url(#paint0_radial_9_13)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_13'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(319.822 89.8615) rotate(3.16539) scale(286.714 73.8016)'
      >
        <stop stopColor='#C5203F' />
        <stop offset={0.08} stopColor='#A83358' stopOpacity={0.85} />
        <stop offset={0.34} stopColor='#4F71A7' stopOpacity={0.39} />
        <stop offset={0.46} stopColor='#2C8AC7' stopOpacity={0.2} />
        <stop offset={0.86} stopColor='#2C8AC7' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
