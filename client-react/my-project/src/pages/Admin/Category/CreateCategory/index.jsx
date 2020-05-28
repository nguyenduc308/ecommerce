import React from "react";
import InputField from "../../../../components/Admin/InputField";
import * as Yup from "yup";
import Topbar from "../../../../components/Admin/Navigation/Topbar";
import Sidebar from "../../../../components/Admin/Navigation/Sidebar";
// import { Link } from "react-router-dom";
import PATHS from "../../../../contants/paths";
import { createCategory } from "../../../../actions";
import PageHeading from "../../../../components/Admin/PageHeading";
import { Formik, Form, FastField } from "formik";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function CreateCategory(props) {
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //   },
  //   validationSchema: Yup.object({
  //     ctName: Yup.string().required("Bạn không được để trống"),
  //   }),
  //   onSubmit: (values) => {
  //     // console.log(values);
  //   },
  // });
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            <div className="container-fluid">
              <PageHeading title="Category" />
              {/* <div className="mb-3 d-flex justify-content-end">
                <Link to={PATHS.CREATECATEGORY} className="btn btn-success">
                  Tạo mới
                </Link>
              </div> */}
              <div className="row">
                <div className="category">
                  <div className="inputField">
                    <Formik
                      initialValues={{
                        name: "",
                      }}
                      validationSchema={Yup.object().shape({
                        name: Yup.string().required(
                          "Tên danh mục không được để trống"
                        ),
                      })}
                      onSubmit={(values) => {
                        dispatch(createCategory(values));
                        history.push(PATHS.CATEGORY);
                      }}
                    >
                      {(formikProps) => (
                        <Form>
                          <FastField
                            name="name"
                            component={InputField}
                            label="Tên danh mục"
                            // placeholder="Tên danh mục"
                          ></FastField>

                          <Button variant="success">Tạo danh mục</Button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
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

export default CreateCategory;
