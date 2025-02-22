import styles from "../../Style/TasksList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
export default function TaskList({ SetTask, Task, SetTasks, Tasks, inputRef }) {
  const [TaskEdited, setTaskEdited] = useState({
    name: "",
    id: "",
    done: "",
    update: "",
  });
  const TaskFromLocalStorge = JSON.parse(localStorage.getItem("tasks"));
  const TasksSorted = TaskFromLocalStorge?.slice().sort(
    (a, b) => Number(a.done) - Number(b.done)
  );
  const showTasks = TasksSorted?.map((task) => {
    let classNamVar = task.done ? styles.Complete : "";
    // handle complete the Task
    function handleComplete(id) {
      console.log(task.done);
      SetTasks(() => {
        const TaskUpdate = Tasks.map((T) =>
          T.id === id ? { ...T, done: !T.done } : T
        );
        localStorage.setItem("tasks", JSON.stringify(TaskUpdate));
        return TaskUpdate;
      });
    }

    // handle Delete the Task
    function handleDelete() {
      SetTasks(() => {
        const updateTasks = Tasks.filter((T) => T.id !== task.id);
        if (TaskFromLocalStorge.length > 0) {
          localStorage.setItem("tasks", JSON.stringify(updateTasks));
        } else {
          localStorage.removeItem("tasks");
        }
        return updateTasks;
      });
    }

    // handle Editing the Task
    function handleChagneCompleteState(id) {
      Tasks.map((task) => {
        if (task.id === id) {
          SetTasks(() => {
            const updateTask = Tasks.map((T) =>
              T.id === id ? { ...T, update: !T.update } : T
            );
            localStorage.setItem("tasks", JSON.stringify(updateTask));
            return updateTask;
          });
          setTaskEdited(task);
        }
      });
    }
    function handleEdit() {
      SetTasks(() => {
        const updateTask = Tasks.map((task) =>
          task.id === TaskEdited.id ? TaskEdited : task
        );
        localStorage.setItem("tasks", JSON.stringify(updateTask));
        return updateTask;
      });
    }
    return (
      <>
        <div>
          <span
            style={{ display: "block" }}
            className={classNamVar}
            onClick={() => {
              handleComplete(task.id);
            }}
          >
            {task.name}
          </span>
          <span style={{ display: "flex", flex: "column" }}>
            <span onClick={() => handleChagneCompleteState(task.id)}>
              <FontAwesomeIcon icon={faPenToSquare} style={{ color: "blue" }} />
            </span>
            <span onClick={handleDelete}>
              <FontAwesomeIcon style={{ color: "red" }} icon={faTrash} />
            </span>
            <span
              onClick={() => {
                handleComplete(task.id);
              }}
            >
              <FontAwesomeIcon
                style={{ color: !task.done ? "gray" : "blue" }}
                icon={faCircleCheck}
              />
            </span>
          </span>
        </div>
        {task.update ? (
          <form onSubmit={handleEdit}>
            <input
              value={TaskEdited.name}
              onChange={(e) => {
                setTaskEdited((prev) => ({ ...prev, name: e.target.value }));
                console.log(TaskEdited);
              }}
              type="text"
            />
            <button>
              {" "}
              <FontAwesomeIcon icon={faCircleCheck}  />
            </button>
          </form>
        ) : (
          ""
        )}
      </>

    );
  });
  return (
    <>
      <div className={styles.TaskListContainer}>
        {TaskFromLocalStorge.length == 0 && (
          <p>Nice You don't have anything to do</p>
        )}
        {showTasks}
      </div>
    </>
  );
}
