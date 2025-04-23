import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleChange} value={i18n.language}>
      <option value="en">EN</option>
      <option value="am">AM</option>
    </select>
  );
};
export default LanguageSwitcher;
