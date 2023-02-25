import { Container, Stack, Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const baseUrl = props.props.url;
  const [cat, setCat] = useState<CatProfile>();
  const [topCats, setTopCats] = useState<CatProfile[]>([]);
  const [update, setUpdate] = useState(false);

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
    setUpdate(false);
  }, [update]);

  if (cat) {
    navigate("/cat_profile", { state: cat });
  }

  const handleAddLike = async (tc: CatProfile, likes: number) => {
    console.log("im here", tc.id, likes,JSON.stringify({ likes: likes }));
    try {
      await fetch(`${baseUrl}/likes/${tc.id}`, {
        method: "PUT",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ likes: likes }),
      });
      setUpdate(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewProfile = (tc: CatProfile) => {
    setCat(tc);
  };

  return (
    <>
      <Container maxW="100%">
        <Box display="flex" flexDirection="column" alignItems="center">
          <SearchBar navigate={navigate} />
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
                  handleViewProfile={handleViewProfile}
                  handleAddLike={handleAddLike}
                  disableClick={false}
                  profile={false}
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
