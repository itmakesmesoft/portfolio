export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex flex-col justify-center items-center w-full z-10">
      <div className="flex flex-row justify-between items-center w-full z-40 h-[60px] max-w-[1300px] px-4">
        <img
          src="/images/github_logo.png"
          alt=""
          className="cursor-pointer w-[35px] h-[35px] ml-4 mb-4"
        />
      </div>
    </footer>
  );
};
