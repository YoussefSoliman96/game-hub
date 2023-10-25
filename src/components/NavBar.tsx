import { HStack, Image, Text } from "@chakra-ui/react";
import image from "../assets/image.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={image} boxSize={"60px"} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
