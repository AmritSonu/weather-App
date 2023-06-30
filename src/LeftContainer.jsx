// Weather Details
const details = {
  address: "New York , USA",
  timezone: "Today 20 May",
  sunrise: "07:13",
  sunset: "19:43",
  temp: 27,
  description: "Sunny",
};

//  Main Left Container
export default function LeftContainer() {
  return (
    <div className="pri_container single_flex flex-col g-5">
      <div className="single_flex space-around align-center mt-2">
        {/* 1 */}
        <a href="#">
          <i className="material-icons">add_box</i>
        </a>
        <SlideBox />
        <Cel_Far />
      </div>
      <div>
        <Details details={details} />
      </div>
      <div>
        <DisplayTemp details={details} />
      </div>
    </div>
  );
}
// Three Dot slides -- changing tab
function SlideBox() {
  return (
    <div className="slide_box single_flex">
      <div className="dot dot-open"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

// Celcius to Farenheit
function Cel_Far() {
  return (
    <div className="single_flex space-between align-center g-05 ">
      <span className="f-1 white">&#8451;</span>
      <div className="mode-white">
        <span className="mode-dark"></span>
      </div>
      <span className="f-1 white">&#8457;</span>
    </div>
  );
}
// All Details of weather
function Details({ details }) {
  return (
    <div className="details single_flex space-around g-2 wrap plr-1 white align-center">
      <h1 className="multi-flex">
        <span className="material-icons">location_city</span>
        {details.address}
      </h1>
      <h2 className="multi-flex">
        <span className="material-icons">wb_twilight</span>
        {details.sunrise}
      </h2>
      <h2>{details.timezone}</h2>
      <h2 className="multi-flex">
        <span className="material-icons">
          <span className="material-icons-outlined">nights_stay</span>
        </span>
        {details.sunset}
      </h2>
    </div>
  );
}
function DisplayTemp({ details }) {
  return (
    <>
      <div className="single_flex space-around align-center ">
        <a className="slider" href="#">
          &#60;
        </a>
        <h1 className="temprature white">{details.temp}°</h1>
        <a className="slider" href="#">
          &#62;
        </a>
      </div>
      <h2
        className="white multi-flex g-05"
        style={{ textAlign: "center", fontSize: "2rem" }}
      >
        <span className="material-icons">light_mode</span>
        {details.description}
      </h2>
    </>
  );
}
