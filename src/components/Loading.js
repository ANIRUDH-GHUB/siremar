import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = ({ isLoading, height, count = 1, children }) => {
  return isLoading ? <Skeleton height={height} count={count} /> : children;
};

export default Loading;
