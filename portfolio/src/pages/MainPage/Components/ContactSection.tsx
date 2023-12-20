import Information from "../../../components/Information";
export const ContactSection = () => {
  return (
    <div
      id="contact"
      className="h-[50vh] w-full flex flex-col justify-center items-center bg-[#ffffff3c] py-10"
    >
      <div className="inline-block px-8">
        <h1 className="text-2xl sm:text-3xl">CONTACT</h1>
        <Information />
      </div>
    </div>
  );
};
