import { createAlova, useRequest } from 'alova';
import GlobalFetch from "alova/GlobalFetch";
import ReactHook from "alova/react";

// 1. Create an alova instance
export const alovaInstance = createAlova({
  baseURL:'https://jsonplaceholder.typicode.com',
  // ReactHook is used to create ref status, including request status loading, response data data, request error object error, etc.
  statesHook: ReactHook,
  // request adapter, it is recommended to use the fetch request adapter
  requestAdapter: GlobalFetch(),
  responded: (response) => response.json(),
});

export const useUserRequest = (id) => {
  
  const userDetail = alovaInstance.Get(`/users/${id}`);

  const { loading, data, error, onSuccess, onError, onComplete, send, abort, update } = useRequest(userDetail);

  return {
    loading,
    data,
    error,
    onSuccess,
    onError,
    onComplete,
    send,
    abort,
    update,
  };
};