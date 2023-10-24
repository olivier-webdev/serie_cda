import styles from "./Homepage.module.scss";
import Serie from "./Serie";

export default function Homepage() {
  return (
    <div className=" flex-fill container">
      <h1 className="mb20">Découvrez nos dernières critiques</h1>
      <div className={`card p20 ${styles.contentCard}`}>
        <div className={`${styles.grid}`}>
          <Serie />
          <Serie />
          <Serie />
          <Serie />
          <Serie />
          <Serie />
          <Serie />
          <Serie />
          <Serie />
          <Serie />
        </div>
      </div>
    </div>
  );
}
