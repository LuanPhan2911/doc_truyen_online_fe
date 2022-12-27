import { useEffect } from "react";
import { handleGetUserService } from "../../services/AuthServices";

const Profile = () => {
  useEffect(() => {
    async function getUser() {
      let res = await handleGetUserService();
      console.log(res);
    }
    getUser();
    return () => {
      console.log("clean");
    };
  }, []);

  return <h1>Hello from profile</h1>;
};
export default Profile;
