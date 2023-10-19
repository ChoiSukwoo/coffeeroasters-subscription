import { CSSProperties } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Content, Header, Title } from "./style";
import SelectCard from "../SelectCard";
import { CardInfo } from "../SelectRightSide";
import ExpendIcon from "@svg/plan/desktop/icon-arrow.svg?react";
import { IFormInput, IFormInputKeys } from "@pages/Plan/data";

interface Props<T extends IFormInputKeys> {
  style?: CSSProperties;
  register: UseFormRegisterReturn<T>;
  watch: IFormInput[T];
  title: string;
  active: boolean;
  disable: boolean;
  expend: boolean;
  cardinfos: CardInfo<T>[];
}

const SelectPart = <T extends IFormInputKeys>({ register, watch, title, cardinfos, style, active, disable, expend }: Props<T>) => {
  const isExpend = !disable && active && expend;

  return (
    <div style={style}>
      <Header disable={disable} expend={isExpend}>
        <Title>{title}</Title>
        <ExpendIcon />
      </Header>
      {isExpend && (
        <Content>
          {cardinfos.map((cardinfo) => (
            <SelectCard
              key={cardinfo.value}
              register={register}
              content={cardinfo.content}
              select={watch === cardinfo.value}
              value={cardinfo.value || ""}
            />
          ))}
        </Content>
      )}
    </div>
  );
};

SelectPart.defaultProps = {
  disable: false,
};

export default SelectPart;
