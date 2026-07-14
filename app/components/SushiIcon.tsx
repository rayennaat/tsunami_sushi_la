type SushiIconProps = {
  className?: string;
};

export function SushiIcon({ className }: SushiIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 13.5c0-3 3.1-5.5 7-5.5s7 2.5 7 5.5" />
      <path d="M5 13.5c0 2.5 3.1 4.5 7 4.5s7-2 7-4.5" />
      <path d="M8 12.5c1.1-.9 2.5-1.4 4-1.4s2.9.5 4 1.4" />
      <path d="M9.5 16.8v-3.5" />
      <path d="M14.5 16.8v-3.5" />
    </svg>
  );
}
