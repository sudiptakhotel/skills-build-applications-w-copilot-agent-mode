import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Users from './components/Users'
import Teams from './components/Teams'
import Activities from './components/Activities'
import Workouts from './components/Workouts'
import Leaderboard from './components/Leaderboard'

function App() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">OctoFit Tracker</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/activities" className="nav-link">
                  Activities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/teams" className="nav-link">
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/workouts" className="nav-link">
                  Workouts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/leaderboard" className="nav-link">
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default App
