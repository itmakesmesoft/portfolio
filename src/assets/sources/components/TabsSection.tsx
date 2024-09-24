import { Tabs } from "elast-ui";
import { Container, Title } from "../Project5";

const tabList = [
  {
    name: "tab 1",
    imgSrc:
      "https://cdn.pixabay.com/photo/2013/05/09/09/06/waves-circles-109964_1280.jpg",
  },
  {
    name: "tab 2",
    imgSrc:
      "https://cdn.pixabay.com/photo/2020/04/08/08/08/spring-5016266_1280.jpg",
  },
  {
    name: "tab 3",
    imgSrc:
      "https://cdn.pixabay.com/photo/2019/07/06/12/51/palace-4320416_1280.jpg",
  },
];

export default function TabsSection() {
  return (
    <Container>
      <Title>Tabs</Title>
      <Tabs className="mt-4">
        <Tabs.TabsWrapper className="flex flex-row">
          {tabList.map((tab) => (
            <Tabs.Tab className="rounded data-[selected]:bg-black/10 cursor-pointer px-2 py-1 mb-2">
              {tab.name}
            </Tabs.Tab>
          ))}
        </Tabs.TabsWrapper>
        <Tabs.ContentWrapper>
          {tabList.map(({ imgSrc }) => (
            <Tabs.Content>
              <p>첫 번째 탭의 내용입니다.</p>
              <img src={imgSrc} alt="사진" width={640} height={480} />
            </Tabs.Content>
          ))}
        </Tabs.ContentWrapper>
      </Tabs>
    </Container>
  );
}
