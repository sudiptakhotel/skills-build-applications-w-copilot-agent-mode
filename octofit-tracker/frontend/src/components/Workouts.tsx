import { useEffect, useState } from 'react'
import { fetchJson, getApiBaseUrl } from './api'

export default function Workouts() {
  const [workouts, setWorkouts] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const data = await fetchJson<any[]>('/api/workouts')
        setWorkouts(Array.isArray(data) ? data : [data])
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err))
      }
    }

    loadWorkouts()
  }, [])

  return (
    <div>
      <h1>Workouts</h1>
      <p className="text-muted">API host: {getApiBaseUrl()}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {workouts.length === 0 ? (
        <p>No workouts found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Duration</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout) => (
                <tr key={workout._id ?? workout.id ?? workout.name}>
                  <td>{workout.name}</td>
                  <td>{workout.category}</td>
                  <td>{workout.durationMinutes}</td>
                  <td>{workout.caloriesBurned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
