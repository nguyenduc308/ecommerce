import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import {
  deleteCategory,
  fetchCategorys,
  hideLoading,
  showLoading,
} from "../../../../actions";
import PATHS from "../../../../contants/paths";

// import callApi from "../../../utils/callApi";
function ShowCategory({ category }) {
  const dispatch = useDispatch();
  const history = useHistory();
  function removeCategory() {
    if (window.confirm("Bạn có chắc muốn xóa không?")) {
      dispatch(showLoading());
      dispatch(deleteCategory(category.slug))
        .then((res) => {
          dispatch(fetchCategorys());
          dispatch(hideLoading());
        })
        .catch((error) => {
          dispatch(hideLoading());
        });
    }
    history.push(PATHS.CATEGORY);
  }

  return (
    <>
      <tbody key={category._id}>
        <tr>
          <td>{category._id}</td>
          <td>{category.name}</td>
          <td>{category.slug}</td>
          <td>
            <Link
              to={`/admin/category/edit/${category.slug}`}
              className="btn btn-success mr-3"
            >
              Sửa
            </Link>

            <Button
              className="btn btn-success"
              onClick={removeCategory}
              type="submit"
            >
              Xóa
            </Button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default ShowCategory;
