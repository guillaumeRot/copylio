import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "@/feature/Section";
import { Layout, LayoutDescription, LayoutTitle } from "@/components/Layout";
import Image from "next/image";

export const SocialSection = () => {
    return (
      <div>
        <Section className="text-center items-center">
            <div className="w-full gap-12 mx-auto flex flex-row justify-center relative mx-auto max-w-screen-xl">
              <Image
                src="/facebook.png"
                width={40}
                height={40}
                alt="copylio logo"
              />
              <Image
                src="/twitter.png"
                width={40}
                height={40}
                alt="copylio logo"
              />
            </div>
            <LayoutDescription className="mx-auto w-full max-w-screen-xl flex flex-row justify-center text-2xl pt-8">
              XX rédacteurs ont déjà rejoint l’aventure !
            </LayoutDescription>
        </Section>
      </div>
    );
  };