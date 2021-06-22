import { useContext } from "react";
import AppContext from "./AppContext";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = () => {
  const ctx = useContext(AppContext);
  return (
    <div className={classes.backdrop} onClick={ctx.cancelModal}>
      <Card className={classes.modal}>
        <header>
          <h2>{ctx.error.title}</h2>
        </header>
        <div>
          <p>{ctx.error.message}</p>
        </div>
        <footer>
          <Button onClick={ctx.cancelModal}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
