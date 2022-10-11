import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import { Container } from "@mui/material";
const App: React.FC = () => {
  return (
    <Container>
      <div className="App .MuiContainer-root ">
        <Header />
        <h1>Hello</h1>
        <Map />
      </div>
    </Container>
  );
};

export default App;
