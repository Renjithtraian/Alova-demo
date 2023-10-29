import { useWatcher } from "alova";
import { useState } from "react";
import { alovaInstance } from "../hooks";

// create method instance
const filterTodoList = (keywords) => {
  return alovaInstance.Get("/users", {
    params: {
      keywords,
    },
  });
};

const Watcher = () => {
  const [keyword, setKeyword] = useState("");
  const {
    loading,
    data,
    error,
    // The first parameter must be a function that returns a method instance
  } = useWatcher(
    () => filterTodoList(keyword),

    // array of states being monitored, these state changes will trigger a request
    [keyword],
    {
      // Set 500ms anti-shake, if the keyword changes frequently, only send the request 500ms after the change stops
      debounce: 500,
      immediate: true,
    }
  );

  console.log(data, "data");

  return (
    <>
      {/* keyword changes with input content */}
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />

      {/* Render the filtered todo list */}
      {loading ? <div>Loading...</div> : null}
      {!loading ? (
        <>
          {data?.map((todo) => (
            <div key={todo.id}>
              <div class="todo-title">{todo.name}</div>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default Watcher;
