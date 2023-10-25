import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, count, isLoading, error } = useGenres();
  const skeletons = Array.from(Array(19).keys());
  console.log(count);

  if (error) return null;
  // if (isLoading) return <Spinner />;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListSkeleton key={skeleton}></GenreListSkeleton>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
