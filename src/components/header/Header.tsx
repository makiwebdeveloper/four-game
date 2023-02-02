import { FC } from "react";
import styles from "./Header.module.scss";

interface Props {
  restart: () => void;
}

const Header: FC<Props> = ({ restart }) => {
  return (
    <div className={styles.header}>
      <button className={styles.btn}>MENU</button>
      <button className={styles.btn} onClick={restart}>
        RESTART
      </button>
    </div>
  );
};

export default Header;
