import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PATHS from "../contants/paths";

export const routers = [
  {
    path: PATHS.HOMEPAGE,
    exact: true,
    private: true,
    main: HomePage,
  },

  {
    path: PATHS.SIGNIN,
    exact: true,
    private: false,
    main: SignInPage,
  },

  {
    path: PATHS.SIGNUP,
    exact: false,
    private: false,
    main: SignUpPage,
  },
];
