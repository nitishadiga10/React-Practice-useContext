import { useContext } from "react";
import AppContext from "./AppContext";

import classes from "./Users.module.css";

const Users = () => {
  const ctx = useContext(AppContext);
  console.log(ctx);
  return (
    <ul className={classes.users}>
      {ctx.userList.map((user) => (
        <li key={user.key}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default Users;
