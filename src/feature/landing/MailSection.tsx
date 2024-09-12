import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "@/feature/Section";
import { Layout, LayoutDescription, LayoutTitle } from "@/components/Layout";
import { MdOutlineEmail, MdSend } from "react-icons/md";

export const MailSection = () => {
    return (
      <div>
        <Section className="text-center flex flex-row items-center">
          <Layout>
            <LayoutDescription className="mx-auto w-full max-w-screen-xl flex flex-row justify-center text-2xl">
              Renseigne ton e-mail pour intégrer la liste d’attente et être au courant des nouveautés !
            </LayoutDescription>

            <div className="flex relative max-w-5xl mt-2 rounded-md shadow-sm mx-auto min-w-96">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MdOutlineEmail />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="mon@email.com"
                className="block w-full rounded-md border-0 py-1.5 pl-9 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <Button className="bg-secondary ml-3"><MdSend className="text-white"/></Button>
            </div>
          </Layout>
        </Section>
      </div>
    );
  };