const RegisterForm = () => {
  return (
    <>
      <div className="container login-form-container">
        <div className="form-group">
          <label>Email</label>
          <input type={"email"} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type={"password"} className="form-control" />
        </div>
        <div className="form-group">
          <label>Nhap lai mat khau</label>
          <input type={"password"} className="form-control" />
        </div>
        <div class="d-grid gap-2 my-1">
          <button class="btn btn-primary" type="button">
            Dang ky
          </button>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
