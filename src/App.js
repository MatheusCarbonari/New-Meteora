import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DefaultPage from "./Pages/DefaultPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
