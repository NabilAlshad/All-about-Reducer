import React, { useEffect, useReducer } from "react";
const initialState = {
  loading: true,
  posts: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        posts: action.result,
      };
    case "error":
      return {
        loading: false,
        error: "there is an error in fetching",
        posts: {},
      };
    default:
      return state;
  }
};

const GetPost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "success",
          result: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "error",
        })
      );
  });
  return (
    <div>
      {state.loading ? ".....loading" : state.posts.title}
      {state.error ? "there is an error" : null}
    </div>
  );
};

export default GetPost;
