import { Arrow, Container, Title, SubTitle } from "../Project5";
import { Select } from "elast-ui";
import { useState } from "react";

const selectList = [
  { name: "이은혁", value: "Eunhyeok Lee" },
  { name: "이수연", value: "Sooyeon Lee" },
  { name: "김윤미", value: "Yoonmi Kim" },
];

export default function SelectSection() {
  const [selectValue, setSelectValue] = useState("Eunhyeok Lee");
  return (
    <Container>
      <Title>Select</Title>
      <SubTitle>Basic Example</SubTitle>
      <Select
        className="col-span-4"
        value={selectValue}
        onChange={setSelectValue}
      >
        <Select.Trigger className="relative hover:bg-[white] focus:bg-[white] hover:text-[black] focus:text-[black] bg-[rgb(244,244,244)] text-[black] rounded border py-3 px-4 h-[3rem] cursor-pointer">
          {selectValue ? "" : "Select"}
          <Arrow />
        </Select.Trigger>
        <Select.OptionWrapper className="bg-white text-[black] rounded border z-50 absolute min-w-[150px]">
          {selectList.map((option: any, index: number) => (
            <Select.Option
              className="hover:bg-light-primary py-3 px-4 data-[focused]:bg-light-primary data-[selected]:bg-[#ddeef7] cursor-pointer"
              key={`${option.name}-${index}`}
              value={option.value}
            >
              {option.name}
            </Select.Option>
          ))}
        </Select.OptionWrapper>
      </Select>
      <SubTitle>required</SubTitle>
      <form className="grid grid-cols-5 gap-2">
        <Select
          className="col-span-4"
          value=""
          onChange={setSelectValue}
          required
        >
          <Select.Trigger className="relative hover:bg-[white] focus:bg-[white] hover:text-[black] focus:text-[black] bg-[rgb(244,244,244)] text-[black] rounded border py-3 px-4 h-[3rem] cursor-pointer">
            {selectValue ? "" : "Select"}
            <Arrow />
          </Select.Trigger>
          <Select.OptionWrapper className="bg-white text-[black] rounded border z-50 absolute min-w-[150px]">
            {selectList.map((option: any, index: number) => (
              <Select.Option
                className="hover:bg-light-primary py-3 px-4 data-[focused]:bg-light-primary data-[selected]:bg-[#ddeef7] cursor-pointer"
                key={`${option.name}-${index}`}
                value={option.value}
              >
                {option.name}
              </Select.Option>
            ))}
          </Select.OptionWrapper>
          <Select.Error className="text-[red] py-1">
            필수 입력값입니다.
          </Select.Error>
        </Select>
        <button
          type="submit"
          className="bg-green-700 text-white py-1 px-2 rounded-lg border border-green-800 h-[3rem]"
        >
          Submit
        </button>
      </form>
    </Container>
  );
}
