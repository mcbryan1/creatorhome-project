import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



const data = [
  {
    name: "Ghana",
    female: 4000,
    male: 2400,
    amt: 2400,
  },
  {
    name: "Germany",
    female: 3000,
    male: 1398,
    amt: 2210,
  },
  {
    name: "India",
    female: 2000,
    male: 9800,
    amt: 2290,
  },
  {
    name: "Usa",
    female: 2780,
    male: 3908,
    amt: 2000,
  },
  {
    name: "Togo",
    female: 1890,
    male: 4800,
    amt: 2181,
  },
  {
    name: "Angola",
    female: 2390,
    male: 3800,
    amt: 2500,
  },
  {
    name: "Kenya",
    male: 3490,
    female: 4300,
    amt: 2100,
  },
];



export default class barChart extends PureComponent {
  render() {
    return (
      <div>
        <div className="charts">
          <div className="main-charts">
              <div className="text-center">
              <div className="header">
                  <h1>Population Census(Bar Chart)</h1>
                </div>
                <BarChart
                  width={600}
                  height={400}
                  data={data} 
                  className="bar_chart"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="male" fill="#905800" />
                  <Bar dataKey="female" fill="#4F015F" />
                </BarChart>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
