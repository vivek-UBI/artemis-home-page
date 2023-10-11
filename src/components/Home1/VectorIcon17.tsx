import { memo, SVGProps } from 'react';

const VectorIcon17 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 825 242' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'color-dodge',
      }}
      opacity={0.5}
      d='M412.607 241.799C639.946 241.799 824.24 187.864 824.24 121.331C824.24 54.7987 639.946 0.863373 412.607 0.863373C185.269 0.863373 0.974487 54.7987 0.974487 121.331C0.974487 187.864 185.269 241.799 412.607 241.799Z'
      fill='url(#paint0_radial_9_27)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_27'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(409.862 121.022) scale(410.958 120.177)'
      >
        <stop stopColor='#C6CAC6' />
        <stop offset={0.12} stopColor='#B6B9B6' />
        <stop offset={0.35} stopColor='#8C8F8C' />
        <stop offset={0.67} stopColor='#494B49' />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon17);
export { Memo as VectorIcon17 };
