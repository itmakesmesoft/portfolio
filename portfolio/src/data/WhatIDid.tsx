const WhatIDid = (props: { info: string[] }) => {
  const info = props.info;
  return (
    <div className="w-full h-full max-w-[1000px] mx-auto flex flex-row flex-wrap justify-between py-[7rem]">
      <div className="w-[50%] h-[250px] p-4 flex flex-col justify-center">
        <p className="text-[2rem] text-center font-extrabold ">What I did</p>
      </div>
      <div className="w-[50%] h-[250px] p-4">
        <div
          className={`w-full h-full rounded-xl shadow-xl border bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2020/03/13/08/22/brain-4927267_1280.jpg')]`}
        ></div>
      </div>
      {info.map((content, index) => {
        return (
          <div key={index} className="w-[50%] h-[250px] p-4 text-[1.2rem] ">
            <div
              className={`w-full h-full rounded-xl shadow-xl p-7 flex flex-col justify-center text-left break-words ${
                index % 4 === 0 || index % 4 === 3
                  ? "bg-[#e2e2e2] border-none"
                  : "bg-[#f8f8f8] border"
              }`}
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhatIDid;
