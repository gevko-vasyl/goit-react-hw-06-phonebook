import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/actions";

export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteContacts(id));
  return (
    <li className="ContactItem">
      <p className="ContactItem__text">{name}</p>
      <p className="ContactItem__text">{number}</p>
      <button className="ContactListItem__button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
