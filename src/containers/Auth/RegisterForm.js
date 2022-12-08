const RegisterForm = () => {
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
        <div className="col-6 form-group">
          <label>Nhap lai mat khau</label>
          <input type={"password"} className="form-control" />
        </div>
        <div className="col-6 d-grid gap-2 my-1">
          <button className="btn btn-primary" type="button">
            Dang ky
          </button>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
