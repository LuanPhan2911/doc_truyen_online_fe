import { createSlice } from "@reduxjs/toolkit";
import LoginForm from "../containers/auth/LoginForm";
import RegisterForm from "../containers/auth/RegisterForm";
import VerifyEmailForm from "../containers/auth/VerifyEmailForm";
import ForgotPasswordForm from "../containers/auth/ForgotPasswordForm";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    isShow: false,
    item: {},
    menu: [
      {
        id: "login",
        name: "Đăng nhập",
        component: <LoginForm />,
      },
      {
        id: "register",
        name: "Đăng ký",
        component: <RegisterForm />,
      },
      {
        id: "verify",
        name: "Xác thực email",
        component: <VerifyEmailForm />,
      },
      {
        id: "forgot-password",
        name: "Quên mật khẩu",
        component: <ForgotPasswordForm />,
      },
    ],
  },
  reducers: {
    handleShow: (state, actions) => {
      state.isShow = true;
      state.item = state.menu.find((item) => item.id === actions.payload);
    },
    handleClose: (state, actions) => {
      state.isShow = false;
      state.item = {};
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleShow, handleClose, setAuth } = authSlice.actions;

export default authSlice.reducer;
