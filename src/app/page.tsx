import { Title } from "@/feature/Title";
import { HeaderLogo } from "../feature/HeaderLogo";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-16" />
      {/* <HeaderLogo /> */}
      <Title />
    </div>
    // <div className="bg-blue-100 py-16">
    //   <HeaderLogo />
    //   <Title />
    // </div>
  );
}
