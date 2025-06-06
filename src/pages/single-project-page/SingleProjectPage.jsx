import React, { useEffect } from "react";
import WithTransition from "../with-transition/WithTransition";
import { useParams } from "react-router";

export const SingleProjectPage = WithTransition(() => {
  const { name } = useParams();

  useEffect(() => {
    console.log(name);
  });

  return "";
});
