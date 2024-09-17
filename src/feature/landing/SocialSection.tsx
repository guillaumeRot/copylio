import { Section } from "@/feature/Section";
import { LayoutDescription } from "@/components/Layout";
import Image from "next/image";

export type UtilisateursProps = {
  usersCount: number;
};

export const SocialSection = ({ usersCount }: UtilisateursProps) => {
    return (
      <div>
        <Section className="text-center items-center">
            <div className="w-full gap-12 mx-auto flex flex-row justify-center relative mx-auto max-w-screen-xl">
              <Image
                src="/facebook.png"
                width={40}
                height={40}
                alt="facebook logo"
              />
              <Image
                src="/twitter.png"
                width={40}
                height={40}
                alt="twitter logo"
              />
            </div>
            <LayoutDescription className="mx-auto w-full max-w-screen-xl flex flex-row justify-center text-2xl pt-8">
              {usersCount} rédacteurs ont déjà rejoint l’aventure !
            </LayoutDescription>
        </Section>
      </div>
    );
  };