import styles from "./Container.module.css";
// const Container = ({children}) =>{
const Container = (props) => {
  // return <div className={styles.Container}>{children}</div>
  return <div className={styles.Container}>{props.children}</div>;
};
export default Container;
