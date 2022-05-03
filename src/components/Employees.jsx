import employees from "../data/employees.json";
import { Carousel } from "react-bootstrap";

export const Employees = () => {
  return (
    <>
      <h2>Employees</h2>
      <p>This is the employees page.</p>
      <Carousel style={{ width: "300px" }}>
        {employees.map((emp, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`public/images/employee_${emp.employeeID}.jpg`}
              />
              <Carousel.Caption>
                <div>
                  {emp.firstName} {emp.lastName}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};
