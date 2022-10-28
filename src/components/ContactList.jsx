const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: <span>{contact.number}</span>
          </p>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
