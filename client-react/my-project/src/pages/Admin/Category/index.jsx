import React, { useEffect } from "react";
import Topbar from "../../../components/Admin/Navigation/Topbar";
import Sidebar from "../../../components/Admin/Navigation/Sidebar";
import { Table, Button } from "reactstrap";
// import CardInfo from "../../components/Cards/Info";
// import ChartDonut from "../../components/Charts/Donut";
// import ChartLine from "../../components/Charts/Line";
import { fetchCategorys, deleteCategory } from "../../../actions";
import PageHeading from "../../../components/Admin/PageHeading";
import { Link } from "react-router-dom";
import PATHS from "../../../contants/paths";
import { useDispatch, useSelector } from "react-redux";
// import callApi from "../../../utils/callApi";
function Category() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategorys());
  }, []);
  const category = useSelector((state) => state.category);
  if (category.categories) {
    var elements = category.categories.map((category) => {
      return (
        <tbody key={category._id}>
          <tr>
            <td>{category._id}</td>
            <td>{category.name}</td>
            <td>{category.slug}</td>
            <td>
              {/* <Link
                to={`${PATHS.EDITCATEGORY}/${category._id}`}
                className="btn btn-success mr-3"
              >
                Sửa
              </Link> */}
              {/* <Button
                variant="danger"
                onClick={dispatch(deleteCategory(category.slug))}
              >
                Xóa
              </Button> */}
            </td>
          </tr>
        </tbody>
      );
    });
  }

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
                  {elements}
                </Table>
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
