import contactData from "../../contactData.json"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import { useState, useEffect } from "react"
import css from './App.module.css'
import { nanoid } from "nanoid"



export default function App() {

  const [search, setSearch] = useState('');
  
  const [contacts, setContacts] = useState(() => {
        const savedContacts = JSON.parse(localStorage.getItem('currentContacts'));
    if (savedContacts !== null && savedContacts.length > 0) {
        return savedContacts;
    } else {
        return contactData;
    }
  });

  useEffect(() => {localStorage.setItem(`currentContacts`, JSON.stringify(contacts)) }, [contacts]);
  

  

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      newContact.id = nanoid();
      return [...prevContact, newContact];
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()) || contact.number.includes(search) || contact.number.split('-').join('').includes(search)
  );

   const deleteContact = (contactId) => {
    setContacts((lastContacts) => {
      return lastContacts.filter((contact) => contact.id !== contactId);
    });
  };


  return (
    <div className={css.container}>
  <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
  <SearchBox value={search} onSearch={setSearch} />
      <ContactList items={visibleContacts} onDelete={deleteContact} />
</div>
  )
}

