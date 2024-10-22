import { Section } from "style/common";
import Information from "../../../components/Information";
export const ContactSection = () => {
  return (
    <Section id="contact" className="h-[50vh] w-full bg-dark-secondary/5 py-10">
      <div className="inline-block px-8">
        <h1 className="text-2xl sm:text-3xl">CONTACT</h1>
        <Information />
      </div>
    </Section>
  );
};
