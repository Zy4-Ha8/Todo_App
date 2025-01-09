import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Form.module.css";
export default function Form({ SetTask, Task, SetTasks, Tasks }) {
  console.log(Task, Tasks);
  return (
    <div className={styles.FromContainer}>
      <form
        className={styles.FormElement}
        onSubmit={(e) => {
          e.preventDefault();
          SetTasks([...Tasks, Task]);
          SetTask({name:'', done:false});
        }}
      >
        <input
          value={Task.name}
          onChange={(e) => {
            SetTask({name:e.target.value, done:false});
          }}
          type="text"
          placeholder="Add Some Task"
        />

        <button type="submit">
          <FontAwesomeIcon icon={faPlus} />{" "}
        </button>
      </form>
    </div>
  );
}
