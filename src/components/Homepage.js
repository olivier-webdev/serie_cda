import styles from "./Homepage.module.scss";
import Serie from "./Serie";
import { series } from "../data";
import { useState } from "react";

export default function Homepage() {
  const [filter, setFilter] = useState("");

  const handleInput = (e) => {
    const search = e.target.value;
    setFilter(search.trim().toLowerCase());
  };
  return (
    <div className=" flex-fill container">
      <h1 className="mb20">Découvrez nos dernières critiques</h1>
      <div className={`card p20 mb20 d-flex flex-column ${styles.contentCard}`}>
        <div
          className={`d-flex justify-content-center align-items-center my30 ${styles.searchBar}`}
        >
          <i className="fas fa-magnifying-glass mr10"></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className={`${styles.grid}`}>
          {series
            .filter((serie) => serie.title.toLowerCase().includes(filter))
            .map((serie) => (
              <Serie key={serie.id} title={serie.title} image={serie.image} />
            ))}
        </div>
      </div>
    </div>
  );
}
