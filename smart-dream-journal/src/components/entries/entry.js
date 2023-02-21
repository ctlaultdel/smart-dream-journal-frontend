import { useParams, useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";

function Entry() {
  const { userEntries, setUserEntries } = useAuth();

  const navigate = useNavigate();

  // contexts
  const { tokenHeader } = useAuth();
  const { entryID } = useParams();

  const entry = userEntries.filter(
    (entry) => entry.id === parseInt(entryID)
  )[0];

  async function deleteEntry(entryID) {
    return await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/profile/journal/${entryID}`,
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
      // remove the removed entry from userEntries local storage
      const entries = userEntries.filter(
        (entry) => entry.id !== parseInt(entryID)
      );
      localStorage.setItem("USERENTRIES", JSON.stringify(entries));
      setUserEntries(JSON.parse(localStorage.getItem("USERENTRIES")));
      navigate("/journal");
    }
  };

  return (
    <div className="home">
      <div className="container">
        <h1 className="mt-5">
          {entry.title} {entry.mood}
        </h1>
        <h6 className="mb-5">{entry.date}</h6>
        <p>Keywords: {entry.keywords}</p>
        <p>Description: {entry.description}</p>
        <button onClick={clickDeleteButton}>Delete Entry</button>
      </div>
    </div>
  );
}
export default Entry;
