import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "../../Style/Form.module.css";
export default function Form({ SetTask, Task, SetTasks, Tasks, inputRef }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (Task.name.length > 0) {
      SetTasks((prev) => {
        const updateTasks = [...prev, Task];
        localStorage.setItem("tasks", JSON.stringify(updateTasks));
        return updateTasks;
      });
      SetTask({ name: "", done: false, id: "", update: false });
    }
  }
  return (
    <div className={styles.FromContainer}>
      <form className={styles.FormElement} onSubmit={handleSubmit}>
        <input
          required
          ref={inputRef}
          value={Task.name}
          onChange={(e) => {
            SetTask({
              name: e.target.value,
              done: false,
              id: `${Math.floor(Math.random() * 10)}:${new Date().getTime()}`,
              update: false,
            });
          }}
          type="text"
          placeholder="Add Task"
        />

        <button type="submit">
          <FontAwesomeIcon icon={faPlus} />{" "}
        </button>
      </form>
    </div>
  );
}
