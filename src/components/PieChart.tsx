import React from 'react';
import { Pie } from 'react-chartjs-2';
import { AuthorWorklogData } from './types/data';

interface PieChartProps {
  data: AuthorWorklogData;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const labels = data.activityMeta.map((meta) => meta.label);
  const pieData = {
    labels,
    datasets: [
      {
        data: labels.map((label) =>
          data.rows.reduce((sum, author) => {
            const activityValue = author.totalActivity.find((activity) => activity.name === label)?.value || '0';
            return sum + parseInt(activityValue, 10);
          }, 0)
        ),
        backgroundColor: data.activityMeta.map((meta) => meta.fillColor),
      },
    ],
  };

  return <Pie data={pieData} />;
};

export default PieChart;
