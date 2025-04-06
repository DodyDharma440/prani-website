import type { MetaFunction } from "@remix-run/node";
import { About, Contact, Hero, HowItWorks, Products } from "~/sections/home";

export const meta: MetaFunction = () => {
  return [
    { title: "Prani" },
    { name: "description", content: "Coming Soon - Prani" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Products />
      <Contact />
    </>
  );
}
