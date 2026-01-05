import React, { useState, useEffect } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [input, setInput] = useState({ name: "", phone: "" });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  // Load contacts from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("contacts");
    if (stored) setContacts(JSON.parse(stored));
  }, []);

  // Save contacts to localStorage on change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!input.name.trim() || !input.phone.trim()) {
      alert("Both name and phone are required.");
      return;
    }

    if (editId !== null) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editId
            ? { ...contact, name: input.name, phone: input.phone }
            : contact
        )
      );
      setEditId(null);
    } else {
      setContacts([
        ...contacts,
        {
          id: Date.now(),
          name: input.name,
          phone: input.phone,
        },
      ]);
    }

    setInput({ name: "", phone: "" });
  };

  const editContact = (contact) => {
    setInput({ name: contact.name, phone: contact.phone });
    setEditId(contact.id);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>📇 Contact List</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={input.phone}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleSubmit}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <input
        type="text"
        placeholder="🔍 Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "15px", width: "100%" }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredContacts.map((contact) => (
          <li
            key={contact.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <strong>{contact.name}</strong> - {contact.phone}
            <div style={{ marginTop: "5px" }}>
              <button onClick={() => editContact(contact)} style={{ marginRight: "10px" }}>
                ✏️ Edit
              </button>
              <button onClick={() => deleteContact(contact.id)}>🗑️ Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;