import React from "react";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ user, onUserDelete }) => {
  return (
    <li className={css.contactItem}>
      <p>
        <FaUser className={css.icon} />
        {user.name}
      </p>
      <p>
        <FaPhoneAlt className={css.icon} />
        {user.number}
      </p>
      <button type="button" onClick={() => onUserDelete(user.id)}>Delete</button>
    </li>
  );
};

export default Contact;
