import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "@/feature/Section";
import { Layout, LayoutDescription, LayoutTitle } from "@/components/Layout";
import { MdOutlineEmail, MdSend } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { createUtilisateur } from "@/app/utilisateur.action";
import { MailForm } from "@/app/MailForm";

export const MailSection = () => {
    return (
      <div>
        <Section className="text-center flex flex-row items-center">
          <Layout>
            <LayoutDescription className="mx-auto w-full max-w-screen-xl flex flex-row justify-center text-2xl">
              Renseigne ton e-mail pour intégrer la liste d’attente et être au courant des nouveautés !
            </LayoutDescription>
            <MailForm />
          </Layout>
        </Section>
      </div>
    );
  };