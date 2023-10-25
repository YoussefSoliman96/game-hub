import { ListItem, List, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <Skeleton height={"5px"} />
      <ListItem>
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
