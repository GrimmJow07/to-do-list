import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const TaskList = ({ tasks, editTask, deleteTask, completeTask }) => {
  return (
    <div className="text-center">
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              textDecoration: task.completed ? "line-through" : "none",
            }}>
            {task.text}
            <div>
              {task.completed ? (
                <Button variant="success" disabled style={{marginRight: '10px'}}>
                  Done
                </Button>
              ) : (
                <Button
                  variant="outline-success"
                  onClick={() => completeTask(index)}
                  style={{ marginRight: "10px" }}>
                  Mark as Done
                </Button>
              )}
              <Button
                variant="outline-primary"
                onClick={() => editTask(index)}
                style={{ marginRight: "10px" }}>
                Edit
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => deleteTask(index)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;
