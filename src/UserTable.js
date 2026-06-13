import { useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
  ]);

  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const addUser = () => {
    setUsers([
      ...users,
      {
        id: Date.now(),
        name
      }
    ]);
    setName("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div>
      <h2>User Management</h2>

      <input
        placeholder="Add User"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>Add</button>

      <br /><br />

      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {users
          .filter((u) =>
            u.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((u) => (
            <li key={u.id}>
              {u.name}
              <button onClick={() => deleteUser(u.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}