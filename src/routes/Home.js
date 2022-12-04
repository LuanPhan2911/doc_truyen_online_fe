import { Routes, Route } from "react-router-dom";
import HomePage from "../containers/Home/HomePage";
const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
};
export default Home;
