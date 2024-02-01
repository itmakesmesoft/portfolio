let timer: NodeJS.Timeout;

const debounce = (callback: () => void, interval: number) => {
  // console.log(timer, "실행");
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
    // console.log("callback 실행");
  }, interval);
};

const clear = () => {
  timer && clearTimeout(timer);
};

debounce.clear = clear;
export default debounce;
