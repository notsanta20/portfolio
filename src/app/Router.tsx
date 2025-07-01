import { Routes, Route } from "react-router";
import Home from "./routes/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
