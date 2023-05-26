import Information from "../../../components/Information";
export const ContactPage = () => {
  return (
    <div
      id="contact"
      className="h-[50vh] w-full flex flex-col justify-center items-center bg-[#ffffff3c] py-10"
    >
      <div className="inline-block">
        <h1 className="text-3xl">CONTACT</h1>
        <Information />
      </div>
    </div>
  );
};
