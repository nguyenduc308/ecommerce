import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import PATHS from "../contants/paths";

export const privateRoutes = [
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
];
