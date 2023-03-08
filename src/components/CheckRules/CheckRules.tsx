import React from "react";

import styles from "./CheckRules.module.css";

export const CheckRules = (): JSX.Element => {
  return (
    <div className={styles.rules}>
      <h2 className={styles.rules__title}>Validation display conditions:</h2>
      <ul className={styles.rules__list}>
        <li>
          <p>
            If the field is empty, <span className={styles.count}> all</span>{" "}
            sections are gray
          </p>
        </li>
        <li>
          <p>
            If the field has less than 8 characters,
            <span className={styles.count}> all</span> sections are red
          </p>
        </li>
        <li>
          <p>
            If the password is easy - the
            <span className={styles.count}> first</span> section is red the rest
            are gray
          </p>
        </li>
        <li>
          <p>
            If the password is medium - the{" "}
            <span className={styles.count}>first</span> two sections are yellow
            the last one is gray
          </p>
        </li>
        <li>
          <p>
            If the password is strong, <span className={styles.count}>all</span>{" "}
            sections are green
          </p>
        </li>
      </ul>
    </div>
  );
};
