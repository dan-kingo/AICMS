import { useTranslation } from "react-i18next";
import AI from "../images/AI_brain-removebg-preview.png";
import automation from "../images/automation-removebg-preview.png";
import realTime from "../images/realtime-removebg-preview.png";

const useFeatures = () => {
  const { t } = useTranslation();

  return [
    {
      imgUrl: AI,
      title: t("features.ai.title"),
      description: t("features.ai.description"),
    },
    {
      imgUrl: realTime,
      title: t("features.realtime.title"),
      description: t("features.realtime.description"),
    },
    {
      imgUrl: automation,
      title: t("features.automation.title"),
      description: t("features.automation.description"),
    },
  ];
};

export default useFeatures;
