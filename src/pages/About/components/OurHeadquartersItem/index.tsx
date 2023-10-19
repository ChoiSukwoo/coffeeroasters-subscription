import { IconCover, ItemStyle, Title } from "./styles";

interface Props {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  infoList: string[];
}

const Item = ({ Icon, name, infoList }: Props) => {
  return (
    <ItemStyle>
      <IconCover>
        <Icon />
      </IconCover>
      <Title>{name}</Title>
      {infoList.map((info) => (
        <p>{info}</p>
      ))}
    </ItemStyle>
  );
};

export default Item;
