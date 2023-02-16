import { useParams } from "react-router";

function Entry({ userEntries }) {
  const { entryID } = useParams();

  const selectedEntry = userEntries.filter(
    (entry) => entry.id === parseInt(entryID)
  )[0];

  return (
    <div className="home">
      <div className="container">
        <h1 className="mt-5">
          {selectedEntry.title} {selectedEntry.mood}
        </h1>
        <h6 className="mb-5">{selectedEntry.date}</h6>
        <p>Keywords: {selectedEntry.keywords}</p>
        <p>Description: {selectedEntry.description}</p>
      </div>
    </div>
  );
}
export default Entry;
