const BackgroundMap = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg
        viewBox="0 0 1200 800"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified India map outline for background */}
        <path
          d="M 400 100 
             Q 500 80 600 100
             L 700 150
             Q 750 200 780 280
             L 800 350
             Q 820 420 800 500
             L 750 580
             Q 700 650 600 700
             L 500 720
             Q 400 700 350 650
             L 300 580
             Q 250 500 260 400
             L 280 300
             Q 300 200 350 150
             Z"
          className="stroke-foreground fill-none"
          strokeWidth="1"
        />
        
        {/* State boundaries (simplified) */}
        <path d="M 350 200 L 450 250 L 500 200" className="stroke-foreground" strokeWidth="0.5" />
        <path d="M 450 250 L 480 350 L 550 300" className="stroke-foreground" strokeWidth="0.5" />
        <path d="M 550 300 L 650 350 L 700 280" className="stroke-foreground" strokeWidth="0.5" />
        <path d="M 480 350 L 520 450 L 600 400" className="stroke-foreground" strokeWidth="0.5" />
        <path d="M 520 450 L 480 550 L 550 580" className="stroke-foreground" strokeWidth="0.5" />
        <path d="M 600 400 L 680 450 L 720 380" className="stroke-foreground" strokeWidth="0.5" />
        
        {/* Additional decorative elements */}
        <circle cx="200" cy="600" r="80" className="stroke-foreground" strokeWidth="0.5" />
        <circle cx="950" cy="200" r="60" className="stroke-foreground" strokeWidth="0.5" />
        <circle cx="1000" cy="550" r="100" className="stroke-foreground" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default BackgroundMap;
