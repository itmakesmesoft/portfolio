let timer: NodeJS.Timeout;

const debounce = (callback: () => unknown, interval: number) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
  }, interval);
};

const clear = () => {
  timer && clearTimeout(timer);
};

debounce.clear = clear;
export default debounce;
