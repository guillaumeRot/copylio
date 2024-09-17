import { TitleSection } from "@/feature/landing/TitleSection";
import { HeaderLogo } from "../feature/landing/HeaderLogo";
import { SubtitleSection } from "@/feature/landing/SubtitleSection";
import { MailSection } from "@/feature/landing/MailSection";
import { SocialSection } from "@/feature/landing/SocialSection";
import { prisma } from "@/prisma";

export const revalidate = 60

export default async function Home() {
  let emailsCount = await prisma.utilisateur.count();

  return (
      <div className="py-16">
        <HeaderLogo />
        <TitleSection />
        <SubtitleSection />
        <MailSection />
        <SocialSection usersCount={emailsCount} />
      </div>
  );
}
