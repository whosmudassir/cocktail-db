import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context.js";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.lenght < 1) {
    return (
      <h2 className="nococktail">No cocktails matched your search criteria</h2>
    );
  }

  return <div></div>;
};

export default CocktailList;
