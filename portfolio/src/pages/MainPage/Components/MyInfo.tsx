import styled from "styled-components";

export const MyInfo = () => {
  const today = new Date();
  const birthdate = new Date("1994-05-06");
  let age = today.getFullYear() - birthdate.getFullYear();
  if (
    today.getMonth() < birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() &&
      today.getDate() < birthdate.getDate())
  ) {
    age -= 1;
  }
  return (
    <div className="h-[77%] w-full pb-[10rem] pt-[5rem] sm:pt-0">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] mb-10 font-bold font-['Bangers'] text-center sm:text-left leading-none">
        About Me
      </h1>
      <div>
        <P>
          안녕하세요. 올해 만 {age}살,{" "}
          <Bold>저 세상 웹 프론트엔드 개발자, 이은혁입니다.</Bold>
        </P>
        <P>
          어머니의 손재주를 물려받아 무언가를 만드는 것을 좋아합니다. 무언가에
          꽂히면 시간 가는줄 모릅니다. 대학 생활 땐 영어 쉐도잉에 꽂혔었고,
          지금은 코딩에 꽂혀있습니다.
          <span className="block">참고로 게임에는 관심이 없습니다(TMI).</span>
        </P>
        <P>
          <Bold>SSAFY 8기</Bold>에 입과하여{" "}
          <Bold>Python과 Django, Vue, React 등을 학습</Bold>하였습니다. 그동안
          학습해 온 것들을 Notion과 GitHub에 기록하고 있습니다.
        </P>
        <P>
          저는 한 우물에만 갇혀있는 것을 기피합니다.{" "}
          <Bold>항상 새로운 것을 모색하며 발전하고 싶습니다.</Bold>
        </P>
      </div>
    </div>
  );
};

const P = styled.p`
  margin-bottom: 1.2rem;
  font-weight: 300;
  color: #818181;
  font-weight: 500;
`;
const Bold = styled.span`
  color: #4e4e4e;
  font-weight: 600;
`;
