import React, { useState } from "react";

const AppContext = React.createContext({
  userList: [],
  error: {},
  addUser: (name, age) => {},
  cancelModal: () => {},
  addError: (title, message) => {},
});

export const AppContextProvider = (props) => {
  const [userList, setUserList] = useState([]);
  const [errorState, setError] = useState();

  const addUserFunc = (name, age) => {
    setUserList((prevstate) => [
      ...prevstate,
      {
        key: Math.random().toString(),
        name: name,
        age: age,
      },
    ]);
  };
  const cancelModalHandler = () => {
    setError(null);
  };

  const errorHandler = (title1, message1) => {
    setError({ title: title1, message: message1 });
  };

  return (
    <AppContext.Provider
      value={{
        userList: userList,
        error: errorState,
        addUser: addUserFunc,
        cancelModal: cancelModalHandler,
        addError: errorHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
