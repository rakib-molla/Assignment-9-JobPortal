import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "A 1",
    A: 60,
    fullMark: 60
  },
  {
    subject: "A 2",
    A: 60,
    fullMark: 60
  },
  {
    subject: "A 3",
    A: 60,
    fullMark: 60
  },
  {
    subject: "A 4",
    A: 56,
    fullMark: 60
  },
  {
    subject: "A 5",
    A: 60,
    fullMark: 60
  },
  {
    subject: "A 6",
    A: 45,
    fullMark: 60
  },
  {
    subject: "A 7",
    A: 60,
    fullMark: 60
  },
  {
    subject: "A 8",
    A: 58,
    fullMark: 60
  },
];
const Statistics = () => {
  return (
    <div>
       <h1 className='text-center font-bold text-2xl my-8'> Assignment  Analytics </h1>

       <div className='ms-64'>
       <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Rakib"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
       </div>

    </div>
  );
};

export default Statistics;