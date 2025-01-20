import styles from "./NoTask.module.css"
const NoTask = ({todoItems}) => {
  return todoItems.length == 0 && <h3 className={styles.noTask}>No Task Available</h3>
};

export default NoTask;
