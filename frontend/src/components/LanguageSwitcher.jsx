import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, changeLanguage, languages } = useLanguage();

  return (
    <motion.div
      className="flex gap-2"
      whileHover={{ scale: 1.05 }}
    >
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
            language === lang.code
              ? 'bg-amber-700 dark:bg-amber-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          <span>{lang.flag}</span>
          <span className="ml-1 hidden sm:inline">{lang.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}
