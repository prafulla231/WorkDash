import React from 'react';
import { Bar } from 'react-chartjs-2';
import { AuthorWorklogData } from './types/data';

interface BarChartProps {
  data: AuthorWorklogData;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const labels = data.rows.map((author) => author.name);
  const barData = {
    labels,
    datasets: data.activityMeta.map((meta) => ({
      label: meta.label,
      backgroundColor: meta.fillColor,
      data: data.rows.map((author) =>
        author.totalActivity.find((activity) => activity.name === meta.label)?.value || 0
      ),
    })),
  };

  return <Bar data={barData} />;
};

export default BarChart;
