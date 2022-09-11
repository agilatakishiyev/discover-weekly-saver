import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Process } from "./components/Process";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Process />} path="/process" />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
