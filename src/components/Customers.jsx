import customers from "../data/customers.json";
import { Table } from "react-bootstrap";

export const Customers = () => {
  return (
    <>
      <h2>Customers</h2>
      <p>This is the customers page.</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {customers.slice(1, 10).map((cust, index) => {
            return (
              <tr>
                <td>{cust.customerID}</td>
                <td>{cust.contactName.split(" ")[0]}</td>
                <td>{cust.contactName.split(" ")[1]}</td>
                <td>{cust.companyName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
