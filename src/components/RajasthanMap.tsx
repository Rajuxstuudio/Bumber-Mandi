import WheatLogo from "./WheatLogo";

interface ConnectionPoint {
  label: string;
  x: number;
  y: number;
}

const connectionPoints: ConnectionPoint[] = [
  { label: "Warehouse", x: 72, y: 18 },
  { label: "e-mandi", x: 78, y: 38 },
  { label: "Sellers", x: 70, y: 68 },
  { label: "Farmers", x: 18, y: 42 },
  { label: "Marketplace", x: 35, y: 62 },
];

const RajasthanMap = () => {
  return (
    <div className="relative w-full max-w-2xl aspect-square">
      {/* Rajasthan Map Shape */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Map silhouette - simplified Rajasthan shape */}
        <path
          d="M 100 50 
             L 180 30 
             L 250 40 
             L 290 80 
             L 320 100
             L 340 150
             L 350 200
             L 340 260
             L 300 300
             L 260 340
             L 200 360
             L 150 340
             L 100 300
             L 60 250
             L 50 200
             L 55 150
             L 70 100
             Z"
          className="fill-navy"
        />
        
        {/* Ripple circles */}
        <circle
          cx="200"
          cy="200"
          r="60"
          className="stroke-gold fill-none animate-ripple"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="60"
          className="stroke-gold fill-none animate-ripple-delayed"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="60"
          className="stroke-gold fill-none animate-ripple-delayed-2"
          strokeWidth="1"
          opacity="0.6"
        />
        
        {/* Static orbit rings */}
        <circle
          cx="200"
          cy="200"
          r="80"
          className="stroke-gold/40 fill-none"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          className="stroke-gold/30 fill-none"
          strokeWidth="1"
        />
        
        {/* Connection lines */}
        {connectionPoints.map((point, index) => (
          <line
            key={index}
            x1="200"
            y1="200"
            x2={point.x * 4}
            y2={point.y * 4}
            className="stroke-gold/50"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
        
        {/* Connection point dots */}
        {connectionPoints.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x * 4}
              cy={point.y * 4}
              r="8"
              className="fill-gold"
            />
            <circle
              cx={point.x * 4}
              cy={point.y * 4}
              r="12"
              className="fill-gold/30"
            />
          </g>
        ))}
      </svg>
      
      {/* Center logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center border-2 border-gold">
          <WheatLogo className="text-gold" size={50} />
        </div>
        <span className="mt-2 text-gold font-semibold text-sm">Bumper Mandi</span>
      </div>
      
      {/* Connection labels */}
      {connectionPoints.map((point, index) => (
        <div
          key={index}
          className="absolute text-foreground text-sm font-medium"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {point.label}
        </div>
      ))}
    </div>
  );
};

export default RajasthanMap;
