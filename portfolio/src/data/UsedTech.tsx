const UsedTech = (props: { tech: string[] }) => {
  const tech = props.tech;
  const filename: any = {
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
    OpenVidu: "OpenVidu.png",
    Threejs: "Three.js.png",
    ReactQuery: "ReactQuery.svg",
    FastApi: "FastApi.svg",
    Azure: "Azure.svg",
    SWR: "Swr.svg",
  };
  return (
    <div className="mx-auto max-w-[1000px] pb-[7rem] border-b border-[#d2d2d2]">
      <h1 className="text-center text-[2rem] font-extrabold">
        사용한 기술 스택
      </h1>
      <div className="flex flex-row justify-center items-end flex-wrap mt-8">
        {tech.map((t: string, index: number) => {
          return (
            <div key={index} className="p-4 mx-4">
              {filename[t] ? (
                <img
                  src={require(`/public/icons/${filename[t]}`)}
                  alt={t}
                  className="w-[4.5rem] h-[4.5rem]"
                />
              ) : (
                ""
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
