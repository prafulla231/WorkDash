import React from 'react';
import { AuthorWorklogData } from '../components/types/data';

interface TableProps {
  data: AuthorWorklogData;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Data Table</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Author</th>
            {data.activityMeta.map((activity) => (
              <th key={activity.label} className="px-4 py-2">{activity.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((author) => (
            <tr key={author.name}>
              <td className="border px-4 py-2">{author.name}</td>
              {author.totalActivity.map((activity) => (
                <td key={activity.name} className="border px-4 py-2">{activity.value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
