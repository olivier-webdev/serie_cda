import styles from "./Header.module.scss";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <div className="flex-fill">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <button className="mr10 btn btn-primary">
          <i className="fas fa-star mr10"></i>
          <span>Favorites</span>
        </button>
        <button className="mr10 btn btn-primary-reverse">
          <i className="fas fa-right-to-bracket mr10"></i>
          <span>Login</span>
        </button>
      </ul>
    </header>
  );
}
