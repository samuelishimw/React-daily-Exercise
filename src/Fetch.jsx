import { useState, useEffect } from 'react';

function GithubUserSearch() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') return; // Don't fetch if input is empty

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        setUsers(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [query]); // Dependency Array -> Runs when query changes

  return (
    <div>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Search Username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} width="50" alt="avatar" />
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUserSearch;