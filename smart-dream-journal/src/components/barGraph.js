import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useAuth } from "../contexts/authContext";

export default function BarGraph() {
  const { userEntries } = useAuth();

  // collect dream moods counts for bar graph data
  const data = Object.values(
    userEntries.reduce((a, { mood }) => {
      a[mood] = a[mood] || { mood: mood, count: 0 };
      a[mood].count++;
      return a;
    }, {})
  );

  console.log(data);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mood" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}
