import React from 'react';
import { Line } from 'react-chartjs-2';
import { AuthorWorklogData } from './types/data';

interface LineChartProps {
  data: AuthorWorklogData;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const dates = Array.from(
    new Set(
      data.rows.flatMap((author) =>
        author.dayWiseActivity.map((dayActivity) => dayActivity.date)
      )
    )
  );

  const lineData = {
    labels: dates,
    datasets: data.activityMeta.map((meta) => ({
      label: meta.label,
      borderColor: meta.fillColor,
      fill: false,
      data: dates.map((date) =>
        data.rows.reduce((sum, author) => {
          const dayActivity = author.dayWiseActivity.find(
            (day) => day.date === date
          );
          const activity = dayActivity?.items.children.find(
            (item) => item.label === meta.label
          );
          return sum + (activity ? parseInt(activity.count) : 0);
        }, 0)
      ),
    })),
  };

  return <Line data={lineData} />;
};

export default LineChart;
