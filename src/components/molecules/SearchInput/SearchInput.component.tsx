import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Input from "../../atoms/Input";
import { fontSizes, colors } from "../../../assets/styles/variables";
import { SearchIcon, SearchInputWrapper } from "./SearchInput.style";

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <Input
        placeholder="Pesquisar"
        style={{
          borderRight: "none",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          fontSize: fontSizes.fontSize16,
        }}
      ></Input>
      <SearchIcon>
        <HiMiniMagnifyingGlass
          style={{
            fontSize: fontSizes.fontSize26,
            color: colors.blackOpacity,
          }}
        />
      </SearchIcon>
    </SearchInputWrapper>
  );
};

export default SearchInput;
