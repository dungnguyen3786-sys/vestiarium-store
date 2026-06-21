import { COLORS } from '@/lib/data';

interface Props {
  colorKey: string;
  className?: string;
}

export default function ChasubleSvg({ colorKey, className }: Props) {
  const hex = COLORS[colorKey]?.hex ?? '#D8C9A0';
  return (
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M100,10 C60,10 32,38 21,90 L9,222 C8,231 18,236 28,233 L100,212 L172,233 C182,236 192,231 191,222 L179,90 C168,38 140,10 100,10 Z"
        fill={hex} stroke="#B98D3E" strokeWidth="3"
      />
      <circle cx="100" cy="34" r="17" fill="none" stroke="#B98D3E" strokeWidth="3" />
      <rect x="86" y="40" width="28" height="160" rx="3" fill="#B98D3E" opacity=".92" />
      <rect x="97" y="62" width="6" height="92" fill="#1B1420" opacity=".75" />
      <rect x="83" y="86" width="34" height="6" fill="#1B1420" opacity=".75" />
    </svg>
  );
}
