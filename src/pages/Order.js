

import { useState, useEffect } from "react";
import Axios from "axios";
function Order() {
  const [listorder, setlistorder] = useState([]);
   useEffect(() => {
    Axios.get("http://localhost:4000/api/customerorder").then((response) => {
      setlistorder(response.data);
    });
  }, []);

   return (

    
    <div className="Order">
      <div className="Customer Order">
      <h1>Customer Order</h1>
        {listorder.map((customerorder) => {
          return (         
             
              <table>
  <tr>
  <th>First name</th>
    <th>Last Name</th>
    <th>Type of Meal</th>
    <th>Email</th>
    <th>Address</th>
    <th>From Date </th>
    <th>To Date </th>
    <th>Price</th>
  </tr>
  <tr>
    <td>{customerorder.firstname}</td>
    <td>{customerorder.lastname}</td>
    <td>{customerorder.type}</td>
    <td>{customerorder.email}</td>
    <td>{customerorder.address}</td>
    <td>{customerorder.FromDate}</td>
    <td>{customerorder.ToDate}</td>
    <td>{customerorder.price}</td>

  </tr>
  
</table>
        );
        })}
      </div>
      </div>
    
  );
}
export default Order;
