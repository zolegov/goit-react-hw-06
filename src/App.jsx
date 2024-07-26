import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector((state) => state.filters.filter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="appTitle">Phonebook</h1>
      <ContactForm onSubmit={(values) => dispatch(addContact(values))} />
      <SearchBox
        value={filter}
        onFilter={(value) => dispatch(setFilter(value))}
      />
      <ContactList
        contacts={visibleContacts}
        onDelete={(id) => dispatch(deleteContact(id))}
      />
    </div>
  );
}

export default App;
