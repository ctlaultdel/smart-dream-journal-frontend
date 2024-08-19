import { useParams, useNavigate } from "react-router";
import { useAuth } from "../../../contexts/authContext";
import "./entry.css";

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
      `https://smart-dream-journal-backend-63ee0b4cbbaa.herokuapp.com/profile/journal/${entryID}/`,
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
    <section className="entry-wrapper">
      <h1 className="mt-5">
        {entry.title} {entry.mood}
      </h1>
      <h6 className="mb-5">{entry.date}</h6>
      <p>Keywords: {entry.keywords}</p>
      <p>Description: {entry.description}</p>
      <button onClick={clickDeleteButton} className="delete-button">
        Delete Entry
      </button>
    </section>
  );
}
export default Entry;
