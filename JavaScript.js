const skills = [
  { category: 'Programming', items: ['Python', 'JavaScript', 'SQL'] },
  { category: 'Web Development', items: ['HTML & CSS', 'Node.js'] },
  { category: 'Tools & Frameworks', items: ['Git & GitHub', 'VS Code', 'MySQL Workbench'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability'] }
];

const projects = [
  { name: 'African Literature Map', tags: ['React', 'Maps API', 'Node.js'], desc: 'An interactive geographic map showing where books are set, author origins, and literary movements across Africa.' },
  { name: 'Reading Habit Tracker', tags: ['JavaScript', 'LocalStorage', 'CSS'], desc: 'Log books, set daily reading goals, track streaks, and visualize your reading progress over time.' },
];

const sg = document.getElementById('skillsGrid');
skills.forEach(s => {
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
  pg.innerHTML += `
    <div class="project-card">
      <div class="card-box">${p.name}</div>
      <div class="card-body">
        <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
        <div class="card-desc">${p.desc}</div>
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