import React from "react";
import styles from "./Banner.module.css";

const banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={props.handleOnclick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default banner;
