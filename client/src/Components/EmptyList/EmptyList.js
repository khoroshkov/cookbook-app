import React from "react";
import styles from "./EmptyList.module.css";

export const EmptyList = () => (
  <div className={styles.container}>
    <h3 className={styles.emptyListTitle}>
      Ooops... It seems there no saved recipes...
    </h3>
    <p className={styles.emptyListText}>
      Try to create You best recipes cook book
    </p>
  </div>
);
