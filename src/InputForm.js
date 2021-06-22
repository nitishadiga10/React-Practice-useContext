import { useState, useContext } from "react";
import AppContext from "./AppContext";
import Button from "./Button";
import Card from "./Card";
import classes from "./inputForm.module.css";

const InputForm = (props) => {
  const ctx = useContext(AppContext);

  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setenteredAge] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      ctx.addError("Wrong Name and Age!", "Enter valid Name and Age");
      return;
    }

    if (+enteredAge < 1) {
      ctx.addError("Wrong Age!", "Enter valid Age");
      return;
    }

    ctx.addUser(enteredUserName,enteredAge);

    console.log(ctx);

    setenteredUserName("");
    setenteredAge("");
  };

  const usernameHandler = (event) => {
    setenteredUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setenteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          onChange={usernameHandler}
          value={enteredUserName}
        ></input>
        <label htmlFor="age">Age (Years) </label>
        <input
          type="number"
          id="age"
          onChange={ageHandler}
          value={enteredAge}
        ></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default InputForm;
