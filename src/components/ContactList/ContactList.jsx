import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ users, onUserDelete }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {Array.isArray(users) && users.map((user) => (
          <Contact key={user.id} user={user} onUserDelete={onUserDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
