import { useState, useEffect } from "react";
function UserList() {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [emails, setEmails] = useState<string[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const usernames = data.map((user: any) => user.name);
        const emails = data.map((user: any) => user.email);
        setEmails(emails);
        setUsers(usernames);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar os usuários:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Carregando usuários...</p>;
  }
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, i) => (
          <li key={user}>
            {user} // {emails[i]}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
