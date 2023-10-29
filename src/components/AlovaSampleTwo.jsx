import { useRequest } from "alova";
import { useNavigate } from "react-router-dom";
import { alovaInstance } from "../hooks"

// export const alovaInstance = createAlova({
//     baseURL:'https://jsonplaceholder.typicode.com',
//     // ReactHook is used to create ref status, including request status loading, response data data, request error object error, etc.
//     statesHook: ReactHook,
//     // request adapter, it is recommended to use the fetch request adapter
//     requestAdapter: GlobalFetch(),
//     responded: (response) => response.json(),
//   });

const AlovaSmapleTwo = () => {
  const navigate = useNavigate();
  // 2. Use the alova instance to create a method and pass it to useRequest to send the request
  const { loading, data, error } = useRequest(alovaInstance.Get("users"));
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <ul>
        {data?.map((list) => (
          <li onClick={() => handleClick(list.id)}>{list.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AlovaSmapleTwo;
