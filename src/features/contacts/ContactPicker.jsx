import React from 'react'

function ContactPicker({contacts}) {
  console.log(contacts)
  return (
    <select
    name="contacts"
    style={{ display: "block" }}
  >
    <option value="" key={-1} label="Select a contact">
    </option>
    {contacts && contacts.map((contact) => (
            <option value={contact.name} key={contact.id}>
                {contact.name}
            </option>
        )
    )}
  </select>
  )
}

export default ContactPicker;
