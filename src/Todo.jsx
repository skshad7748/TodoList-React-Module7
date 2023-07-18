import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskList = () => {
  // Step 1: Set up the state to store the tasks
  const [tasks, setTasks] = useState([]);

  // Step 2: Create a state to capture the user's input
  const [newTask, setNewTask] = useState('');

  // Step 3: Function to handle the input change
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function to handle task submission
  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      // Adding the new task to the tasks array
      setTasks([...tasks, newTask]);

      // Clearing the input field after adding the task
      setNewTask('');
    }
  };

  const handleTaskDelete = (index) => {
    // Removing the task at the given index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{background:'skyblue'}}>
     <Container>
     <Row className="justify-content-md-center">
     <Col md="auto">
      <h1 style={{textAlign:'center'}}>Task List</h1>


      <form onSubmit={handleTaskSubmit}>
        <input
        style={{border:'2px solid yellow',textAlign:'center'}}
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        /> <br/> <br/>
        <Button type="submit" variant="outline-success" size="lg">Add Task</Button>
      </form>
        </Col>
      </Row>
      <ListGroup as="ol" numbered>
        {tasks.map((task, index) => (

            <ListGroup.Item as="li" key={index}>
            <h4>{task}</h4>
            <Button onClick={() => handleTaskDelete(index)} variant="outline-warning" size='lg'>Delete</Button>
            </ListGroup.Item>
         
        ))}
      </ListGroup>
      </Container>
    </div>
  );
};

export default TaskList;
