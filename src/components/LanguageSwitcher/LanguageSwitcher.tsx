import { useLanguage } from "@context";

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  console.log(language)

  return (
    <div 
      className="relative h-11 w-18 border-2 border-blue-500 rounded-full px-2 py-2 cursor-pointer flex items-center select-none"
      onClick={toggleLanguage}
    >
      <div 
        className={`absolute rounded-full h-8 w-8 bg-blue-500 transition-transform duration-300 ease-in-out ${
          language === 'ru' ? 'transform -translate-x-0.5' : 'transform translate-x-6'
        }`}
      />
      <span className="absolute left-2.5 text-white font-bold z-10">RU</span>
      <span className="absolute right-2.5 text-white font-bold z-10">EN</span>
    </div>
  );
};