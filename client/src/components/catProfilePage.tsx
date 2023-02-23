import React from "react";
import { useLocation } from "react-router-dom";

export const CatProfilePage = (props: any) => {
  const { state } = useLocation();
  const baseUrl = props.props.url;
  return (
    <>
      <h1> Cat Profile {baseUrl}</h1>
    </>
  );
};
