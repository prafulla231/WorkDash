import { AuthorWorklogData } from '../components/types/data';


interface SummaryProps {
  data: AuthorWorklogData;
}

const Summary: React.FC<SummaryProps> = ({ data }) => {
  const totalActivities = data.rows.reduce(
    (acc, author) => acc + author.totalActivity.reduce((sum, activity) => sum + parseInt(activity.value), 0),
    0
  );
  const totalAuthors = data.rows.length;

  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Summary</h2>
      <p>Total Activities: {totalActivities}</p>
      <p>Total Authors: {totalAuthors}</p>
    </div>
  );
};

export default Summary;