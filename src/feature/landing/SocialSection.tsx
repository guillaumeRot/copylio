"use client";

import { Section } from "@/feature/Section";
import { LayoutDescription } from "@/components/Layout";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getEmailsCount } from "@/app/utilisateur.action";

export const SocialSection = () => {
    const emailsCount = useQuery({
      queryKey: ["emailsCount"],
      queryFn: async () => {
        const { data, serverError } = await getEmailsCount({});  
        return data;
      },
    });

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
              {emailsCount.data} rédacteurs ont déjà rejoint l’aventure !
            </LayoutDescription>
        </Section>
      </div>
    );
  };