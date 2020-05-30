import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { fetchCategorys, hideLoading, showLoading } from "../../../actions";
import Sidebar from "../../../components/Admin/Navigation/Sidebar";
import Topbar from "../../../components/Admin/Navigation/Topbar";
import PageHeading from "../../../components/Admin/PageHeading";
import Loading from "../../../components/Loading";
import PATHS from "../../../contants/paths";
import ShowCategory from "./ShowCategory";
// import callApi from "../../../utils/callApi";
function Category() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category.categories);
  const isLoading = useSelector((state) => state.loading.isLoading);
  useEffect(() => {
    dispatch(showLoading());
    dispatch(fetchCategorys())
      .then((res) => {
        dispatch(hideLoading());
      })
      .catch((error) => {
        dispatch(hideLoading());
      });
  }, []);
  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            <div className="container-fluid">
              <PageHeading title="Category" />
              <div className="mb-3 d-flex justify-content-end">
                <Link to={PATHS.CREATECATEGORY} className="btn btn-success">
                  Tạo mới
                </Link>
              </div>
              <div className="row">
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  style={{ textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên category</th>
                      <th>Slug</th>
                      <th>Thao Tác</th>
                    </tr>
                  </thead>
                  {category &&
                    category.map((category) => {
                      return (
                        <ShowCategory key={category._id} category={category} />
                      );
                    })}
                </Table>
                <Loading isLoading={isLoading} />
              </div>
              <div className="row">
                <div className="col-xl-8 col-lg-6">{/* <ChartLine /> */}</div>
                <div className="col-xl-4 col-lg-6">{/* <ChartDonut /> */}</div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
              </div>
            </div>
          </footer>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Category;
