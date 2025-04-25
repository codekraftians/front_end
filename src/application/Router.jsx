import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Explore from "../pages/Explore";
import Register from "../pages/Register";

function Router() {
  return (
    <BrowserRouter>
      <div data-theme="light">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Router;