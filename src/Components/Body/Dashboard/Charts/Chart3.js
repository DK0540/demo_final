import "./chart3.css";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

function Chart3() {
  return (
    <div className="chart-heading">
      <h1 style={{ fontSize: "13px" }}>Bar chart</h1>
      <div className="piechart">
        <PieChart width={200} height={200}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={20}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={50}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
}

export default Chart3;

// position: relative;
// cursor: default;
// width: 358px;
// height: 362px;
// top: -40px;

// import "./chart3.css";
// import {
//   ResponsiveContainer,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Legend,
//   Tooltip,
//   BarChart,
//   Bar,
//   ComposedChart,
// } from "recharts";

// const pdata = [
//   {
//     name: "Page A",
//     Person: 13,
//     fees: 10,
//   },
//   {
//     name: "Page B",
//     Person: 18,
//     fees: 11,
//   },
//   {
//     name: "Page C",
//     Person: 15,
//     fees: 16,
//   },
//   {
//     name: "Page D",
//     Person: 19,
//     fees: 19,
//   },
//   {
//     name: "Page E",
//     Person: 23,
//     fees: 20,
//   },
//   {
//     name: "Page F",
//     Person: 18,
//     fees: 14,
//   },
//   {
//     name: "Page G",
//     Person: 15,
//     fees: 15,
//   },
// ];

// function Chart3() {
//   return (
//     <div className="chart-heading">
//       <h1 style={{ fontSize: "13px" }}>Bar chart</h1>
//       <ResponsiveContainer width="100%" aspect={3}>
//         <BarChart
//           data={pdata}
//           width={50}
//           height={20}
//           margin={{ top: 0, right: 5, left: 0, bottom: 0 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey={"name"} />
//           <YAxis />
//           <Tooltip />
//           <Legend />

//           <Bar dataKey={"Person"} fill="#8884d8" />
//           <Bar dataKey={"Person"} fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Chart3;
