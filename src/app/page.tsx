import { TitleSection } from "@/feature/landing/TitleSection";
import { HeaderLogo } from "../feature/landing/HeaderLogo";
import { SubtitleSection } from "@/feature/landing/SubtitleSection";
import { MailSection } from "@/feature/landing/MailSection";
import { SocialSection } from "@/feature/landing/SocialSection";

export default function Home() {
  return (
      <div className="py-16">
        <HeaderLogo />
        <TitleSection />
        <SubtitleSection />
        <MailSection />
        <SocialSection />
      </div>
  );
}
