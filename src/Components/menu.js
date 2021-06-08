import styles from "./menu.module.css";
const Menu = (props) => {
  return (
    <div onClick={props.onClick} className={styles.menu}>
      <hr />
      <hr />
      <hr />
    </div>
  );
};
export default Menu;
