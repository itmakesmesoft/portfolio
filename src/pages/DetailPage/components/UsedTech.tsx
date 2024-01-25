const UsedTech = (props: { tech: string[] }) => {
  const FILES_NAME: { [skill: string]: string } = {
    TypeScript: "TypeScript.svg",
    JavaScript: "JavaScript.svg",
    Css: "css.svg",
    Html: "Html.svg",
    Nextjs: "Next.js.svg",
    Python: "Python.svg",
    Reactjs: "React.js.svg",
    Tailwind: "Tailwind.svg",
    Vuejs: "Vue.js.svg",
    OpenAi: "OpenAi.svg",
    WebRTC: "WebRTC.svg",
    OpenVidu: "OpenVidu.webp",
    Threejs: "Three.js.webp",
    ReactQuery: "ReactQuery.svg",
    FastApi: "FastApi.svg",
    Azure: "Azure.svg",
    SWR: "Swr.svg",
  };
  return (
    <div className="mx-auto max-w-[1000px] border-b border-[#d2d2d2] py-[4rem] sm:py-[7rem]">
      <h1 className="text-center text-[2rem] font-extrabold">What I used</h1>
      <div className="flex flex-row justify-center items-end flex-wrap mt-8">
        {props.tech.map((t: string, index: number) => {
          return (
            <div
              key={index}
              className="w-[6.5rem] sm:w-[7rem] md:w-[8rem] px-2 py-4 sm:px-6 sm:py-8"
            >
              {FILES_NAME[t] && (
                <img
                  src={require(`/public/icons/${FILES_NAME[t]}`)}
                  alt={t}
                  className="w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] mx-auto"
                />
              )}
              <p className="mt-4 text-center">{t}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsedTech;
