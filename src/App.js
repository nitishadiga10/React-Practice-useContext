import classes from "./App.module.css";
import InputForm from "./InputForm";
import Users from "./Users";
import { useContext } from "react";
import ErrorModal from "./ErrorModal";
import AppContext from "./AppContext";
import Card from "./Card";

function App() {
  const ctx = useContext(AppContext);
  let UserList = <p>No Users to Show!</p>;

  if (ctx.userList.length !== 0) {
    UserList = <Users></Users>;
  }

  return (
    <div >
      {ctx.error && <ErrorModal></ErrorModal>}
      <InputForm></InputForm>
      <Card className= {classes.para}>
      {UserList}
      </Card>
    </div>
  );
}

export default App;
