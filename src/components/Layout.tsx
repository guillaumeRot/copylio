import { twx } from "@/lib/twx";

export const Layout = twx.div((props) => [
  `max-w-5xl w-full flex-col py-6 flex gap-4 mx-auto px-4`,
]);

export const LayoutTitle = twx.span((props) => [`text-4xl font-bold font-poppins`]);

export const LayoutDescription = twx.p((props) => [
  `text-lg`,
]);