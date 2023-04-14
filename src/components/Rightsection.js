import React from "react";
import "./Rightsection.css";
import { CiSearch } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { CiSquareChevDown } from "react-icons/ci";
import { TiCalculator } from "react-icons/ti";
import { VscFiles } from "react-icons/vsc";
import { RxDotFilled } from "react-icons/rx";
import image from "./Ellipse4.jpg";
import person1 from "./Ellipse5.jpg";
import person2 from "./Ellipse6.jpg";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Doughnut, Radar } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler
);
const Rightsection = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [3, 5, 4],
        backgroundColor: ["#C5C7F6", "#C2ECC1", "#1F1F1F"],
        borderColor: ["#C5C7F6", "#C2ECC1", "#1F1F1F"],
      },
    ],
  };
  const radarData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Campaign1",
        data: [70, 20, 40, 10, 70, 60, 60],
        backgroundColor: "rgba(194, 236, 193, 0.3)",
        borderColor: "#C2ECC1",
      },
      {
        label: "Campaign2",
        data: [40, 80, 70, 40, 10, 80, 70],
        backgroundColor: "rgba(197, 199, 246, 0.3)",
        borderColor: "#C5C7F6",
      },
    ],
  };
  const options = {};
  const radarOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="right-body">
      <div className="right-body-upper">
        <div className="right-body-search">
          <p className="right-body-search-text">Search</p>
          <p>
            <CiSearch />
          </p>
        </div>
        <div className="right-body-upper-user">
          <div className="right-body-upper-bell">
            <BsBell />
          </div>
          <img className="right-body-image" src={image} alt="" />
          <p>Jacob Frost</p>
          <CiSquareChevDown />
        </div>
      </div>
      <div className="right-body-main">
        <div className="right-body-main-heading">
          <h2>Campaign Analytics</h2>
          <div className="right-body-main-date">
            <div className="right-body-main-date-content">
              <TiCalculator />
              <p>Mar 10 - Apr 10</p>
              <CiSquareChevDown />
            </div>
          </div>
        </div>
        <div className="right-body-main-section">
          <div className="right-body-main-section-content">
            <p>Invitations Sent</p>
            <h2>286</h2>
          </div>
          <div className="right-body-main-section-content">
            <p>Pending Invitations</p>
            <h2>12</h2>
          </div>
          <div className="right-body-main-section-content">
            <p>Profile Views</p>
            <h2>2891</h2>
          </div>
        </div>
      </div>
      <div className="right-body-chart">
        <div className="doughnut-chart">
          <div className="doughnut-chart-chart">
            <Doughnut data={data} options={options}></Doughnut>
          </div>
          <div className="doughnut-chart-content">
            <div className="doughnut-chart-content-1">
              <p className="dot first">
                <RxDotFilled />
              </p>
              <div className="doughnut-chart-content-2">
                <p>Invitation sent</p>
                <p className="number-text">286</p>
              </div>
            </div>
            <div className="doughnut-chart-content-1">
              <p className="dot second">
                <RxDotFilled />
              </p>
              <div className="doughnut-chart-content-2">
                <p>Pending Invitations</p>
                <p className="number-text">12</p>
              </div>
            </div>
            <div className="doughnut-chart-content-1">
              <p className="dot third">
                <RxDotFilled />
              </p>
              <div className="doughnut-chart-content-2">
                <p>Profile Views</p>
                <p className="number-text">2891</p>
              </div>
            </div>
          </div>
        </div>
        <div className="radar-chart">
          <div className="radar-chart-chart">
            <Radar data={radarData} options={radarOptions}></Radar>
          </div>
          <div className="doughnut-chart-content">
            <div className="doughnut-chart-content-1">
              <p className="dot second">
                <RxDotFilled />
              </p>
              <div className="doughnut-chart-content-2">
                <p>Campaign 1</p>
                <p className="number-text">12,423</p>
              </div>
            </div>
            <div className="doughnut-chart-content-1">
              <p className="dot third">
                <RxDotFilled />
              </p>
              <div className="doughnut-chart-content-2">
                <p>Campaign 2</p>
                <p className="number-text">12,423</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-body-lowest">
        <div className="right-body-bottom">
          <div className="right-body-main-heading">
            <h2>Recent Activity</h2>
            <div className="right-body-main-date">
              <div className="right-body-main-date-content">
                <p>Last 24h</p>
                <CiSquareChevDown />
              </div>
            </div>
          </div>
          <div className="right-body-bottom-message right-border">
            <img className="right-body-image" src={person1} alt="" />
            <p>
              <b>Alex Morgan</b> sent you a <b>message</b>
            </p>
          </div>
          <div className="right-body-bottom-message right-border">
            <img className="right-body-image" src={person2} alt="" />
            <p>
              <b>Mujo Prosper</b> sent you a <b>connection</b>
            </p>
          </div>
          <div className="right-body-bottom-message">
            <div className="right-body-bottom-message-icon">
              <p>
                <VscFiles />
              </p>
            </div>
            <p className="right-body-bottom-message-text">
              Upcoming Task - <b>Create a campaign for designers</b> due on{" "}
              <b>02/04/2023</b>
            </p>
          </div>
        </div>
        <div className="right-body-scroll"></div>
      </div>
    </div>
  );
};

export default Rightsection;
