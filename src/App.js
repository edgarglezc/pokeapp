import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchButton from "./components/SearchButton";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");

  async function handleSubmit() {
    try {
      const data = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${value}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Pokemomos</h1>
      <SearchBar value={value} setValue={setValue} />
      <SearchButton handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
