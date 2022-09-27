import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Process } from "./components/Process";
import { ChoosePlan } from "./components/Process/steps/choose-plan";
import { ConnectSpotify } from "./components/Process/steps/connect-spotify";
import { Final } from "./components/Process/steps/final";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Process />} path="/process">
          <Route path="connect-spotify" element={<ConnectSpotify />} />
          <Route path="choose-plan" element={<ChoosePlan />} />
          <Route path="final" element={<Final />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
