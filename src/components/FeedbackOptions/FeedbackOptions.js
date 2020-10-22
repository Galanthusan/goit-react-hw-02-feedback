import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <>
      <button
        className={styles.button}
        type="button"
        value={good}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        value={neutral}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        value={bad}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
