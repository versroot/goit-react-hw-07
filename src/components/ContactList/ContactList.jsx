import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// export default function ContactList({ contacts, filter, onDelete }) {
//   const normalizedFilter = (filter || "").toLowerCase(); // || "" to avoid error when filter is undefined

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );

//   return (
//     <ul className={css.list}>
//       {filteredContacts.map((contact) => (
//         <Contact key={contact.id} contact={contact} onDelete={onDelete} />
//       ))}
//     </ul>
//   );
// }

import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items); // get contacts from store
  const filter = useSelector((state) => state.filters.name); // get filter from store
  const normalizedFilter = filter.toLowerCase(); // normalize filter to lowercase
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
