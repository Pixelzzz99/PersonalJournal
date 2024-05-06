import styles from "./Header.module.css";

function Header({ children }) {
  return (
    <>
      <img className={styles.logo} src="/download.svg" alt="logo" />
    </>
  );
}

export default Header;
