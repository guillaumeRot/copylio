import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "@/feature/Section";
import { Layout, LayoutDescription, LayoutTitle } from "@/components/Layout";
import Image from "next/image";

export const SocialSection = () => {
    return (
      <div>
        <Section className="text-center flex flex-row items-center">
            <div className="max-w-5xl w-full gap-4 mx-auto px-4 flex relative max-w-5xl mt-2 rounded-md mx-auto min-w-96">
              <Image
                src="/facebook.png"
                width={75}
                height={75}
                alt="copylio logo"
              />
              <Image
                src="/twitter.png"
                width={75}
                height={75}
                alt="copylio logo"
              />
            </div>
            <LayoutDescription className="mx-auto w-full max-w-screen-xl flex flex-row justify-center text-2xl">
              XX rédacteurs ont déjà rejoint l’aventure !
            </LayoutDescription>
        </Section>
      </div>
    );
  };