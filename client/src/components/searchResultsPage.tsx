import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileCard } from "src/layouts/profile-card";
import { CatProfile } from "./landingPage";

export const SearchResultsPage = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const baseUrl = props.props.url;
  const [cat, setCat] = useState<CatProfile>();
  const [resultCats, setResultCats] = useState<CatProfile[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/name/${state}`);
        const data = await res.json();
        setResultCats(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleViewProfile = (tc: CatProfile) => {
    setCat(tc);
  };

  if (cat) {
    navigate("/cat_profile", { state: cat });
  }

  return (
    <>
      <div
        className="search-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "70px",
        }}
      >
        <Button
          leftIcon={<ChevronLeftIcon />}
          onClick={() => navigate("/", { replace: true })}
          mb="30px"
        >
          Return to Home
        </Button>

        {resultCats.length ? (
          <Stack spacing={3} direction="row">
            {resultCats.map((tc) => {
              return (
                <ProfileCard
                  currCat={tc}
                  disableClick={true}
                  profile={false}
                  handleViewProfile={handleViewProfile}
                />
              );
            })}
          </Stack>
        ) : (
          <Heading>Oops! now empty search are allowed</Heading>
        )}
      </div>
    </>
  );
};
