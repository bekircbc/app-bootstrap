import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.darkly.min.css";
// import "./styles/bootstrap.morph.min.css";
// import "./styles/bootstrap.quartz.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { Employees } from "./components/Employees";
import { Customers } from "./components/Customers";

function App() {
  const [currentPage, setCurrentPage] = useState("employees");

  return (
    <div className="App">
      <Container>
        <h1>Company Site</h1>
        <Button onClick={() => setCurrentPage("employees")} className="me-1">
          Employees
        </Button>
        <Button
          onClick={() => setCurrentPage("customers")}
          className="btn-success"
        >
          Customers
        </Button>
        <Card className="mt-2">
          <Card.Body>
            {currentPage === "employees" && <Employees />}
            {currentPage === "customers" && <Customers />}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
