import RajasthanMap from "@/components/RajasthanMap";
import LoginCard from "@/components/LoginCard";
import LanguageToggle from "@/components/LanguageToggle";
import backgroundMap from "@/assets/background-map.svg";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background relative overflow-hidden"
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-8 lg:px-16">
        {/* Left Side - Map Visualization */}
        <div className="flex-1 flex flex-col items-center lg:items-start max-w-2xl">
          {/* Tagline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground italic mb-8 text-center lg:text-left">
            Vishwas. Suvidha. Vyapar.
          </h1>
          
          {/* Map */}
          <div className="w-full max-w-lg lg:max-w-xl">
            <RajasthanMap />
          </div>
          
          {/* Bottom Tagline */}
          <div className="mt-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-gold italic">Aapka Apna </span>
              <span className="text-gold-dark italic">Digital Mandi</span>
            </h2>
          </div>
        </div>

        {/* Right Side - Login Card */}
        <div className="flex-shrink-0 w-full max-w-sm lg:mr-8">
          <LoginCard />
        </div>
      </div>

      {/* SEO Meta */}
      <meta name="description" content="Bumper Mandi - Your trusted digital agricultural marketplace. Connect farmers, sellers, and warehouses seamlessly." />
    </div>
  );
};

export default Index;
