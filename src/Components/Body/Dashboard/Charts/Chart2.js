import React from "react";

import "./chart2.css";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const pdata = [
  {
    name: "5",
    Person: 13,
    fees: 10,
  },
  {
    name: "10",
    Person: 18,
    fees: 11,
  },
  {
    name: "15",
    Person: 15,
    fees: 16,
  },
  {
    name: "20",
    Person: 19,
    fees: 19,
  },
  {
    name: "25",
    Person: 23,
    fees: 20,
  },
  {
    name: "30",
    Person: 18,
    fees: 14,
  },
  {
    name: "35",
    Person: 15,
    fees: 15,
  },
];

function Chart2() {
  return (
    <div className="chart-heading">
      <h1 style={{ fontSize: "13px" }}>Bar chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          data={pdata}
          width={50}
          height={20}
          margin={{ top: 0, right: 5, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey={"Person"} fill="#8884d8" />
          <Bar dataKey={"Person"} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart2;
