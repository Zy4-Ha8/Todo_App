import styles from "./TasksList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function TaskList({ SetTask, Task, SetTasks, Tasks }) {
  const showTasks = Tasks.map((task) => {
    let classNamVar = task.done ? styles.Complete : "";
    function handleClick(name) {
      SetTasks(
        Tasks.map((T) => (T.name === name ? { ...T, done: !T.done } : T))
      );
    }
    return (
      <div>
        <span
          className={classNamVar}
          onClick={() => {
            handleClick(task.name);
          }}
        >
          {task.name}
        </span>
        <span>
          <FontAwesomeIcon
            onClick={() => {
              SetTasks(Tasks.filter((T) => T.name !== task.name));
            }}
            style={{ color: "red" }}
            icon={faTrash}
          />
        </span>
      </div>
    );
  });
  return <div className={styles.TaskListContainer}>{showTasks}</div>;
}
