import styles from "./Homepage.module.scss";
import Serie from "./Serie";
import { series } from "../data";

export default function Homepage() {
  return (
    <div className=" flex-fill container">
      <h1 className="mb20">Découvrez nos dernières critiques</h1>
      <div className={`card p20 ${styles.contentCard}`}>
        <div className={`${styles.grid}`}>
          {series.map((serie) => (
            <Serie key={serie.id} title={serie.title} image={serie.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
