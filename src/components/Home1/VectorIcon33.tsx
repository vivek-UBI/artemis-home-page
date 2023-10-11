import { memo, SVGProps } from 'react';

const VectorIcon33 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 769 233' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.6}
      d='M763.984 135.583C766.708 81.8227 599.138 29.76 389.706 19.2974C180.275 8.83482 8.2889 43.9344 5.56534 97.6945C2.84179 151.455 170.412 203.518 379.844 213.98C589.275 224.443 761.261 189.343 763.984 135.583Z'
      fill='url(#paint0_radial_9_1592)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_1592'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(423.941 117.932) rotate(3.14793) scale(380.292 97.3513)'
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
const Memo = memo(VectorIcon33);
export { Memo as VectorIcon33 };
