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
import { useAuth } from "../../../contexts/authContext";
import "./barGraph.css";

export default function BarGraph() {
  const { userEntries } = useAuth();

  // collect dream moods counts for bar graph data

  const data = Object.values(
    userEntries?.reduce((a, { mood }) => {
      a[mood] = a[mood] || { mood: mood, count: 0 };
      a[mood].count++;
      return a;
    }, {})
  );

  return (
    <section>
      <header className="bar-plot-header">Frequency of Dream Moods</header>
      <BarChart width={1000} height={600} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mood" style={{ fontSize: "2rem" }} />
        <YAxis
          style={{ fontSize: "1rem" }}
          label={{
            value: "Number of Dream Mood Entries",
            angle: -90,
            position: "center",
          }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </section>
  );
}
