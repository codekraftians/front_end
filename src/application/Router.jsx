import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

function Router() {
  return (
    <BrowserRouter>
      <div data-theme="light">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Router;