import React, { useState } from 'react'
import { FaFilePdf, FaUsers, FaVideo } from 'react-icons/fa'

const tabs = [
  { id: 'overview', label: 'Overview', icon: <FaVideo /> },
  { id: 'report', label: 'Report', icon: <FaFilePdf /> },
  { id: 'team', label: 'Team', icon: <FaUsers /> }
]

export default function App() {
  const [active, setActive] = useState('overview')
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0 })

  const handleTabClick = (id, e) => {
    setActive(id)
    const btn = e.currentTarget
    setPillStyle({
      width: btn.offsetWidth,
      left: btn.offsetLeft
    })
  }

  // Initialize pill position on first render and when active changes
  React.useEffect(() => {
    const activeBtn = document.querySelector('.tab-btn-active')
    if (activeBtn) {
      setPillStyle({
        width: activeBtn.offsetWidth,
        left: activeBtn.offsetLeft
      })
    }
  }, [active])

  return (
    <div className="app-bg text-gray-900">
      <div className="app-container">
        <header className="glass-card mb-6 app-header text-center">
          <h1 className="text-3xl font-extrabold"><span className="text-emphasis">Spectre V1</span> — Research & Demonstration</h1>
          <p className="text-sm app-subtitle">Academic tutorial and safe demonstration</p>
        </header>

        <nav className="mb-6 flex justify-center">
          <div className="tabs-container">
            <div className="tabs-pill" style={pillStyle}></div>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={(e) => handleTabClick(t.id, e)}
                className={`tab-btn ${active === t.id ? 'tab-btn-active' : ''}`}>
                <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/30 text-white/90 shadow-sm">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </nav>

        <main className="mt-6 space-y-6">
          {active === 'overview' && <Overview />}
          {active === 'report' && <Report />}
          {active === 'team' && <Team />}
        </main>
      </div>
    </div>
  )
}

function Overview() {
  const [Error, setError] = useState(false)

  return (
    <section className="glass-card">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <div className="media-wrap w-full">
            {!Error ? (
              <video
                controls
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                className="w-full h-full object-contain"
                poster="/images/video-poster.jpg"
              >
                <source src="../../vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="p-6 text-center">
                <div className="mb-3 text-sm text-gray-300">Video failed to load.</div>
                <a className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md" href="/vid.mp4" target="_blank" rel="noreferrer">Open video directly</a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center p-2 md:p-4">
          <h2 className="text-2xl font-semibold mb-3"><span className="text-emphasis">Executive</span> Summary</h2>
          <p className="text-gray-300 mb-3"><span className="text-emphasis">Spectre V1</span> is a flaw in <span className="text-emphasis">modern processors</span> that comes from the way they speed things up by guessing what will happen next. Sometimes these guesses briefly touch information they shouldn't, and small traces of that information can be measured and reconstructed in a controlled experiment.</p>

          <p className="text-gray-300">Our project explains how this happens and demonstrates it safely, showing how a <span className="text-emphasis">performance feature</span> can accidentally create a <span className="text-emphasis">security risk</span>. It highlights why improving <span className="text-emphasis">processor design</span> is important for keeping future systems secure.</p>
        </div>
      </div>
    </section>
  )
}

function Report() {
  return (
    <section className="glass-card">
      <h2 className="text-2xl font-semibold mb-4 text-center"><span className="text-emphasis">Academic</span> Tutorial <span className="text-emphasis">Report</span></h2>
      <div className="mb-4 flex justify-center gap-3">
        <a className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md" href="/report.pdf" target="_blank" rel="noreferrer">Download Full Report (PDF)</a>
        <a className="inline-block bg-gray-700 text-gray-100 px-4 py-2 rounded-md" href="/report.pdf" target="_blank" rel="noreferrer">View Report Online</a>
      </div>

      <div className="rounded-md overflow-hidden">
        <iframe src="/report.pdf" className="report-iframe" title="report"></iframe>
      </div>
    </section>
  )
}

function Team() {

  const members = [
    { name: 'Rohan Riaz', role: 'Research & Documentation', img: '/images/rohan.jpg' },
    { name: 'Ramail Khan', role: 'Technical Implementation', img: '/images/ramail.jpg' }
  ]

  return (
    <section className="glass-card">
      <h2 className="text-2xl font-semibold mb-6 text-center"><span className="text-emphasis">Research</span> Team</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {members.map(m => (
          <div key={m.name} className="team-card">
            <div className="avatar">
              <img src={m.img} alt={m.name} />
            </div>
            <div>
              <div className="font-semibold text-gray-100"><span className="text-emphasis">{m.name}</span></div>
              <div className="text-sm text-gray-400">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
