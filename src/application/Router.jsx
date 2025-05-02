import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Explore from "../pages/Explore";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CreateEventData from "../components/CreateEventData";
import UpdateEventData from "../components/UpdateEventData";

function Router() {
  return (
    <BrowserRouter>
      <div data-theme="light">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events/create" element={<CreateEventData />} />
          <Route path="/events/update" element={<UpdateEventData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Router;
