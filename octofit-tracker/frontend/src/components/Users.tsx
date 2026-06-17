import { useEffect, useState } from 'react'
import { fetchJson, getApiBaseUrl } from './api'

export default function Users() {
  const [users, setUsers] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchJson<any[]>('/api/users')
        setUsers(Array.isArray(data) ? data : [data])
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err))
      }
    }

    loadUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <p className="text-muted">API host: {getApiBaseUrl()}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id ?? user.id ?? user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
