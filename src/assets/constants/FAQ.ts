import { useTranslation } from "react-i18next";

const useFaqs = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      category: t("faq.category.general"),
      items: [
        {
          title: t("faq.general.q1.title"),
          content: t("faq.general.q1.content"),
        },
        {
          title: t("faq.general.q2.title"),
          content: t("faq.general.q2.content"),
        },
      ],
    },
    {
      category: t("faq.category.account"),
      items: [
        {
          title: t("faq.account.q1.title"),
          content: t("faq.account.q1.content"),
        },
        {
          title: t("faq.account.q2.title"),
          content: t("faq.account.q2.content"),
        },
        {
          title: t("faq.account.q3.title"),
          content: t("faq.account.q3.content"),
        },
      ],
    },
    {
      category: t("faq.category.complaint"),
      items: [
        {
          title: t("faq.complaint.q1.title"),
          content: t("faq.complaint.q1.content"),
        },
        {
          title: t("faq.complaint.q2.title"),
          content: t("faq.complaint.q2.content"),
        },
        {
          title: t("faq.complaint.q3.title"),
          content: t("faq.complaint.q3.content"),
        },
      ],
    },
    {
      category: t("faq.category.ai"),
      items: [
        {
          title: t("faq.ai.q1.title"),
          content: t("faq.ai.q1.content"),
        },
      ],
    },
    {
      category: t("faq.category.tech"),
      items: [
        {
          title: t("faq.tech.q1.title"),
          content: t("faq.tech.q1.content"),
        },
        {
          title: t("faq.tech.q2.title"),
          content: t("faq.tech.q2.content"),
        },
      ],
    },
    {
      category: t("faq.category.contact"),
      items: [
        {
          title: t("faq.contact.q1.title"),
          content: t("faq.contact.q1.content"),
        },
      ],
    },
  ];

  return faqs;
};

export default useFaqs;
