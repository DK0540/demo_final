import "./chart4.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "5",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "10",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "15",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "20",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "25",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "30",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "40",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chart4() {
  return (
    <div className="chart-heading">
      <h1 style={{ fontSize: "13px" }}>Mixed chart</h1>
      <div className="plainline">
        <AreaChart
          width={200}
          height={100}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
}

export default Chart4;

// import "./chart4.css";
// import {
//   ResponsiveContainer,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Legend,
//   Tooltip,
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

// function Chart4() {
//   return (
//     <div className="chart-heading">
//       <h1 style={{ fontSize: "13px" }}>Mixed chart</h1>
//       <ResponsiveContainer width="100%" aspect={3}>
//         <ComposedChart
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
//           <Bar dataKey={"fees"} fill="#82ca9d" />
//           <Line strokeDasharray="3 3" dataKey={"Person"} fill="#82ca9d" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Chart4;
