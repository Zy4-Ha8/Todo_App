import { useEffect, useRef, useState } from "react";
import Form from "../Tasks/Form";
import styles from "../../Style/Body.module.css";
import TaskList from "../Tasks/TasksList";
import Footer from "./Footer";
export default function Body() {
  const [Tasks, SetTasks] = useState([]);
  const getItems = JSON.parse(localStorage.getItem("tasks"));
  useEffect(() => {
    if (getItems) {
      SetTasks(getItems);
    }
  }, []);
  const [Task, SetTask] = useState({
    name: "",
    done: false,
    id: "",
    update: false,
  });
  const { inputRef } = useRef();
  const complete = Tasks.filter((Task) => Task.done).length;
  const total = Tasks.length;
  return (
    <div className={styles.BodyContainer}>
      <Form
        Tasks={Tasks}
        SetTasks={SetTasks}
        Task={Task}
        SetTask={SetTask}
        inputRef={inputRef}
      />
      <TaskList
        Tasks={Tasks}
        SetTasks={SetTasks}
        Task={Task}
        SetTask={SetTask}
        inputRef={inputRef}
      />
      <Footer complete={complete} total={total} />
    </div>
  );
}
