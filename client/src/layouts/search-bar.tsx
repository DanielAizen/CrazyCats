import { SearchIcon } from "@chakra-ui/icons";
import { Stack, FormControl, Input, Button } from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";

export const SearchBar = (props:any) => {
  return (
    <Stack spacing={2} direction="row" mt="30px">
      <Form>
        <FormControl>
          <Input
            type="text"
            name="searchBar"
            onChange={(e) => props.setSearchName(e.target.value)}
            defaultValue={props.defaultValue}
          />
        </FormControl>
      </Form>
      <Button leftIcon={<SearchIcon />} onClick={props.handleSearchCat}>
        search
      </Button>
    </Stack>
  );
};
