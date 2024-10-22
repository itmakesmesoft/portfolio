const WhatIDid = (props: { info: string[] }) => {
  const info = props.info;
  return (
    <div className="w-full h-full max-w-[1000px] mx-auto flex flex-row flex-wrap justify-between py-[4rem] sm:py-[7rem]">
      <div className="w-full sm:w-[50%] sm:h-[250px] p-4 flex flex-col justify-center">
        <p className="text-[2rem] text-center font-extrabold ">What I did</p>
      </div>
      <div className="hidden sm:block w-[50%] h-[250px] p-4">
        <div
          className={`w-full h-full rounded-xl shadow-xl border bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2020/03/13/08/22/brain-4927267_1280.jpg')]`}
        ></div>
      </div>
      {info.map((content, index) => {
        return (
          <div
            key={index}
            className="w-full h-[120px] sm:w-[50%] sm:h-[250px] px-4 py-2 sm:p-4 text-sm sm:text-[1.2rem] "
          >
            <div
              className={`w-full h-full rounded-xl shadow-md sm:shadow-xl bg-white px-7 py-3 sm:p-7 flex flex-row items-center text-left break-words border ${
                (index % 4 === 0 || index % 4 === 3) && "sm:bg-light-primary/50"
              }`}
            >
              <span className="sm:hidden text-2xl mr-5">{index + 1}</span>
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhatIDid;
