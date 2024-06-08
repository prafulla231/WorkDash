import React from 'react';
import { AuthorWorklogData } from '../components/types/data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


interface ChartProps {
  data: AuthorWorklogData;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.rows.flatMap(author =>
    author.dayWiseActivity.map(day => ({
      date: day.date,
      ...day.items.children.reduce((acc, item) => {
        acc[item.label] = parseInt(item.count);
        return acc;
      }, {} as { [key: string]: number }),
    }))
  );

  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Data Chart</h2>
      <LineChart
        width={800}
        height={400}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data.activityMeta.map((activity) => (
          <Line
            key={activity.label}
            type="monotone"
            dataKey={activity.label}
            stroke={activity.fillColor}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </div>
  );
};

export default Chart;
