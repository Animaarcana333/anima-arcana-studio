import emblemSrc from "@/assets/emblem.png";

type Props = { className?: string; size?: number };

export function Emblem({ className, size = 48 }: Props) {
  return (
    <img
      src={emblemSrc}
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-burgundy/70 ${className}`}>
      <span className="h-px w-16 bg-burgundy/30 sm:w-24" />
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="1.6" fill="currentColor" />
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <span className="h-px w-16 bg-burgundy/30 sm:w-24" />
    </div>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2 L13 10 L21 12 L13 14 L12 22 L11 14 L3 12 L11 10 Z" />
    </svg>
  );
}
