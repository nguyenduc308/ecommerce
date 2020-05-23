import React from "react";
import "./Loading.scss";
// import { useSelector } from "react-redux";
import loading from "../../assets/images/loading.gif";
const Loading = ({ isLoading = false }) => {
  //   const isLoading = useSelector((state) => state.isLoading);
  return (
    <div className={`${isLoading === true ? "loading isLoading" : "loading"}`}>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
