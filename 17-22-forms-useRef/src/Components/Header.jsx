import styles from "./Header.module.css";
import { LuListTodo } from "react-icons/lu";
function Header() {
  return <h1 className={styles.todoHeading}>Todo React App <LuListTodo/></h1>;
}
export default Header;
