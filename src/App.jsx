import { useState } from "react";
import "./App.css";
import "./Utility.css";
import "./Buttons.css";
import "./LeftContainer.css";
import "./RightContainer.css";
import SubContainer from "./SubContainer";
import ReactApexChart from 'react-apexcharts';
function App() {
  return (
    <>
      <main className="main_container">
        <SubContainer />
      </main>
    </>
  );
}

export default App;
