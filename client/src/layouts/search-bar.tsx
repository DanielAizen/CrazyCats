import { SearchIcon } from "@chakra-ui/icons";
import { Stack, FormControl, Input, Button, FormHelperText, FormErrorMessage } from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom";

export const SearchBar = (props: any) => {
  const [searchName, setSearchName] = useState("");
  return (
    <Stack spacing={2} direction="row" mt="30px">
      <Form>
        <FormControl>
          <Input
            type="text"
            name="searchBar"
            onChange={(e) => setSearchName(e.target.value)}
            defaultValue={searchName}
            value = {searchName}
            required={true}
          />
        </FormControl>
      </Form>
      <Button
        leftIcon={<SearchIcon />}
        onClick={() => props.navigate("/results", { state: searchName })}
      >
        search
      </Button>
    </Stack>
  );
};
