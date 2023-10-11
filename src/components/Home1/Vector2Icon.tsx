import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1.5 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L0 21' stroke='#C11E3D' strokeWidth={1.5} />
  </svg>
);
const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
