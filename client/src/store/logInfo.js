import React from "react";

// Context
const State = React.createContext();
const Dispatch = React.createContext();

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURR_USER":
      console.log("STATE: ", state, "ACTION: ", action);
      return {
        userInfo: { ...action.userInfo },
        isLoggedIn: action.isLoggedIn,
      };

    case "LOG_OUT":
      return {
        userInfo: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    userInfo: {},
    isLoggedIn: false,
  });

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

// Export
export const LogInfo = {
  State,
  Dispatch,
  Provider,
};
