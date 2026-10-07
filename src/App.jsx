import './App.css'

const features = [
  'Python app hosting',
  'Secure SSH access',
  'Fast setup workflow',
  'Simple EC2 practice page',
]

function App() {
  return (
    <div className="page-shell">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">Py</span>
          <span>Python EC2 Practice</span>
        </div>
        <button type="button" className="nav-button">
          Deploy
        </button>
      </header>

      <main className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Simple cloud learning UI</p>
          <h1>Run Python on an EC2-style environment</h1>
          <p className="subtitle">
            A basic mockup for practicing your EC2 setup and Python deployment flow without
            building a full cloud dashboard.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-btn">Launch app</button>
            <button type="button" className="secondary-btn">Learn more</button>
          </div>

          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="card-box">
          <div className="mini-card top-card">
            <span className="status-dot" />
            <div>
              <small>Instance status</small>
              <strong>Running</strong>
            </div>
          </div>

          <div className="main-card">
            <div className="card-header">
              <span className="label">Python Server</span>
              <span className="pill">EC2</span>
            </div>

            <h2>demo-python-app</h2>

            <div className="detail-grid">
              <div>
                <small>Region</small>
                <strong>us-east-1</strong>
              </div>
              <div>
                <small>Type</small>
                <strong>t3.small</strong>
              </div>
              <div>
                <small>Public IP</small>
                <strong>54.123.45.67</strong>
              </div>
              <div>
                <small>OS</small>
                <strong>Ubuntu 22.04</strong>
              </div>
            </div>
          </div>

          <div className="mini-card bottom-card">
            <small>Security</small>
            <strong>Port 80 & 22 open</strong>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
