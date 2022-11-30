import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

let firstInitialFive = contactsData.slice(0, 5);

function App() {
  const [contacts] = useState(contactsData);
  const [contactsToDisplay, setContatsToDisplay] = useState(firstInitialFive);

  const addContact = () => {
    const randomNumber = Math.floor(Math.random() * contactsData.length);
    setContatsToDisplay([contacts[randomNumber], ...contactsToDisplay]);
    console.log(contactsToDisplay);
  };

  const sortPopularity = () => {
    const sortedByPop = [...contactsToDisplay].sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    setContatsToDisplay(sortedByPop);
  };

  const sortByName = () => {
    const sortedByName = [...contactsToDisplay].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    setContatsToDisplay(sortedByName);
  };

  const deleteContact = (contactId) => {
    const filteredContact = contactsToDisplay.filter(
      (contact) => contact.id !== contactId
    );
    setContatsToDisplay(filteredContact);
  };

  return (
    <>
      <img src="./logo192.png" alt="asdads" />
      <button onClick={addContact}>Add random contact</button>
      <button onClick={sortPopularity}>Sort by pOpularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table className="table">
        <tr>
          <th>Image:</th>
          <th>Name:</th>
          <th>Popularity:</th>
          <th>Won Oscar:</th>
          <th>Won Emmy:</th>
          <th>Actions:</th>
        </tr>
        {contactsToDisplay.map((contact) => (
          <tr>
            <td>
              <img  className="img-contact" src={contact.pictureUrl} alt="" />
            </td>
            <td> {contact.name}</td>
            <td> {contact.popularity.toFixed(2)}</td>
            <td> {contact.wonEmmy ? <p> 🎷</p> : <p>Nope </p>}</td>
            <td> {contact.wonOscar ? <p> 🎷</p> : <p>Nope </p>}</td>
            <td>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
export default App;
