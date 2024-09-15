import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/feature/Section";
import { Layout, LayoutDescription, LayoutTitle } from "@/components/Layout";

export const TitleSection = () => {
    return (
      <div>
        <Section className="text-center flex flex-row items-center py-16">
          <Layout>
            <div className="flex md:flex-row flex-col justify-center">
              <LayoutTitle className="pb-8">Le portfolio des</LayoutTitle>
              <LayoutTitle className="px-4 py-2 mx-4 rotate-8 bg-secondary text-secondary-foreground text-5xl">rédacteurs</LayoutTitle>
            </div>
            <LayoutTitle className="text-muted-foreground underline">en 2 minutes</LayoutTitle>
          </Layout>
        </Section>
      </div>
    );
  };