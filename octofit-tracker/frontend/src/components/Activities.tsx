import { useEffect, useState } from 'react'
import { fetchJson, getApiBaseUrl } from './api'

export default function Activities() {
  const [activities, setActivities] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await fetchJson<any[]>('/api/activities')
        setActivities(Array.isArray(data) ? data : [data])
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err))
      }
    }

    loadActivities()
  }, [])

  return (
    <div>
      <h1>Activities</h1>
      <p className="text-muted">API host: {getApiBaseUrl()}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {activities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Workout</th>
                <th>User</th>
                <th>Team</th>
                <th>Duration</th>
                <th>Calories</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={(activity._id ?? activity.id) || JSON.stringify(activity)}>
                  <td>{activity.name}</td>
                  <td>{activity.user}</td>
                  <td>{activity.team}</td>
                  <td>{activity.durationMinutes}</td>
                  <td>{activity.caloriesBurned}</td>
                  <td>{new Date(activity.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
