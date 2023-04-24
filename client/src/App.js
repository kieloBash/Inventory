import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [inputName, setInputName] = useState("");
  const [inputQuantity, setInputQuantity] = useState(0);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const addItem = () => {
    let item = { itemName: inputName, quantity: inputQuantity };
    axios
      .post("http://localhost:3001/api/post", {
        item: item,
      })
      .then((res) => {
        let prevData = [...data, item];
        setData(prevData);
        console.log(data);
        window.location.reload();
      });
  };

  const deleteItem = (id) => {
    axios.post(`http://localhost:3001/api/delete/${id}`, {}).then((res) => {
      console.log(res);
      window.location.reload();
      // let toDelete = data[index];
      // const newData = data.filter((element) => element !== toDelete);
      // setData(newData);
    });
  };
  const updateItem = (id, index) => {
    let temp = { itemName: "temp", quantity: 999 };
    axios
      .post(`http://localhost:3001/api/update/${id}`, {
        item: temp,
      })
      .then((res) => {
        console.log(data);
        window.location.reload();
        // let prevData = [...data];
        // prevData[index].itemName = temp.itemName;
        // prevData[index].quantity = temp.quantity;
        // setData(prevData);
        // setId(prevData.length);
      });
  };
  return (
    <div className="App">

      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      ></input>
      <input
        type="number"
        value={inputQuantity}
        onChange={(e) => setInputQuantity(e.target.value)}
      ></input>
      <button onClick={addItem} className="bg-green-500">
        Add
      </button>
      <button onClick={() => deleteItem(data[0]._id)} className="bg-red-500">
        Delete
      </button>
      {!loading ? (
        data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                updateItem(item._id, index);
              }}
              className="cursor-pointer"
            >
              {item.itemName}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
