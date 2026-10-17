import { useEffect, useState } from 'react'

const email = 'mera-poojasinghcsbs@gmail.com'
const github = 'https://github.com/poojasinghcsbs-ux'
const linkedin = 'https://www.linkedin.com/in/pooja-singh-0b1a62293/'

const navigation = [
  { label: 'About', href: '#about', icon: '♙' },
  { label: 'Experience', href: '#experience', icon: '▣' },
  { label: 'Projects', href: '#work', icon: '⬡' },
  { label: 'Skills', href: '#skills', icon: '⚒' },
  { label: 'Education', href: '#education', icon: '▱' },
  { label: 'What Drives Me', href: '#drives', icon: '☆' },
  { label: 'Contact', href: '#contact', icon: '✉' },
]

const projects = [
  {
    number: '01',
    kind: 'FULL STACK · PLATFORM CONCEPT',
    title: 'ScholarMate',
    description: 'A student-focused scholarship platform concept for discovering relevant opportunities and keeping applications organized.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    highlights: ['Eligibility-based scholarship discovery', 'Application tracking and renewal reminders', 'Timely notifications for important updates'],
  },
  {
    number: '02',
    kind: 'FULL STACK · IN PROGRESS',
    title: 'Smart Job Portal Enhancement',
    description: 'Enhancing a job portal concept with tools that help candidates assess opportunities and make more informed applications.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    highlights: ['Application Reality Score', 'Fake-job detection concept', 'Skill assessments for candidates'],
  },
  {
    number: '03',
    kind: 'FULL STACK APPLICATION',
    title: 'AI Interview Preparation',
    description: 'An interview practice platform concept with aptitude modules, progress tracking, a responsive dashboard, and backend APIs.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    highlights: ['Structured interview practice', 'Aptitude modules and progress tracking', 'Responsive candidate dashboard'],
  },
  {
    number: '04',
    kind: 'RESPONSIVE WEB DESIGN',
    title: 'RGPV College Website',
    description: 'A responsive university website with clear navigation, useful information sections, contact details, and JavaScript interactions.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    highlights: ['Responsive university information pages', 'Clear navigation and contact details', 'Interactive elements with JavaScript'],
    demo: '/media/rgpv-university-portal-demo.mp4',
  },
  {
    number: '05',
    kind: 'CYBERSECURITY · MONITORING CONCEPT',
    title: 'CyberShield SOC',
    description: 'A college-lab security monitoring concept for reviewing activity and surfacing potentially restricted or suspicious behavior.',
    stack: ['Security monitoring', 'Admin dashboard', 'Activity alerts'],
    highlights: ['Central monitoring dashboard concept', 'Restricted-site and app activity signals', 'Alerts for suspicious activity'],
  },
  {
    number: '06',
    kind: 'CYBERSECURITY · PLATFORM CONCEPT',
    title: 'Scam & Fake Job Detection',
    description: 'A platform concept focused on spotting suspicious job listings and helping candidates report potential scams.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    highlights: ['Suspicious listing awareness', 'Reporting flow concept', 'Dashboard-based scam information'],
  },
  {
    number: '07',
    kind: 'FRONTEND · IN PROGRESS',
    title: 'Google Classroom Clone',
    description: 'A Google Classroom-inspired frontend that I’m currently building to practice creating clear, familiar learning interfaces.',
    stack: ['HTML', 'CSS', 'React', 'JavaScript'],
    highlights: ['Classroom-inspired interface', 'Frontend implementation in progress', 'Built with HTML, CSS, React, and JavaScript'],
  },
]

const skillGroups = [
  { title: 'Languages', subtitle: 'Programming languages & core technologies', icon: '⌘', skills: ['Java', 'JavaScript', 'C', 'C++'] },
  { title: 'Frontend Development', subtitle: 'Interfaces and responsive web experiences', icon: '◈', skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'Responsive design'] },
  { title: 'Backend Development', subtitle: 'Services, APIs, and authentication', icon: '⌁', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT authentication'] },
  { title: 'Databases & Tools', subtitle: 'Data, collaboration, and development tools', icon: '◫', skills: ['MongoDB', 'SQL', 'Git', 'GitHub', 'Postman', 'Jira', 'Scrum'] },
]

