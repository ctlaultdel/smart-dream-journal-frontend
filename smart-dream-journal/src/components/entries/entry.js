import { useParams, useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";

function Entry({ userEntries }) {
  const navigate = useNavigate();
  // contexts
  const { tokenHeader } = useAuth();
  const { entryID } = useParams();

  const selectedEntry = userEntries.filter(
    (entry) => entry.id === parseInt(entryID)
  )[0];

  async function deleteEntry(entry_id) {
    return await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/profile/journal/${entry_id}`,
      {
        method: "POST",
        headers: {
          ...tokenHeader,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.status;
      })
      .catch((error) => console.log(error));
  }

  // event handler for delete journal entry
  const clickDeleteButton = async (e) => {
    e.preventDefault();
    const response = await deleteEntry(entryID);
    if (response === 201) {
      console.log("success");
      navigate("profile/journal");
    }
  };

  return (
    <div className="home">
      <div className="container">
        <h1 className="mt-5">
          {selectedEntry.title} {selectedEntry.mood}
        </h1>
        <h6 className="mb-5">{selectedEntry.date}</h6>
        <p>Keywords: {selectedEntry.keywords}</p>
        <p>Description: {selectedEntry.description}</p>
        <button onClick={clickDeleteButton}>Delete Entry</button>
      </div>
    </div>
  );
}
export default Entry;
