import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="form-group">
      <input
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="d-grid gap-2">
        <button className="btn btn-primary">Gui mat khau</button>
      </div>
    </div>
  );
};
export default ForgotPasswordForm;
