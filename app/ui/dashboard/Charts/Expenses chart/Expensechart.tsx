"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    uv: 20000,
    pv: 1400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 1200,
    pv: 4398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 1800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 3000,
    pv: 6398,
    amt: 2210,
  },
  {
    name: "May",
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Jun",
    uv: 3000,
    pv: 9398,
    amt: 2210,
  },
  {
    name: "July",
    uv: 200,
    pv: 10800,
    amt: 2290,
  },
  {
    name: "Aug",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sep",
    uv: 9000,
    pv: 9800,
    amt: 2290,
  },
];
const Expensechart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={100}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Expensechart;
