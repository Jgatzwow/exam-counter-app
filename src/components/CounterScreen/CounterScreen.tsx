import React from "react";
import styles from "./CounterScreen.module.css";

type PropsType = {
  count: number;
  threshold: number;
  greeting: string;
  screenToggle: boolean;
};

export const CounterScreen = (props: PropsType) => {
  const { count, threshold, greeting, screenToggle } = props;
  const displayCount = count.toLocaleString();
  const className = count === threshold ? styles.red__counter : styles.counter;

  if (!screenToggle) return <div>{greeting}</div>;
  return <div className={className}>{displayCount}</div>;
};
