import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Header />
      <div className="main">
        <LoginForm />
      </div>

      <Footer />
    </>
  );
};
export default Login;
