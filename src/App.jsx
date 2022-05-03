// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.darkly.min.css";
// import "./styles/bootstrap.morph.min.css";
// import "./styles/bootstrap.quartz.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { Employees } from "./components/Employees";
import { Customers } from "./components/Customers";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("Employees");

  return (
    <div className="App">
      <Container>
        <h1>Company Site</h1>
        <Button onClick={() => setMode("Employees")} className="me-1">
          Employees
        </Button>
        <Button onClick={() => setMode("Customers")} className="btn-success">
          Customers
        </Button>
        <Card className="mt-2">
          <Card.Body>
            {mode === "Employees" ? <Employees /> : <Customers />}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
