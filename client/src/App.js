import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((res) => {
      console.log(res.data);
    });
  }, []);

  const addItem = () => {
    axios.post("http://localhost:3001/api/post", {
      item: { itemName: "Coat", quantity: 20 },
    }).then((res)=>{
      console.log(res.data);
    });
  };
  return <div className="App"><button type="" onClick={addItem} className="bg-red-500">Add</button></div>;
}

export default App;
