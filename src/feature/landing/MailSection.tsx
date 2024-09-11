import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/feature/Section";
import { Layout, LayoutDescription, LayoutTitle } from "@/components/Layout";

export const MailSection = () => {
    return (
      <div>
        <Section className="text-center flex flex-row items-center">
          <Layout>
            <LayoutDescription className="mx-auto w-full max-w-screen-xl flex flex-row justify-center text-2xl">
              Renseigne ton e-mail pour intégrer la liste d’attente et être au courant des nouveautés !
            </LayoutDescription>

            <div className="relative max-w-5xl mt-2 rounded-md shadow-sm mx-auto min-w-96">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="mon@email.com"
                className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </Layout>
        </Section>
      </div>
    );
  };