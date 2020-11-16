import React from "react";
import "../css/Search.css";
const Search = (props) => (
  <form
    onSubmit={(e) => {
      props.handleFormSubmit(e);
    }}
  >
    <span>
      <input
        onChange={(e) => {
          props.handleInputChange(e.target);
        }}
        type="text"
        value={props.input}
        placeholder="ibm"
      />
      <button type="submit" name="button">
        Search
      </button>
    </span>
  </form>
);

export default Search;
