import React from "react";
import { useGlobalContext } from "../context.js";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div>
      <h1>search form</h1>
    </div>
  );
};

export default SearchForm;
