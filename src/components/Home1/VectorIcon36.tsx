import { memo, SVGProps } from 'react';

const VectorIcon36 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 569 160' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M563.568 105.941C566.347 76.4697 443.596 40.9538 289.396 26.614C135.196 12.2743 7.9386 24.5409 5.1593 54.0123C2.38 83.4836 125.131 119 279.331 133.339C433.531 147.679 560.788 135.412 563.568 105.941Z'
      fill='url(#paint0_radial_9_1595)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1595'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(349.685 87.5121) rotate(5.59098) scale(280.582 53.7181)'
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
const Memo = memo(VectorIcon36);
export { Memo as VectorIcon36 };
