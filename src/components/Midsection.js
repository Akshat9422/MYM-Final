import React from "react";
import "./Midsection.css";
import { AiOutlineStock } from "react-icons/ai";
import { BsFillSquareFill } from "react-icons/bs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const Midsection = () => {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Connections",
        data: [420],
        backgroundColor: "#C2ECC1",
        borderColor: "#C2ECC1",
        borderWidth: 1,
      },
      {
        label: "Follows",
        data: [290],
        backgroundColor: "#1F1F1F",
        borderColor: "#1F1F1F",
        borderWidth: 1,
      },
      {
        label: "Connect Invites",
        data: [730],
        backgroundColor: "#C5C7F6",
        borderColor: "#C5C7F6",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="mid-body">
      <h1>Dashboard</h1>
      <div className="mid-content">
        <div className="mid-content-body mid-border">
          <p className="mid-para">Connections</p>
          <div className="mid-content-numbers">
            <h2>2632</h2>
            <div className="mid-content-percent">
              <p className="mid-content-percent-bar">
                <AiOutlineStock />
              </p>
              <p>56%</p>
            </div>
          </div>
        </div>
        <div className="mid-content-body mid-border">
          <p className="mid-para">Followers</p>
          <div className="mid-content-numbers">
            <h2>2667</h2>
            <div className="mid-content-percent">
              <p className="mid-content-percent-bar">
                <AiOutlineStock />
              </p>
              <p>0%</p>
            </div>
          </div>
        </div>
        <div className="mid-content-body">
          <p className="mid-para">Connect Invites</p>
          <div className="mid-content-numbers">
            <h2>100</h2>
            <div className="mid-content-percent">
              <p className="mid-content-percent-bar">
                <AiOutlineStock />
              </p>
              <p>60%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-chart-data">
        <div className="mid-chart">
          <Bar data={data} options={options}></Bar>
        </div>
        <div className="mid-chart-content">
          <div className="mid-chart-content1">
            <p className="mid-chart-dot second">
              <BsFillSquareFill />
            </p>
            <p>Connections</p>
          </div>
          <div className="mid-chart-content1">
            <div className="mid-chart-content1">
              <p className="mid-chart-dot first">
                <BsFillSquareFill />
              </p>
              <p>Follows</p>
            </div>
          </div>
          <div className="mid-chart-content1">
            <div className="mid-chart-content1">
              <p className="mid-chart-dot third">
                <BsFillSquareFill />
              </p>
              <p>Connect Invites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midsection;
