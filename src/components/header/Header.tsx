import { FC } from "react";
import styles from "./Header.module.scss";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div className={styles.header}>
      <button className={styles.btn}>MENU</button>
      <button className={styles.btn}>RESTART</button>
    </div>
  );
};

export default Header;
