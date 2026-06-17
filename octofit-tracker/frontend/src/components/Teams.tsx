import { useEffect, useState } from 'react'
import { fetchJson, getApiBaseUrl } from './api'

export default function Teams() {
  const [teams, setTeams] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const data = await fetchJson<any[]>('/api/teams')
        setTeams(Array.isArray(data) ? data : [data])
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err))
      }
    }

    loadTeams()
  }, [])

  return (
    <div>
      <h1>Teams</h1>
      <p className="text-muted">API host: {getApiBaseUrl()}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {teams.length === 0 ? (
        <p>No teams found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team._id ?? team.id ?? team.name}>
                  <td>{team.name}</td>
                  <td>{team.description}</td>
                  <td>{Array.isArray(team.members) ? team.members.length : team.members}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
