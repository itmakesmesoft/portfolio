import styled from "styled-components";

export const Signature = () => {
  return (
    <div className="fixed bottom-0 left-0 hidden flex-col justify-center items-center w-full z-40 sm:flex">
      <Sign className="absolute mx-auto bottom-2 text-center font-['Pretendard_Regular'] leading-none">
        <p className="text-sm text-[#8b8b8b] font-[900]">Eunhyeok Lee</p>
        <p className="text-xs text-[#b1b1b1] font-[100]">itmakesmesoft</p>
      </Sign>
    </div>
  );
};

const Sign = styled.div`
  opacity: var(--scrolled);
  transition: all 0.2s;
`;
