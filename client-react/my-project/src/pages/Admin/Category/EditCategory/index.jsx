import { FastField, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import * as Yup from "yup";
import {
  editCategory,
  fetchCategory,
  fetchCategorys,
} from "../../../../actions";
import InputField from "../../../../components/Admin/InputField";
import Sidebar from "../../../../components/Admin/Navigation/Sidebar";
import Topbar from "../../../../components/Admin/Navigation/Topbar";
import PageHeading from "../../../../components/Admin/PageHeading";
// import { Link } from "react-router-dom";
import PATHS from "../../../../contants/paths";
function EditCategory(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchCategory(slug));
  }, []);

  let category = useSelector((state) => state.category.category);
  if (category.length < 1 || category == undefined) {
    console.log("nulll");
  } else {
  }

  // useEffect(() => {
  //   console.log(category.category.name);
  // }, [category]);
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
                        name: Yup.string().required(),
                      })}
                      onSubmit={(values) => {
                        // const { name } = values;
                        const formValues = {
                          ...values,
                          slug,
                        };
                        dispatch(editCategory(formValues)).then((res) => {
                          dispatch(fetchCategorys());
                        });
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
                          />

                          <Button variant="success" type="submit">
                            Sửa danh mục
                          </Button>
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

export default EditCategory;
