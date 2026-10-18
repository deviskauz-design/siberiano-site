export function PawIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="6.5" cy="9" rx="1.7" ry="2.3" />
      <ellipse cx="10" cy="6" rx="1.6" ry="2.2" />
      <ellipse cx="14" cy="6" rx="1.6" ry="2.2" />
      <ellipse cx="17.5" cy="9" rx="1.7" ry="2.3" />
      <path d="M12 11c-3 0-5.5 2.4-5.5 5 0 1.7 1.4 3 3.2 3 1 0 1.6-.4 2.3-.4s1.3.4 2.3.4c1.8 0 3.2-1.3 3.2-3 0-2.6-2.5-5-5.5-5z" />
    </svg>
  );
}

export function CatSilhouette({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <linearGradient id="catGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B58A4F" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4A3522" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        fill="url(#catGrad)"
        d="M55 50 L70 30 L80 55 Q100 48 120 55 L130 30 L145 50 Q170 70 165 110 Q165 150 130 165 Q100 175 70 165 Q35 150 35 110 Q30 70 55 50 Z M75 85 Q80 82 85 85 M115 85 Q120 82 125 85 M95 105 Q100 108 105 105"
        stroke="#4A3522"
        strokeOpacity="0.3"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function LeafDivider({ className = "w-24 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 30" className={className} aria-hidden>
      <line x1="0" y1="15" x2="80" y2="15" stroke="#B58A4F" strokeOpacity="0.5" />
      <path
        d="M100 15 Q92 5 100 0 Q108 5 100 15 Q92 25 100 30 Q108 25 100 15 Z"
        fill="#B58A4F"
        fillOpacity="0.7"
      />
      <line x1="120" y1="15" x2="200" y2="15" stroke="#B58A4F" strokeOpacity="0.5" />
    </svg>
  );
}
