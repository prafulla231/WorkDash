import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import { ApiResponse } from './types/data';
import Chart from './Chart';
import Table from './Table';
import Summary from './Summary';



const Dashboard: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      {data && (
        <>
          <Summary data={data.data.AuthorWorklog} />
          <Chart data={data.data.AuthorWorklog} />
          <Table data={data.data.AuthorWorklog} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
