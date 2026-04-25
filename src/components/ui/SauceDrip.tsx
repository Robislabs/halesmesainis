export function SauceDrip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M0,0 L200,0 L200,12 C190,18 185,28 180,22 C170,12 160,30 150,20 C142,12 130,32 118,22 C108,14 98,28 88,20 C76,10 66,32 54,22 C44,14 32,28 20,18 C12,12 6,22 0,16 Z"
        fill="currentColor"
      />
    </svg>
  );
}
