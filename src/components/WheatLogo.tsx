const WheatLogo = ({ className = "", size = 80 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Inner arc (base) */}
      <path
        d="M 20 70 Q 50 80 80 70"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 25 75 Q 50 85 75 75"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Center wheat stalk */}
      <line x1="50" y1="65" x2="50" y2="25" stroke="currentColor" strokeWidth="2" />
      
      {/* Wheat grains - left side */}
      <ellipse cx="44" cy="30" rx="6" ry="10" fill="currentColor" transform="rotate(-15 44 30)" />
      <ellipse cx="42" cy="42" rx="6" ry="10" fill="currentColor" transform="rotate(-20 42 42)" />
      <ellipse cx="44" cy="54" rx="5" ry="8" fill="currentColor" transform="rotate(-15 44 54)" />
      
      {/* Wheat grains - right side */}
      <ellipse cx="56" cy="30" rx="6" ry="10" fill="currentColor" transform="rotate(15 56 30)" />
      <ellipse cx="58" cy="42" rx="6" ry="10" fill="currentColor" transform="rotate(20 58 42)" />
      <ellipse cx="56" cy="54" rx="5" ry="8" fill="currentColor" transform="rotate(15 56 54)" />
      
      {/* Top grain */}
      <ellipse cx="50" cy="22" rx="4" ry="8" fill="currentColor" />
    </svg>
  );
};

export default WheatLogo;
