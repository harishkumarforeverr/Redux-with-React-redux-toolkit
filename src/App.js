// import React, { useEffect } from "react";
// import "./App.scss";
// import { FetchJsonPlaceholderData } from "./Store/createAsyncThunk/Json_placeholder_slice";
// import { useSelector, useDispatch } from "react-redux";

// const App = () => {
//   const posts = useSelector((state) => state?.post?.postList);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(
//       FetchJsonPlaceholderData({
//         name: "hatish",
//         age: 20,
//       })
//     );
//   }, []);
//   console.log(posts);
//   return (
//     <div
//       style={{
//         textAlign: "left",
//         width: "70%",
//         margin: "0 auto",
//       }}
//       className="App"
//     >
//       <h1> Posts </h1>
//       {posts?.slice(0, 5).map((post) => (
//         <h1 key={post.id}>
//           {" "}
//           {post.id}-{post.title}{" "}
//         </h1>
//       ))}
//     </div>
//   );
// };

// export default App;

// /###########################/################## These Code for Create Slice

import React, { useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./Store/CreateSlice/store";
const App = () => {
  const counter = useSelector((state) => state?.CounterSlice?.counter);
  console.log(counter);
  const dispatch = useDispatch();
  const ReduxThunk = () => {
    console.log("working 1");
    return (dispatch) => {
      console.log("working 2");
      dispatch(increment());
    };
  };
  return (
    <div className="App">
      <h1> Counter : {counter}</h1>
      <h1>
        <button
          onClick={() => {
            // we need to call the action () then only they will invove as shown in the bwelow
            dispatch(ReduxThunk());
          }}
        >
          {" "}
          +{" "}
        </button>{" "}
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          {" "}
          -{" "}
        </button>{" "}
        <button
          onClick={() => {
            dispatch(
              incrementByAmount({
                value: 100,
              })
            );
          }}
        >
          {" "}
          incrementBy100{" "}
        </button>
      </h1>
    </div>
  );
};

export default App;

/// ######################### These below code is for createReducer folder(object nottation and Builder Notataion )
// import React from "react";
// import "./App.scss";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "./Store/createAction/Action";
// const App = () => {
//   const counter = useSelector((state) => state?.counter?.count);
//   console.log(counter);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <h1> Counter : {counter}</h1>
//       <h1>
//         <button
//           onClick={() => {
//             // we need to call the action () then only they will invove as shown in the bwelow
//             dispatch(increment());
//           }}
//         >
//           {" "}
//           +{" "}
//         </button>{" "}
//         <button
//           onClick={() => {
//             dispatch(decrement());
//           }}
//         >
//           {" "}
//           -{" "}
//         </button>{" "}
//         <button
//           onClick={() => {
//             dispatch(
//               incrementByAmount({
//                 value: 100,
//               })
//             );
//           }}
//         >
//           {" "}
//           incrementBy100{" "}
//         </button>
//       </h1>
//     </div>
//   );
// };

// export default App;
