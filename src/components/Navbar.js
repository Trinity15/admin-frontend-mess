import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/users"> User </Link>
          <Link to="/order"> Order </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/announce"> Announcement </Link>
          
        </div>
      </div>
      <div className="rightSide">
      <Link to="/"> Home </Link>
          <Link to="/users"> User </Link>
          <Link to="/order"> Order </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/announce"> Announcement </Link>
          
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
export default Navbar;