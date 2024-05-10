import { useEffect, useReducer, useRef, useContext } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css";
import classNames from "classnames";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";
import Input from "../Input/Input";
import { UserContext } from "../../context/user.context";

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();
  const { userId } = useContext(UserContext);

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!isValid.date || !isValid.text || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit, onSubmit, values]);

  useEffect(() => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { userId },
    });
  }, [userId]);

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  return (
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>
      <div>
        <Input
          type="text"
          name="title"
          value={values.title}
          onChange={onChange}
          ref={titleRef}
          isValid={isValid.title}
          appearance="title"
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="date" className={styles["form-label"]}>
          <img src="/calendar.svg" alt="calendar" />
          <span>Дата</span>
        </label>
        <Input
          type="date"
          name="date"
          id="date"
          ref={dateRef}
          isValid={isValid.date}
          onChange={onChange}
          value={values.date}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles["form-label"]}>
          <img src="/folder.svg" alt="tag" />
          <span>Метки</span>
        </label>
        <Input
          type="text"
          name="tag"
          id="tag"
          onChange={onChange}
          value={values.tag}
        />
      </div>
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="10"
        ref={textRef}
        value={values.text}
        onChange={onChange}
        className={classNames(styles["input"], {
          [styles["invalid"]]: !isValid.text,
        })}
      ></textarea>
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;
