import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

import { useState } from "react";
// Main container right sider
export default function RightContainer() {
  return (
    <div className="sec_container single_flex flex-col g-2">
      <div className="single_flex space-between align-center">
        <div>
          <h1>Wel come back Isabella!</h1>
          <h2>Check out today's weather information</h2>
        </div>
        <div className="single_flex g-2 align-center">
          <a href="#">
            <span className="material-icons" style={{ color: "#000" }}>
              more_horiz
            </span>
          </a>
          <img
            className="img"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80"
            alt="portrait_image"
          />
        </div>
      </div>

      <div className="chart_container" style={{ backgroundColor: "#fff" }}>
        <WeatherChart />
      </div>
      <>
        <MoreDetails />
      </>
    </div>
  );
}
// WeatherChart
const WeatherChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
      ],
      filter: [
        "filter_drama",
        "filter_drama",
        "wb_sunny",
        "filter_drama",
        "wb_sunny",
        "filter_drama",
        "wb_sunny",
        "wb_sunny",
      ],
      deg: ["27", "28 ", "28", "29", "30", "29", "29", "28"],
    },
  });

  const [series, setSeries] = useState([
    {
      // filter_drama
      name: "percantage%",
      data: [23, 29, 58, 75, 33, 20, 73, 49],
    },
  ]);
  return (
    <div className="app">
      <div className="row single_flex flex-col g-2">
        <h2>Upcoming Hours</h2>

        <Filter_Icon options={options} />

        <div className="mixed-chart">
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};
function Filter_Icon({ options }) {
  return (
    <>
      <div className="single_flex space-around g-1">
        {options.xaxis.deg.map((deg, index) => {
          return <span key={index}>{deg} &deg;</span>;
        })}
      </div>
      <div className="single_flex space-around g-1">
        {options.xaxis.filter.map((time, index) => {
          return (
            <i key={index} className="material-icons" style={{ color: "#000" }}>
              {time}
            </i>
          );
        })}
      </div>
    </>
  );
}

// MOre details Component starting
function MoreDetails() {
  const DetailsName = {
    name: [
      "Humidity",
      "Wind",
      "Precipitation",
      "UV index",
      "Feel Like",
      "Chance of rain",
    ],
    icons: [
      "water_drop",
      "air",
      "thunderstorm ",
      "light_mode",
      "thermostat",
      "grain",
    ],
    weather_result: ["82% bad", "8km/h", "1.4cm", "4 medium", "30 deg", "42%"],
  };
  return (
    <>
      <h1>More Details of today's Weather</h1>
      <div className="single_flex align-center space-between wrap g-3">
        {DetailsName.name.map((detail, index) => (
          <div>
            <SubMoreDetails
              key={index}
              details={detail}
              allDetails={DetailsName}
            />
          </div>
        ))}
      </div>
    </>
  );
}
function SubMoreDetails({ details, allDetails }) {
  return (
    <div className="sub_box_details">
      <div className="single_flex space-between align-center g-12 ">
        <h3>{details}</h3>
        <Icon icon={allDetails.icons[allDetails.name.indexOf(details)]} />
      </div>
      <div className="weather_result">
        <ResultWeather
          weather_result={
            allDetails.weather_result[allDetails.name.indexOf(details)]
          }
        />
      </div>
    </div>
  );
}

function Icon({ icon }) {
  return <i className="material-icons sub_box_icon">{icon}</i>;
}
function ResultWeather({ weather_result }) {
  return <h1>{weather_result}</h1>;
}
