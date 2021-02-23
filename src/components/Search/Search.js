import React from "react";
import "./css/Search.css";
const Search = ({ handleFormSubmit, handleInputChange, input }) => (
  <form
    onSubmit={(e) => {
      handleFormSubmit(e);
    }}
  >
    <span>
      <input
        onChange={(e) => {
          handleInputChange(e.target);
        }}
        type="text"
        value={input}
        placeholder="ibm"
      />
      <button type="submit" name="button">
        Search
      </button>
    </span>
  </form>
);

export default Search;
