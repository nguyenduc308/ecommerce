import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PATHS from "../contants/paths";
import HomePageAdmin from "../pages/Admin/HomePageAdmin";
import Category from "../pages/Admin/Category";
import CreateCategory from "../pages/Admin/Category/CreateCategory";
import EditCategory from "../pages/Admin/Category/EditCategory";
import Dashboard from "../pages/Admin/Dashboard";
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
  {
    path: PATHS.HOMEADMIN,
    exact: true,
    private: false,
    main: HomePageAdmin,
  },
  {
    path: PATHS.DASHBOARD,
    exact: true,
    private: false,
    main: Dashboard,
  },
  {
    path: PATHS.CATEGORY,
    exact: true,
    private: false,
    main: Category,
  },
  {
    path: PATHS.CREATECATEGORY,
    exact: true,
    private: false,
    main: CreateCategory,
  },
  {
    path: PATHS.EDITCATEGORY,
    exact: true,
    private: false,
    main: EditCategory,
  },
];
