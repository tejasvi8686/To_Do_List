import React, { useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData((prevListData) => {
      const updatedList = [...prevListData, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => i !== id);
    setlistData(updatedListData);
  }

  function removeAll(){
    setlistData([])
  }

  return (
    <div>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="list-heading">Here is your List: </p>

        {listData.length > 0 &&
          listData.map((data, i) => (
            <div key={i}>
              <p>
                <div className="listData">{data}</div>
                <div className="btn-position">
                  <button onClick={() => removeActivity(i)}>remove(-)</button>
                </div>
              </p>
            </div>
          ))}
        {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </div>
  );
};

export default TodoList;
