import { useState, useEffect } from "react";
import Axios from "axios";

function User() {
  const [listOfUsers, setListOfUsers] = useState([]);
   useEffect(() => {
    Axios.get("http://localhost:4000/api/user").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

   return (

    
    <div className="App">
      <div className="Registered Users">
      <h1>Registered Users</h1>
        {listOfUsers.map((user) => {
          return (         
             
              <table>
  <tr>
    <th>First name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Phone number</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>{user.firstname}</td>
    <td>{user.lastname}</td>
    <td>{user.email}</td>
    <td>{user.phonenumber}</td>
    <td>{user.address}</td>
  </tr>
  
</table>
          
            
          );
        })}
      </div>
      </div>
    
  );
}

export default User;