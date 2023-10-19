import { CardStyle } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";
import { useResponsive } from "@hooks/responsive";
import { IFormInputKeys } from "@pages/Plan/data";

interface Props<T extends IFormInputKeys> {
  register: UseFormRegisterReturn<T>;
  content: string;
  select: boolean;
  value: string;
}

const SelectCard = <T extends IFormInputKeys>({ content: contetn, select, value, register }: Props<T>) => {
  const { isMobile } = useResponsive();

  return (
    <CardStyle select={select}>
      <input hidden type="radio" value={value} {...register} />
      <h4 style={{ marginBottom: isMobile ? "8px " : "24px" }}>{value}</h4>
      <p>{contetn}</p>
    </CardStyle>
  );
};

export default SelectCard;