function SectionHeading({ eyebrow, title, description, number }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-eyebrow">{eyebrow}<span>{number}</span></p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={'project-card project-card-' + project.number}>
      <div className="project-topline">
        <span className="project-kind">{project.kind}</span>
        <span className="project-number">{project.number}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-meta-heading"><span aria-hidden="true">⌘</span> Tech Stack</div>
      <div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
      <div className="project-meta-heading highlight-heading"><span aria-hidden="true">✦</span> Project Highlights</div>
      <ul className="project-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
      {project.demo && <a className="project-demo" href={project.demo} target="_blank" rel="noreferrer">Watch website demo <span aria-hidden="true">↗</span></a>}
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(() => navigation.find((item) => item.href === window.location.hash)?.href.slice(1) || 'about')

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35
      let current = 'about'
      navigation.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section && section.getBoundingClientRect().top <= marker) current = section.id
      })
      setActiveSection(current)
    }
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="mobile-header">
        <a className="mobile-brand" href="#home" onClick={closeMenu} aria-label="Pooja Singh, home"><span>PS</span><b>Pooja Singh</b></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close contents menu' : 'Open contents menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><small>CONTENTS</small>
        </button>
      </header>

      <aside className={'contents-panel ' + (menuOpen ? 'is-open' : '')} aria-label="Portfolio contents">
        <p className="contents-title">CONTENTS</p>
        <nav className="contents-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={activeSection === item.href.slice(1) ? 'active' : ''} aria-current={activeSection === item.href.slice(1) ? 'location' : undefined} onClick={() => { setActiveSection(item.href.slice(1)); closeMenu() }}>
              <span className="contents-icon" aria-hidden="true">{item.icon}</span><span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
      {menuOpen && <button className="menu-backdrop" type="button" aria-label="Close contents menu" onClick={closeMenu} />}

      <main className="page-content">
        <section className="hero" id="home">
          <div className="hero-particles" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="hero-profile">
            <div className="portrait-ring"><img src="/images/pooja-singh.jpeg" alt="Portrait of Pooja Singh" /></div>
            <span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" />
          </div>
          <h1>Pooja Singh</h1>
          <p className="hero-subtitle">Software Engineer <span>•</span> Full Stack Developer <span>•</span> Bhopal, India</p>
          <div className="availability-pill"><span className="status-dot" /> Available for opportunities</div>
          <div className="hero-actions">
            <a className="button button-primary" href="/pooja-singh-resume.pdf" target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span> View CV</a>
            <a className="button button-secondary" href="/pooja-singh-resume.pdf" download><span aria-hidden="true">⇩</span> Download CV</a>
          </div>
          <div className="hero-contact">
            <span className="hero-location"><span aria-hidden="true">⌖</span> Bhopal, Madhya Pradesh</span>
            <a href={'mailto:' + email}><span aria-hidden="true">✉</span> {email}</a>
            <a href={linkedin} target="_blank" rel="noreferrer"><span aria-hidden="true">in</span> LinkedIn</a>
            <a href={github} target="_blank" rel="noreferrer"><span aria-hidden="true">⌘</span> GitHub</a>
          </div>
          <p className="hero-tagline">“Building useful software, one project at a time” <span>•</span> CSBS ’27 <span>•</span> Full-stack development</p>
        </section>

        <section className="section content-wrap section-about" id="about">
          <SectionHeading eyebrow="ABOUT ME" title="A curious, practical problem solver." description="I’m a Computer Science and Business Systems student who enjoys building useful, accessible web applications." number="01 / 07" />
          <div className="about-card surface-card">
            <div className="about-main">
              <h3>Learning the full stack by building.</h3>
              <p>I work across frontend and backend development, with hands-on experience in React, Node.js, Express, MongoDB, and Java. I like understanding how each part of an application fits together, then turning that into clear, dependable features.</p>
            </div>
            <div className="glance-grid">
              <div className="glance-item"><span>FOCUS</span><b>Full-stack development</b></div>
              <div className="glance-item"><span>EDUCATION</span><b>B.Tech · CSBS</b></div>
              <div className="glance-item"><span>BASED IN</span><b>Bhopal, India</b></div>
              <div className="glance-item"><span>PORTFOLIO</span><b>7 projects</b></div>
            </div>
          </div>
        </section>

        <section className="section content-wrap" id="experience">
          <SectionHeading eyebrow="PROFESSIONAL EXPERIENCE" title="Hands-on experience." description="Practical development work alongside my B.Tech in Computer Science and Business Systems." number="02 / 07" />
          <div className="experience-grid">
            <article className="experience-card surface-card">
              <div className="experience-heading"><span className="experience-icon">✦</span><span className="experience-type">INTERNSHIP</span></div>
              <p className="experience-date">JOINED 1 SEP · 3-MONTH INTERNSHIP</p>
              <h3>Full Stack Developer Intern</h3>
              <p className="experience-org">Unified Mentor</p>
              <p className="experience-copy">Contributing to web application development and gaining practical experience with frontend and backend integration and development workflows.</p>
            </article>
            <article className="experience-card surface-card">
              <div className="experience-heading"><span className="experience-icon">✦</span><span className="experience-type">INTERNSHIP</span></div>
              <p className="experience-date">2-MONTH INTERNSHIP</p>
              <h3>Full Stack Developer Intern</h3>
              <p className="experience-org">Cybrom Institute · Bhopal</p>
              <p className="experience-copy">Completed hands-on development training and strengthened practical skills in web development and application building.</p>
            </article>
          </div>
        </section>

        <section className="section content-wrap section-projects" id="work">
          <SectionHeading eyebrow="SELECTED WORK" title="Featured projects." description="A mix of full-stack applications and responsive web development built around practical problems." number="03 / 07" />
          <div className="projects-grid">{projects.map((project) => <ProjectCard project={project} key={project.number} />)}</div>
          <a className="github-link" href={github} target="_blank" rel="noreferrer">Explore my GitHub <span aria-hidden="true">↗</span></a>
        </section>

        <section className="section content-wrap" id="skills">
          <SectionHeading eyebrow="TECHNICAL EXPERTISE" title="Tools I use to build." description="A practical toolkit spanning programming, frontend, backend, data, and collaboration." number="04 / 07" />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card surface-card" key={group.title}>
                <div className="skill-card-heading"><span className="skill-icon">{group.icon}</span><span className="skill-count">{group.skills.length} skills</span></div>
                <h3>{group.title}</h3>
                <p className="skill-subtitle">{group.subtitle}</p>
                <div className="tag-list">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="core-skills"><span>CORE</span><div>{['OOP', 'DSA fundamentals', 'DBMS', 'SDLC', 'Problem solving', 'Team collaboration'].map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div>
        </section>

        <section className="section content-wrap section-education" id="education">
          <SectionHeading eyebrow="EDUCATION" title="Learning with purpose." description="Formal education that gives context to my software development practice." number="05 / 07" />
          <div className="education-grid">
            <article className="education-card surface-card">
              <div className="education-topline"><span className="education-icon">⌂</span><span>EXPECTED 2027</span></div>
              <h3>B.Tech · Computer Science & Business Systems</h3>
              <p className="education-org">School of Information Technology, RGPV · Bhopal</p>
              <p>Building a foundation in software development, databases, and computer science.</p>
            </article>
            <article className="education-card surface-card">
              <div className="education-topline"><span className="education-icon">⌂</span><span>SECONDARY EDUCATION</span></div>
              <h3>Gurukul Academy Co-Ed School</h3>
              <p className="education-org">Bhopal, Madhya Pradesh</p>
              <div className="grade-pills"><span>Class XII <b>65%</b></span><span>Class X <b>67%</b></span></div>
            </article>
          </div>
        </section>

        <section className="section content-wrap section-drives" id="drives">
          <SectionHeading eyebrow="WHAT DRIVES ME" title="Driven by curiosity & impact." description="I’m motivated by turning real problems into software that’s useful and easy to use." number="06 / 07" />
          <div className="drives-card surface-card">
            <div className="drives-copy">
              <p>I enjoy working across the full stack—from shaping the user experience to building the APIs and data flow behind it. I’m always learning, and I like applying what I learn to make my work clearer and more reliable.</p>
              <p>Good software comes from understanding the problem, being patient with the details, and staying open to better ways of solving it. That curiosity is what keeps me building.</p>
              <strong>Persistence + curiosity = progress</strong>
            </div>
            <div className="drives-steps">
              <div><span>01</span><b>Understand<br />the problem</b></div>
              <div><span>02</span><b>Build a useful<br />solution</b></div>
              <div><span>03</span><b>Learn from<br />the process</b></div>
            </div>
          </div>
        </section>

        <section className="section content-wrap section-contact" id="contact">
          <div className="contact-card surface-card">
            <p className="section-eyebrow">HAVE A ROLE IN MIND? <span>07 / 07</span></p>
            <h2>Let’s build<br /><em>something useful.</em></h2>
            <p className="contact-copy">I’m open to opportunities in software engineering and full-stack development.</p>
            <a className="button button-primary contact-button" href={'mailto:' + email}><span aria-hidden="true">✉</span> Get in touch</a>
            <div className="contact-links">
              <a href={'mailto:' + email}>{email}</a>
              <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home"><span>PS</span><b>POOJA SINGH</b></a>
        <span>Software Engineer · Full Stack Developer</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App
