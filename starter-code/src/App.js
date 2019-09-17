import React, {useState} from 'react';
import fullListOfContacts from './contacts.json'
import './App.css';

function App() {
  // The initial state hook `contacts` is initialised with the 5 first elements of fullListOfContacts
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0,5));
  // ...


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
      </thead>

      <tbody>
          {contacts.map((contact, i) => (
            <tr key={i}>
              <td>
                <img src={contact.pictureUrl} style={{width: 100}} alt="pictureUrl" />
              </td>
              <td>
                {contact.name}
              </td>
              <td>
                {contact.popularity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

    </div>
  );
}

export default App;
