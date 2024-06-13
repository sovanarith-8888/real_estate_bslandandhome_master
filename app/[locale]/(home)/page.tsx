import { useTranslations } from "next-intl";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
    <h1>Default home page ខ្ញុំចង់មានស្នេហា​ខ្លាំងណាស់</h1>
    <h2>{t('title')}</h2>
    </>
    
  );
}
