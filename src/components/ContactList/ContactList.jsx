import React from "react";
import { useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/selectors";
import ContactItem from "../ContactItem/ContactItem";

import "./ContactList.scss";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <>
      <ul className="ContactList">
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
}
