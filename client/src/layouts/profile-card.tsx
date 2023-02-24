import {
  Card,
  CardHeader,
  Avatar,
  Stack,
  CardBody,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const ProfileCard = (props) => {
  const currentCat = props.currCat;
  return (
    <Card
      direction={{ base: "row" }}
      overflow="hidden"
      variant="outline"
      align="center"
      height={!props.profile ? "250px" : "100%"}
      backgroundColor={"red"}
      key={currentCat.id}
      onClick={
        !props.disableClick ? () => props.handleCardClick(currentCat) : () => ""
      }
    >
      <CardHeader alignSelf="center">
        <Avatar
          size="xl"
          src={
            currentCat.avatar
              ? currentCat.avatar
              : "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=374&h=250"
          }
        />
      </CardHeader>
      <Stack>
        <CardBody>
          <Heading size="lg">{currentCat.name}</Heading>
          <Text fontSize="md"> Crazy Cats Fans: {currentCat.likes}</Text>
          {props.profile ? (
            <>
              <Text fontSize="md" as="b">
                About Me:
              </Text>
              <Stack spacing={3} direction="row">
                <br />
                <Text>Birth date: {currentCat.dob}</Text>
                <Text>Where I'm from: {currentCat.location}</Text>
                <Text>Favorite food: {currentCat.fav_food}</Text>
                <Text>My fur color: {currentCat.fur_color}</Text>
                <Text>My height: {currentCat.height}</Text>
                <Text>My weight: {currentCat.weight}</Text>
              </Stack>
            </>
          ) : (
            ""
          )}
        </CardBody>
        <Stack spacing={2} direction="row" justifyContent="center">
          {!props.disableClick ? (
            <>
              <Button onClick={() => props.handleAddLike(currentCat)}>
                😻
              </Button>
              <Button onClick={() => props.handleRemoveLike(currentCat)}>
                🙀
              </Button>
            </>
          ) : (
            ""
          )}
        </Stack>
      </Stack>
    </Card>
  );
};
