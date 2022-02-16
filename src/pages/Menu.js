
import { useState, useEffect } from "react";
import Axios from "axios";


function Menu() {
  const [listmenu, setlistmenu] = useState([]);
  const [type, settype] = useState("");
  const [meal, setmeal] = useState("");
   useEffect(() => {
    Axios.get("http://localhost:4000/api/menu").then((response) => {
      setlistmenu(response.data);
    });
  }, []);
  const createMenu = () => {
    Axios.post("http://localhost:4000/api/menu", {
      type,
      meal,
    }).then((response) => {
      setlistmenu([
        ...listmenu,
        {
            type,
            meal,
        },
      ]);
    });
  };
   return (

    <div className="Menu">
      <div className="Menu List">
      <h1>Menu for the Canteen</h1>
        {listmenu.map((menu) => {
          return (         
    <table>           
     <tr>
  <th>Meal Type</th>
  <th>Name</th>
    </tr>
  <tr>
    <td>{menu.type}</td>
    <td>{menu.meal}</td>
  </tr>
  </table>
        );})}
        </div>

<div>
            <input
              type="text"
              placeholder="Type of Meal..."
              onChange={(event) => {
                settype(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Name of Meal..."
              onChange={(event) => {
                setmeal(event.target.value);
              }}
            />
             <button onClick={createMenu}> Add Menu </button>
     
      </div>
      </div>

      
    
  );
}
export default Menu;