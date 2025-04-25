import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Explore from "../pages/Explore";

function Router() {
  return (
    <BrowserRouter>
      <div data-theme="light">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Router;