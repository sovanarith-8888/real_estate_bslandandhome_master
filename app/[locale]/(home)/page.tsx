import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
    <video autoPlay loop muted>
      <source src={'_next-video/cut.mp4'} type="video/mp4"/>
    </video>
    </>
    
  );
}
