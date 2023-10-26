import { HStack, Image } from "@chakra-ui/react";
import image from "../assets/image.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"} justifyContent="space-between">
      <Image src={image} boxSize={"60px"} />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
