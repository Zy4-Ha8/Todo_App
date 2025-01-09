import { useState } from "react";
import Form from "./Form";
import styles from "./Body.module.css";
import TaskList from "./TasksList";
import Footer from "./Footer";
export default function Body() {
  const [Tasks, SetTasks] = useState([]);
  const [Task, SetTask] = useState({name:"", done:false});
  const complete = Tasks.filter((Task)=> Task.done ).length 
  const total = Tasks.length
  return (
    <div className={styles.BodyContainer}>
      <Form Tasks={Tasks} SetTasks={SetTasks} Task={Task} SetTask={SetTask} />
      <TaskList Tasks={Tasks} SetTasks={SetTasks} Task={Task} SetTask={SetTask} />
      <Footer complete={complete} total={total} />
    </div>
  );
}
