import styles from "./Serie.module.scss";
import image from "../assets/images/breaking_bad.png";

export default function Serie() {
  return (
    <div className={`${styles.serie}`}>
      <div className={`${styles.imgContainer}`}>
        <img src={image} alt="oneSerie" />
      </div>
      <div
        className={`${styles.title} d-flex justify-content-center align-items-center`}
      >
        <h3>Breaking Bad</h3>
      </div>
    </div>
  );
}
