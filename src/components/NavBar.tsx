import { HStack, Image } from "@chakra-ui/react";
import image from "../assets/image.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={image} boxSize={"60px"} />
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
