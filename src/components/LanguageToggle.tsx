import { useState } from "react";

const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <button
      onClick={() => setIsEnglish(!isEnglish)}
      className="flex items-center gap-1 bg-gold rounded-full px-3 py-2 text-navy font-semibold text-sm hover:bg-gold-light transition-colors duration-200 shadow-md"
    >
      <span className={`${isEnglish ? "opacity-100" : "opacity-50"}`}>A</span>
      <span className="text-navy/40">|</span>
      <span className={`${!isEnglish ? "opacity-100" : "opacity-50"}`}>अ</span>
    </button>
  );
};

export default LanguageToggle;
