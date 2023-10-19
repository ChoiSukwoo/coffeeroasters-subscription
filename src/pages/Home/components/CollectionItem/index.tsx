import { CollectionItemStyle, ItemContent, ItemImgCover, ItemInfo, ItemNm } from "./styles";

interface Props {
  imgSrc: string;
  name: string;
  info: string;
}

const CollectionItem = ({ imgSrc, name, info }: Props) => {
  return (
    <CollectionItemStyle>
      <ItemImgCover>
        <img alt={name} src={imgSrc} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </ItemImgCover>
      <ItemContent>
        <ItemNm>{name}</ItemNm>
        <ItemInfo>{info}</ItemInfo>
      </ItemContent>
    </CollectionItemStyle>
  );
};

export default CollectionItem;
