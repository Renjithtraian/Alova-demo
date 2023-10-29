import React from "react";
import { useUserRequest } from "../hooks";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { loading, data } = useUserRequest(id);
  return <div>{loading ? <h4>Loading....</h4> : <h1>{data?.name}</h1>}</div>;
};

export default Details;
