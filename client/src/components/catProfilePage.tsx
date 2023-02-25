import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileCard } from "src/layouts/profile-card";

export const CatProfilePage = (props: any) => {
  const { state } = useLocation();
  const navigate = useNavigate()
  return (
    <>
      <Container maxW="800px" mt='25px'>
        <Box maxW='100%'>
          <Button leftIcon={<ChevronLeftIcon />}  onClick={ () => navigate('/', {replace: true})}> Return to Home</Button>
          <ProfileCard currCat={state} disableClick={true} profile={true} />
        </Box>
      </Container>
    </>
  );
};
