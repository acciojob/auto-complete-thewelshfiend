import React from "react";
import './../styles/App.css';
import { useState, useEffect } from "react";

const App = () => {
    const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
    const [updatedData, setUpdatedData] = useState([]);
    const [val, setVal] = useState("");

    useEffect(() => {
        setUpdatedData(fruits.filter((item) => (item.toLowerCase().includes(val.toLowerCase()))));
    }, [val]);

    return (
        <div>
            {/* Do not remove the main div */}
            <h1>Search item</h1>
            <input type="text" name="search" value={val} onChange={(e) => (setVal(e.target.value))} />
            <ul>
                {
                    updatedData.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default App
