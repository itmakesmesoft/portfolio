export const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex flex-col justify-center items-center w-full z-10">
      <div className="flex flex-row justify-between items-center w-full z-40 h-[60px] max-w-[1300px] px-4">
        <img
          src="/images/image.jpg"
          className="w-[45px] h-[45px] rounded-full cursor-pointer"
          alt="logo"
        />
        <div>
          <ul className="flex flex-row font-['Shadows_Into_Light']">
            <li className="mr-6 cursor-pointer">About</li>
            <li className="mr-6 cursor-pointer">Projects</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
