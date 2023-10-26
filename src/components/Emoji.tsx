import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bullseye.jpg";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbsup.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: {
      src: thumbsUp,
      alt: "recommended",
      boxSize: "40px",
      width: "70px",
      height: "48px",
      marginY: "10px",
    },
    5: { src: bullsEye, alt: "exceptional", boxSize: "60px" },
  };
  return <Image {...emojiMap[rating]} marginTop={2}></Image>;
};

export default Emoji;
