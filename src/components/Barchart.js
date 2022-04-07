import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "1998",
    "No of residents": 4000,
  },
  {
    name: "1999",
    "No of residents": 3000,
  },
  {
    name: "2000",
    "No of residents": 2000,
  },
  {
    name: "2001",
    "No of residents": 2780,
  },
  {
    name: "2002",
    "No of residents": 1890,
  },
  {
    name: "2003",
    "No of residents": 2390,
  },
];

export default function Barchart() {
  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header border-0">
          <h4 className="fs-20 font-w700"> Reports of Residents </h4>
        </div>
        <div className="card-body pb-3">
          <BarChart width={445} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="No of residents" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
