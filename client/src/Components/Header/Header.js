import React from "react";
import styles from "./Header.module.css";
import {ReactComponent as Chef} from "../../assets/img/chef-hat.svg"

export const Header = () => {
  return <h1 className={styles.mainHeader}>My CookBook App <Chef className={styles.headerIcon}/></h1>;
};
