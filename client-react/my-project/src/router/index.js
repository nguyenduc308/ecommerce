import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PATHS from "../contants/paths";

export const routers = [
  {
    path: PATHS.HOMEPAGE,
    exact: true,
    component: HomePage,
  },

  {
    path: PATHS.SIGNIN,
    exact: true,
    component: SignInPage,
  },

  {
    path: PATHS.SIGNUP,
    exact: true,
    component: SignUpPage,
  },
];
