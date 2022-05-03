// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.darkly.min.css";
// import "./styles/bootstrap.morph.min.css";
// import "./styles/bootstrap.quartz.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { Employees } from "./components/Employees";
import { Customers } from "./components/Customers";
import {useState} from "react";

const handleEmployeeHanle


function App() {
  return (
    <div className="App">
      <Container>
        <h1>Company Site</h1>
        <Button onClick={} className="me-1">Employees</Button>
        <Button className="btn-success">Customers</Button>
        <Card className="mt-2">
          <Card.Body>
            <Employees />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
