import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.h2}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
export default Section;
