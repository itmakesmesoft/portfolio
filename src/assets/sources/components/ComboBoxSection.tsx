import { ComboBox } from "elast-ui";
import { Arrow, Container, Title, SubTitle } from "../Project5";
import { useState } from "react";

const selectList = [
  { name: "이은혁", value: "Eunhyeok Lee" },
  { name: "이수연", value: "Sooyeon Lee" },
  { name: "김윤미", value: "Yoonmi Kim" },
];
export default function ComboBoxSection() {
  const [comboValue, setComboValue] = useState("Eunhyeok Lee");
  return (
    <Container>
      <Title>Combobox</Title>
      <SubTitle>Basic Example</SubTitle>
      <ComboBox className="mb-3" value={comboValue} onChange={setComboValue}>
        <ComboBox.Input className="relative hover:bg-[white] focus:bg-[white] hover:text-[black] focus:text-[black] bg-[#f4f4f4] text-[black] rounded border py-3 px-4 h-[50px] cursor-pointer">
          <Arrow />
        </ComboBox.Input>
        <ComboBox.OptionWrapper className="bg-[white] text-[black] rounded border z-50 absolute">
          {selectList.map((option: any, index: number) => (
            <ComboBox.Option
              className="hover:bg-[#ededed] py-3 px-4 data-[focused]:bg-[#ededed] data-[selected]:bg-[#ddeef7] cursor-pointer"
              key={`${option.name}-${index}`}
              tabIndex={index}
              value={option.value}
            >
              {option.name}
            </ComboBox.Option>
          ))}
        </ComboBox.OptionWrapper>
      </ComboBox>
      <SubTitle>Required</SubTitle>
      <form className="grid grid-cols-5 gap-2">
        <ComboBox
          className="col-span-4"
          value=""
          onChange={setComboValue}
          required
        >
          <ComboBox.Input className="relative hover:bg-[white] focus:bg-[white] hover:text-[black] focus:text-[black] bg-[rgb(244,244,244)] text-[black] rounded border py-3 px-4 h-[3rem] cursor-pointer">
            <Arrow />
          </ComboBox.Input>
          <ComboBox.OptionWrapper className="bg-[white] text-[black] rounded border z-50 absolute">
            {selectList.map((option: any, index: number) => (
              <ComboBox.Option
                className="hover:bg-[#ededed] py-3 px-4 data-[focused]:bg-[#ededed] data-[selected]:bg-[#ddeef7] cursor-pointer"
                key={`${option.name}-${index}`}
                tabIndex={index}
                value={option.value}
              >
                {option.name}
              </ComboBox.Option>
            ))}
          </ComboBox.OptionWrapper>
          <ComboBox.Error className="text-[red] py-1">
            필수 입력값입니다.
          </ComboBox.Error>
        </ComboBox>
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
