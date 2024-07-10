import React, { useState, useEffect } from "react";
import "../App/App.css";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import userData from "../../users.json";
import { nanoid } from "nanoid";

function App() {
  const [users, setUsers] = useState(() => {
    const persistedUsers = localStorage.getItem("users");
    if (!persistedUsers) return userData;
    const parsedUsers = JSON.parse(persistedUsers);
    return parsedUsers;
  });

  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const onAddUser = (formData) => {
    const newUser = {
      ...formData,
      id: nanoid(),
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const onUserDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter((user) => {
    const nameIncludesFilter =
      user.name && user.name.toLowerCase().includes(filter.toLowerCase());

    const numberIncludesFilter =
      typeof user.number === "string" &&
      user.number &&
      user.number.toLowerCase().includes(filter.toLowerCase());

    return nameIncludesFilter || numberIncludesFilter;
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <br />
      <ContactForm onAddUser={onAddUser} />
      <SearchBox handleFilter={handleFilter} value={filter} />
      <ContactList users={filteredUsers} onUserDelete={onUserDelete} />
    </div>
  );
}

export default App;
