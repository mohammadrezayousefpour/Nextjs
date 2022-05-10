import React from "react";
import styles from "./Banner.module.css";

const banner = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={props.handleOnclick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default banner;
