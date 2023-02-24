import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="root-layout">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading m="20px 0 0 10px" p="10px" alignSelf="center">
          🐱‍💻Crazy Cats!🐱‍💻
        </Heading>
      </Box>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
