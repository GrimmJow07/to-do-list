import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const TaskInput = ({ newTask, setNewTask, addTask }) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="primary" onClick={addTask}>
        Add
      </Button>
    </InputGroup>
  );
};

export default TaskInput;
