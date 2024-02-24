const InProcess = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#eaeaea9c] backdrop-blur z-20 flex flex-col justify-center items-center">
      <img
        src="/icons/under-construction.png"
        alt=""
        width="300"
        className="w-[150px] sm:w-[300px]"
      />
      <p className="text-[3rem] sm:text-[5rem] text-[#424242] font-[900]">
        공사 중
      </p>
      <p className="text-[1rem] sm:text-[1.5rem] text-center">
        보다 더 나은 경험을 위해 공사를 진행중입니다. <br />
        빠른 시일 내 공사를 마무리하겠습니다.
      </p>
      <p className="absolute bottom-3 right-0 text-[#0000005e] text-[0.7rem]">
        Under construction icons created by Freepik -{" "}
        <a
          href="https://www.flaticon.com/free-icons/under-construction"
          title="under construction icons"
        >
          Flaticon
        </a>
      </p>
    </div>
  );
};
export default InProcess;
