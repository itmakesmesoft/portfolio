import { Dropdown } from "elast-ui";
import { useState } from "react";
import { Arrow, Container, Title, SubTitle } from "../Project5";

const selectList = [
  { name: "이은혁", value: "Eunhyeok Lee" },
  { name: "이수연", value: "Sooyeon Lee" },
  { name: "김윤미", value: "Yoonmi Kim" },
];

export default function DropdownSection() {
  const [dropdownValue, setDropdownValue] = useState("");
  return (
    <Container>
      <Title>Dropdown</Title>
      <SubTitle>Basic Example</SubTitle>
      <div className="flex flex-col sm:flex-row items-start gap-1">
        <Dropdown onChange={setDropdownValue}>
          <Dropdown.Trigger className="relative hover:bg-[white] focus:bg-[white] hover:text-[black] focus:text-[black] text-[black] rounded border py-3 pl-4 pr-10 h-[3rem] cursor-pointer">
            Menu
            <Arrow />
          </Dropdown.Trigger>
          <Dropdown.ItemWrapper className="bg-[white] text-[black] rounded border z-50 min-w-[150px] text-center absolute">
            {selectList.map((option: any, index: number) => (
              <Dropdown.Item
                key={`${option.name}-${index}`}
                value={option.value}
                className="hover:bg-[#ededed] py-3 px-4 data-[focused]:bg-[#ededed] data-[selected]:bg-[#ddeef7] cursor-pointer"
              >
                {option.name}
              </Dropdown.Item>
            ))}
          </Dropdown.ItemWrapper>
        </Dropdown>
        <div className="flex-grow w-full rounded border py-3 px-4 h-[3rem] font-normal bg-white mb-1">
          선택 :
          {dropdownValue ? (
            <b className="text-green-700"> {dropdownValue}</b>
          ) : (
            " 없음"
          )}
        </div>
      </div>
    </Container>
  );
}
