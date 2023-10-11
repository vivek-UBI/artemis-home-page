import { memo, SVGProps } from 'react';

const VectorIcon13 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 527 138' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      style={{
        mixBlendMode: 'overlay',
      }}
      opacity={0.9}
      d='M523.968 79.5431C525.226 47.3029 409.465 16.6263 265.41 11.0248C121.355 5.42343 3.55553 27.0184 2.29825 59.2586C1.04097 91.4988 116.802 122.175 260.857 127.777C404.912 133.378 522.711 111.783 523.968 79.5431Z'
      fill='url(#paint0_radial_9_23)'
    />
    <defs>
      <radialGradient
        id='paint0_radial_9_23'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(292.341 74.9966) rotate(2.39651) scale(260.961 58.8764)'
      >
        <stop stopColor='#C6CAC6' />
        <stop offset={0.25} stopColor='#9BB8C6' stopOpacity={0.73} />
        <stop offset={0.81} stopColor='#328CC6' stopOpacity={0.04} />
        <stop offset={0.84} stopColor='#2C8AC7' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(VectorIcon13);
export { Memo as VectorIcon13 };
