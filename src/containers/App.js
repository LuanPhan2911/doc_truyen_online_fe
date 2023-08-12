import { useEffect } from "react";
import Root from "../routes/Root";
import { handleGetUserService } from "../services/AuthServices";
import "./App.scss";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "../features/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    handleCheckUserLogin();
  }, []);
  const handleCheckUserLogin = async () => {
    try {
      let res = await handleGetUserService();
      if (res?.success) {
        let user = res.data;
        dispatch(userLogin(user));
      }
    } catch (error) {
      dispatch(userLogout());
    }
  };
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
