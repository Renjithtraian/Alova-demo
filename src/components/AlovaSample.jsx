import { createAlova, useRequest } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import ReactHook from "alova/react";

// 1. Create an alova instance
const alovaInstance = createAlova({
  // ReactHook is used to create ref status, including request status loading, response data data, request error object error, etc.
  statesHook: ReactHook,
  // request adapter, it is recommended to use the fetch request adapter
  requestAdapter: GlobalFetch(),
  responded: (response) => response.json(),
});

const AlovaSmaple = () => {
  // 2. Use the alova instance to create a method and pass it to useRequest to send the request
  const { loading, data, error } = useRequest(
    alovaInstance.Get("https://jsonplaceholder.typicode.com/users", {
      params: {
        id: 1,
      },
    })
  );
  console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <ul>
        {
            data?.map((list) => (
                <li>{list.name}</li>
            ))
        }
    </ul>
  );
};

export default AlovaSmaple;
