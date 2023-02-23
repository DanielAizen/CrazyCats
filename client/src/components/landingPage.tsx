import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SearchBar } from "src/layouts/search-bar";

interface CatProfile {
  id?: number;
  name?: string;
  dob?: Date;
  location?: string;
  fav_food?: string;
  fur_color?: string;
  height?: number;
  weight?: number;
  avatar?: string;
  likes?: number;
}

const LandingPage = (props: any) => {
  const baseUrl = props.props.url;
  const [cat, setCat] = useState<CatProfile>();
  const [topCats, setTopCats] = useState<CatProfile[]>([{}]);
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/landing`);
        const data = await res.json();
        setTopCats(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleSearchCat = async () => {
    console.log({ searchName });
    try {
      const res = await fetch(`${baseUrl}/name/${searchName}`);
      const data = await res.json();
      console.log({ data });
      setCat(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLikes = () => {

  }
  return (
    <>
      <Container maxW="100%">
        <Box display="flex" flexDirection="column" alignItems="center">
          <SearchBar
            setSearchName={setSearchName}
            handleSearchCat={handleSearchCat}
            defaultValue={searchName}
          />
          <Heading m="20px 0 0 50px" p="10px" alignSelf="center">
          🐱‍💻Crazy Cats!🐱‍💻
          </Heading>
        </Box>
        <div
          className="card-container"
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "50px",
            justifyContent: "space-around",
          }}
        >
          <Stack spacing={topCats.length} direction="row">
            {topCats.map((tc) => {
              return (
                <Card
                  direction={{ base: "row" }}
                  overflow="hidden"
                  variant="outline"
                  align="center"
                  height='250px'
                  backgroundColor={'red'}
                >
                  <CardHeader alignSelf="center">
                    <Avatar
                      size="xl"
                      src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=374&h=250"
                    />
                  </CardHeader>
                  <Stack>
                    <CardBody>
                      <Heading size="lg">{tc.name}</Heading>
                      <Text fontSize='lg'> Crazy Cats Fans: {tc.likes}</Text>
                    </CardBody>
                    <Stack spacing={2} direction="row" justifyContent='center'>
                      <Button onClick={handleLikes} name='add'>😻</Button>
                      <Button onClick={handleLikes} name='remove'>🙀</Button>
                    </Stack>
                  </Stack>
                </Card>
              );
            })}
          </Stack>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
