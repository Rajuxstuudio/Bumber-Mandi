import LoginCard from "@/components/LoginCard";
import LanguageToggle from "@/components/LanguageToggle";
import backgroundMap from "@/assets/background-map.svg";

const Index = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundMap})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageToggle />
      </div>

      {/* Login Card - Positioned on the right */}
      <div className="relative z-10 min-h-screen flex items-center justify-end px-4 py-8 lg:px-16">
        <div className="w-full max-w-sm lg:mr-8">
          <LoginCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
