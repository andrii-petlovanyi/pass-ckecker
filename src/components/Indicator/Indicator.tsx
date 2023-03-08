import React from "react";
import cn from "classnames";

import styles from "./Indicator.module.css";

interface IIndicator {
  error: string;
}

export const Indicator = ({ error }: IIndicator): JSX.Element => {
  return (
    <div className={styles.container}>
      <div
        className={cn(styles.indicator, {
          [styles.red]: error == "weak" || error == "easy",
          [styles.yellow]: error == "medium",
          [styles.green]: error == "strong",
        })}
      ></div>
      <div
        className={cn(styles.indicator, {
          [styles.red]: error == "weak",
          [styles.yellow]: error == "medium",
          [styles.green]: error == "strong",
        })}
      ></div>
      <div
        className={cn(styles.indicator, {
          [styles.red]: error == "weak",
          [styles.green]: error == "strong",
        })}
      ></div>
    </div>
  );
};
