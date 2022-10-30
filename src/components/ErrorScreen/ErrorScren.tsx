import React, { FC } from "react";
import styles from "./ErrorScreen.module.css";

type PropsType = {
  error: string | null;
};

export const ErrorScreen: FC<PropsType> = (props) => {
  const { error } = props;
  return (
    <div className={"counter"}>
      <div className={styles.error}>{error}</div>
    </div>
  );
};
