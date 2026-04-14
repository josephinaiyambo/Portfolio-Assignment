const skills = [
  { category: 'Programming', items: ['Python', 'JavaScript', 'SQL'] },
  { category: 'Web Development', items: ['HTML & CSS', 'Node.js'] },
  { category: 'Tools & Frameworks', items: ['Git & GitHub', 'VS Code', 'MySQL Workbench'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability'] }
];

const projects = [
  {
    name: 'African Literature Map',
    tags: ['React', 'Maps API', 'Node.js'],
    desc: 'An interactive geographic map showing where books are set, author origins, and literary movements across Africa.',
    upcoming: true
  },
  {
    name: 'Reading Habit Tracker',
    tags: ['JavaScript', 'LocalStorage', 'CSS'],
    desc: 'Log books, set daily reading goals, track streaks, and visualize your reading progress over time.',
    upcoming: true
  },
  {
    name: 'Student Grade Manager',
    tags: ['JavaScript', 'HTML', 'CSS'],
    desc: 'An interactive JavaScript project for managing student grades. Features include adding, editing, deleting and searching students by name or student number, assigning letter grades, pass/fail status, alphabetical sorting and sample data.',
    github: 'https://github.com/josephinaiyambo/Code-Blossom-Stud…'
  },
  {
    name: 'Portfolio Website',
    tags: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A clean, responsive personal portfolio showcasing skills, projects and contact info.',
    github: 'https://github.com/josephinaiyambo/portfolio'
  }
];

// FIX 1: changed 'skills-grid' → 'skillsGrid' to match the HTML id
const sg = document.getElementById('skillsGrid');
skills.forEach(s => {
  // FIX 2: wrapped HTML strings in backticks (template literals)
  sg.innerHTML += `
    <div class="skill-card">
      <div class="skill-category">${s.category}</div>
      <ul class="skill-list">
        ${s.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
});

const pg = document.getElementById('projectsGrid');
projects.forEach(p => {
  const hasGithub = p.github ? `<a href="${p.github}" target="_blank" class="card-link"><i class="fa-brands fa-github"></i> GitHub</a>` : '';
  const upcomingBadge = p.upcoming ? `<span class="upcoming-badge">Upcoming</span>` : '';

  pg.innerHTML += `
    <div class="project-card">
      <div class="card-box">${p.name} ${upcomingBadge}</div>
      <div class="card-body">
        <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
        <div class="card-desc">${p.desc}</div>
        ${hasGithub ? `<div class="card-links">${hasGithub}</div>` : ''}
      </div>
    </div>
  `;
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let ok = true;

  const v      = id => document.getElementById(id);
  const setErr = (fid, eid, msg) => { v(fid).classList.add('err'); v(eid).textContent = msg; ok = false; };
  const clrErr = (fid, eid)      => { v(fid).classList.remove('err'); v(eid).textContent = ''; };

  clrErr('f-name',  'e-name');
  clrErr('f-email', 'e-email');
  clrErr('f-msg',   'e-msg');

  if (!v('f-name').value.trim())
    setErr('f-name', 'e-name', 'Name is required.');

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('f-email').value.trim()))
    setErr('f-email', 'e-email', 'Enter a valid email.');

  if (v('f-msg').value.trim().length < 10)
    setErr('f-msg', 'e-msg', 'Message too short (min 10 chars).');

  if (ok) {
    form.submit();
  }
});

document.getElementById('yr').textContent = new Date().getFullYear();