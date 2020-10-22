import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
const Statistics = ({ good, neutral, bad, total, positivePercantage }) => {
  return (
    <>
      <p className={styles.title}>
        Good: <span className={styles.item}>{good}</span>
      </p>
      <p className={styles.title}>
        Neutral: <span className={styles.item}>{neutral}</span>
      </p>
      <p className={styles.title}>
        Bad: <span className={styles.item}>{bad}</span>
      </p>
      <p className={styles.title}>
        Total: <span className={styles.item}>{total}</span>
      </p>
      <p className={styles.title}>
        <span className={styles.item}>{positivePercantage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercantage: PropTypes.number,
};

export default Statistics;
