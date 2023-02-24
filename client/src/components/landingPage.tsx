import { Container, Heading, Stack, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProfileCard } from "src/layouts/profile-card";
import { SearchBar } from "src/layouts/search-bar";

export interface CatProfile {
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
  let searchClicked = false;

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
    try {
      const res = await fetch(`${baseUrl}/name/${searchName}`);
      const data = await res.json();
      setCat(data);
    //   searchClicked = true;

    } catch (err) {
      console.error(err);
    }
  };

//   useEffect(() => {
//     navigate(`/cat_profile`, { state: cat });
//   }, [searchClicked]);

  const handleAddLike = (tc: CatProfile) => {
    console.log("clicked like", tc.id);
  };

  const handleRemoveLike = (tc: CatProfile) => {
    console.log("clicked -1", tc.id);
  };

  const handleCardClick = (tc: CatProfile) => {
    console.log("clicked avatar", tc.id);
  };

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
                <ProfileCard
                  currCat={tc}
                  handleCardClick={handleCardClick}
                  handleAddLike={handleAddLike}
                  handleRemoveLike={handleRemoveLike}
                  disableBtn={false}
                />
              );
            })}
          </Stack>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
