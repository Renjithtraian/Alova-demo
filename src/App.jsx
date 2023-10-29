import "./App.css";
import AlovaSmaple from "./components/AlovaSample";
import AlovaSmapleTwo from "./components/AlovaSampleTwo";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
// import AlovaPagination from "./components/AlovaPagination";
import Watcher from "./components/Watcher";

function App() {
  return (
    <>
      {/* <AlovaSmaple/> */}
      <Routes>
        {/* <Route path="/" element={<AlovaSmapleTwo />} /> */}
        <Route path="/" element={<Watcher />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
