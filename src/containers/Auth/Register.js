import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <Header />
      <div className="main">
        <RegisterForm />
      </div>

      <Footer />
    </>
  );
};
export default Register;
