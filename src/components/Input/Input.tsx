import React, { useState } from "react";
import { passCriteria } from "../../helpers/passCriteria";

import { BsEye, BsEyeSlash } from "react-icons/bs";

import styles from "./Input.module.css";

interface IInputProps {
  setError: (error: string) => void;
}

export const Input = ({ setError }: IInputProps): JSX.Element => {
  const [show, setShow] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.length) return setError("");

    for (const { pattern, message } of passCriteria) {
      if (pattern.test(value)) {
        setError(message);
        return;
      }
    }

    setError("week");
  };

  return (
    <>
      <label className={styles.container}>
        <input
          onChange={changeHandler}
          name={"password"}
          type={show ? "text" : "password"}
          className={styles.password}
        />
        <button
          type="button"
          className={styles.icon}
          aria-label="Button show or hide password"
          onClick={() => setShow(!show)}
        >
          {show ? <BsEyeSlash /> : <BsEye />}
        </button>
      </label>
    </>
  );
};
