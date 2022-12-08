const LoginForm = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="col-6 form-group">
          <label>Email</label>
          <input type={"email"} className="form-control" />
        </div>
        <div className="col-6 form-group">
          <label>Password</label>
          <input type={"password"} className="form-control" />
        </div>
        <div className="col-6 form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">Ghi nho tai khoan</label>
        </div>
        <div className="col-6 d-grid gap-2">
          <button className="btn btn-primary" type="button">
            Dang nhap
          </button>
        </div>

        <div className="np-account">
          <p>Ban chua co tai khoan</p>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
