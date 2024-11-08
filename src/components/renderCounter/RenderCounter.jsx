import { useRenderCounter } from "../../hooks/useRenderCounter";

import styles from "./RenderCounter.module.css";

export const RenderCounter = ({ label, className }) => {
  const [count] = useRenderCounter(label);
  const classes = `${styles.counter} ${className}`;
  return <div className={classes}>{count}</div>;
};
