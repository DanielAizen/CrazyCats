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
import React, { useState } from "react";

export const ProfileCard = (props) => {
  const currentCat = props.currCat;
  const [likes, setLikes] = useState(currentCat.likes);
  return (
    <Card
      direction={{ base: "row" }}
      overflow="hidden"
      variant="outline"
      align="center"
      height={!props.profile ? "250px" : "100%"}
      width={!props.profile ? "320px" : "100%"}
      backgroundColor={"red"}
      key={currentCat.id}
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
              <Button
                onClick={() => {
                  
                  setLikes(++currentCat.likes);
                  props.handleAddLike(currentCat, likes + 1);
                }}
              >
                😻 {likes}
              </Button>
            </>
          ) : (
            ""
          )}
        </Stack>
        {!props.profile ? (
          <Button onClick={() => props.handleViewProfile(currentCat)}>
            View Profile
          </Button>
        ) : (
          ""
        )}
      </Stack>
    </Card>
  );
};
