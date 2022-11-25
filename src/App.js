import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_VARIABLE}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Galaxy Picture Of The Day</h1>
      <img src={data.media_type === "img" ? data.hdurl : data.url} alt="" />
      <h2>{data.date}</h2>
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
