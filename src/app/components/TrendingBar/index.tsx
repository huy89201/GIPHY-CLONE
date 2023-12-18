import styles from "./page.module.css";
import { HiOutlineTrendingUp } from "react-icons/hi";

export default function TrendingBar() {
  return (
    <div className={styles.TrendingBarWrapper}>
      <HiOutlineTrendingUp className={styles.TrendingBarIcon}/>
      <h3>Trending</h3>
    </div>
  );
}
