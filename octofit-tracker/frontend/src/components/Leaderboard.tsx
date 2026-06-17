import { useEffect, useState } from 'react'
import { fetchJson, getApiBaseUrl } from './api'

export default function Leaderboard() {
  const [entries, setEntries] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const data = await fetchJson<any[]>('/api/leaderboard')
        setEntries(Array.isArray(data) ? data : [data])
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err))
      }
    }

    loadLeaderboard()
  }, [])

  return (
    <div>
      <h1>Leaderboard</h1>
      <p className="text-muted">API host: {getApiBaseUrl()}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {entries.length === 0 ? (
        <p>No leaderboard entries found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry._id ?? entry.id ?? entry.name}>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
