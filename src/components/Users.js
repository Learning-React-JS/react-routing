import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {users &&
          users.map((user) => (
            <li>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
