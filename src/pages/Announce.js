import { useState, useEffect } from "react";
import Axios from "axios";


function Announce() {
    const [listofannounce, setListOfAnnouce] = useState([]);

    const [textfield, settextfield] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:4000/api/announce").then((response) => {
            setListOfAnnouce(response.data);
        });
      }, []);

      const createAnnounce = () => {
        Axios.post("http://localhost:4000/api/announce", {
          
          textfield,
        }).then((response) => {
          setListOfAnnouce([
            ...listofannounce,
            {
              textfield,
            },
          ]);
        });
      };
      return (
        <div className="Announcements">
          <div className="Displayannouncements">
            {listofannounce.map((announce) => {
              return (
                <div>
                  <h1>Note: {announce.textfield}</h1>
                </div>
              );
            })}
          </div>
    
          <div>
            <input
              type="text"
              placeholder="Note..."
              onChange={(event) => {
                settextfield(event.target.value);
              }}
            />
             <button onClick={createAnnounce}> Create Announcement </button>
      </div>
    </div>
  );
}

export default Announce;


