import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Container, Row, Col } from "react-bootstrap";
import TaskList from "./Components/TaskList";
import TaskInput from "./Components/TaskInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const MySwal = withReactContent(Swal);

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const editTask = (index) => {
    MySwal.fire({
      title: "Edit Task",
      input: "text",
      inputValue: tasks[index].text,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = result.value;
        setTasks(updatedTasks);
      }
    });
  };

  const deleteTask = (index) => {
    MySwal.fire({
      title: "Delete Task",
      text: "Are you sure you want to delete this task?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
      }
    });
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="App">
            <h1 className="text-center">Todo List</h1>
            <Row className="justify-content-center mb-3">
              <Col md={5}>
                <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
              </Col>
            </Row>
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
