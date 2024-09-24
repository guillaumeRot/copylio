import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/feature/Section";
import { Layout, LayoutDescription, LayoutTitle } from "@/components/Layout";

export const SubtitleSection = () => {
    return (
      <div>
          <LayoutDescription className="mx-auto w-full max-w-screen-xl flex flex-row justify-center text-primary-foreground text-center px-8">
            Tu souhaites mettre tes articles en ligne sans te préoccuper de la création de ton site ?<br/>
            Nous te proposons de créer ta page avec tes articles en seulement quelques minutes !
          </LayoutDescription>
      </div>
    );
  };