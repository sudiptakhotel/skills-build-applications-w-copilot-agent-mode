import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Teams from './pages/Teams'
import Activity from './pages/Activity'

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
                <NavLink to="/teams" className="nav-link">
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/activity" className="nav-link">
                  Activity
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </div>
  )
}

export default App
