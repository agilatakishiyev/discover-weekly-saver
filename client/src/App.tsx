import React from "react";
import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Header />

      <Main />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
