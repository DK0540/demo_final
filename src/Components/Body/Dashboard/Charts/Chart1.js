import "./Chart1.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
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

function Chart1() {
  return (
    <div className="chart-heading">
      <h1 style={{ fontSize: "13px" }}>Line chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={50}
          height={20}
          margin={{ top: 0, right: 5, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={"name"}
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value}
          />
          <Line
            type={"monotone"}
            dataKey={"Person"}
            activeDot={{ r: 8 }}
          ></Line>
          <Line
            dataKey={"fees"}
            strokeDasharray="3 3"
            stroke="red"
            activeDot={{ r: 8 }}
          ></Line>
          <YAxis tickFormatter={(value) => value} />
          <Tooltip
            contentStyle={{
              backgroundColor: "black",
              borderRadius: "50%",
              border: "none",
            }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart1;

// import React from "react";

// const Chart1 = () => {
//   return (
//     <div>
//       <h1>Dashboar</h1>
//     </div>
//   );
// };

// export default Chart1;

// import "./Chart1.css";
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

// function Chart1() {
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

// export default Chart1;

// // import React from "react";

// // const Chart1 = () => {
// //   return (
// //     <div>
// //       <h1>Dashboar</h1>
// //     </div>
// //   );
// // };

// // export default Chart1;
