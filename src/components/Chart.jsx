import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LinearChart"
import AreaCharts from "./AreaCharts"
import RadarCharts from "./RadarCharts";

export default function Chart() {
  return (
    <div>
      <div className="container-fluid" id="charts">
        <div className="row">
          <div className="chars">
            <div id="element-1" class="element text-center">
              Charts
            </div>
            <div id="element-2" class="element">
              Charts
            </div>
          </div>
          <div className="col-md-6">
            <BarChart />
          </div>
          <div className="col-md-6">
            <LineChart/>
          </div>
        </div>

        <div className="row">
            <div className="col-md-6">
            <AreaCharts/>
            </div>
            <div className="col-md-6">
                <RadarCharts/>
            </div>
        </div>
      </div>
    </div>
  );
}
