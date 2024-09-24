"use client";

import { Section } from "@/feature/Section";
import { LayoutDescription } from "@/components/Layout";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { prisma } from "@/prisma";
import { getEmailsCount } from "@/app/utilisateur.action";

export type UtilisateursProps = {
  usersCount: number;
};

// export const SocialSection = ({ usersCount }: UtilisateursProps) => {
export const SocialSection = () => {
    const queryClient = useQueryClient();

    // const emailsCount = useQuery({
    //   queryKey: ["emailsCount"],
    //   queryFn: async () => {
    //     console.log("TEST GUI 1");
    //     const emailsCount = await prisma.utilisateur.count();
    //     console.log("TEST GUI 2", emailsCount);
    //     return emailsCount;
    //   },
    // });

    const emailsCount = useQuery({
      queryKey: ["emailsCount"],
      queryFn: async () => {
        console.log("TEST GUI 1");
        const { data, serverError } = await getEmailsCount({});
        console.log("TEST GUI 2", data);
  
        // if (serverError || !data) {
        //   toast.error(serverError);
        //   return;
        // }
  
        return data;
      },
    });

    // const query = useQuery({ queryKey: ['emailsCount'],
    //   queryFn: async () => {
    //     console.log("TEST GUI 10");
    //     const emailsCount = await getEmailsCount;
    //     console.log("TEST GUI 20", emailsCount);
    //     return emailsCount;
    //   }
    //  })

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