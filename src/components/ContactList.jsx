const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: <span>{contact.number}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
