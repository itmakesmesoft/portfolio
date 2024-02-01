let timer: NodeJS.Timeout;

const debounce = (callback: () => void, interval: number) => {
  console.log(timer, "실행");
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
    console.log("callback 실행");
  }, interval);
};

export default debounce;
