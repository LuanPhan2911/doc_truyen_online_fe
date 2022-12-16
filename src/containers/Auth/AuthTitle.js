const Title = ({ isActive, handleDynamicModal }) => {
  return (
    <ul className="list-unstyled d-flex flex-row justify-content-around">
      <li>
        <button
          className={isActive("login") ? "btn-login active" : "btn-login"}
          onClick={() => handleDynamicModal("login")}
        >
          Dang nhap
        </button>
      </li>
      <li>
        <button
          className={
            isActive("register") ? "btn-register active" : "btn-register"
          }
          onClick={() => handleDynamicModal("register")}
        >
          Dang ky
        </button>
      </li>
    </ul>
  );
};
const TitleVerifyEMail = () => {
  return <>Xac nhan email</>;
};
const TitleForgotPassword = () => {
  return <>Quen mat khau</>;
};
export { Title, TitleVerifyEMail, TitleForgotPassword };
