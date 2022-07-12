import logo from "./logo.svg";
import "./App.css";
import BarChart from "./components/BarChart";
import { useState } from "react";
import { UserData } from "./Data";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#F3BA2F",
          "#2A71D0",
          "#000",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
