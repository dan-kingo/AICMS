import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select value={i18n.language} onValueChange={handleChange}>
      <SelectTrigger className="md:w-[80px] w-full dark:bg-black cursor-pointer">
        <SelectValue placeholder={t("Select Language")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{t("EN")}</SelectItem>
        <SelectItem value="am">{t("AM")}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
