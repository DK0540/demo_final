import "./dashboard.css";

import Chart1 from "./Charts/Chart1";
import Chart2 from "./Charts/Chart2";
import Chart3 from "./Charts/Chart3";
import Chart4 from "./Charts/Chart4";

function Dashboard() {
  return (
    <div className="chart-heading">
      <div className="chart1_main">
        <div className="chart1-vs">
          <Chart1 />
        </div>
        <div className="chart2-vs">
          <Chart2 />
        </div>
        <div className="chart3-vs">
          <Chart4 />
        </div>
        <div className="chart4-vs">
          <Chart3 />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

// <Chart1 />
// <Chart2 />

// import React from "react";

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboar</h1>
//     </div>
//   );
// };

// export default Dashboard;

// import "./dashboard.css";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
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

// function Dashboard() {
//   return (
//     <div className="chart-heading">
//       <h1>Line chart</h1>
//       <ResponsiveContainer width="100%" aspect={3}>
//         <LineChart
//           data={pdata}
//           width={50}
//           height={20}
//           margin={{ top: 100, right: 300, left: 100, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis
//             dataKey={"name"}
//             interval={"preserveStartEnd"}
//             tickFormatter={(value) => value + "Programing"}
//           />
//           <Line
//             type={"monotone"}
//             dataKey={"Person"}
//             activeDot={{ r: 8 }}
//           ></Line>
//           <Line
//             dataKey={"fees"}
//             strokeDasharray="3 3"
//             stroke="red"
//             activeDot={{ r: 8 }}
//           ></Line>
//           <YAxis tickFormatter={(value) => value + "hello"} />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: "black",
//               borderRadius: "50%",
//               border: "none",
//             }}
//           />
//           <Legend />
//         </LineChart>
//       </ResponsiveContainer>

//       <h1>Bar chart</h1>
//       <ResponsiveContainer width="100%" aspect={3}>
//         <BarChart
//           data={pdata}
//           width={50}
//           height={20}
//           margin={{ top: 100, right: 300, left: 100, bottom: 5 }}
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

//       <h1>Mixed chart</h1>
//       <ResponsiveContainer width="100%" aspect={3}>
//         <ComposedChart
//           data={pdata}
//           width={50}
//           height={20}
//           margin={{ top: 100, right: 300, left: 100, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey={"name"} />
//           <YAxis />
//           <Tooltip />
//           <Legend />

//           <Bar dataKey={"Person"} fill="#8884d8" />
//           <Bar dataKey={"fees"} fill="#82ca9d" />
//           <Line strokeDasharray="3 3" dataKey={"Person"} fill="#82ca9d" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Dashboard;

// // import React from "react";

// // const Dashboard = () => {
// //   return (
// //     <div>
// //       <h1>Dashboar</h1>
// //     </div>
// //   );
// // };

// // export default Dashboard;
