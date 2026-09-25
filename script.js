// script.js – all dynamic content for BMS KIUT portal

(function() {
  "use strict";

  // ----- DATA -----
  const years = [
    { year: 'Year 1', subjects: 'Anatomy, Biochemistry, Physiology', icon: 'fa-microscope' },
    { year: 'Year 2', subjects: 'Pathology, Pharmacology, Microbiology', icon: 'fa-vial' },
    { year: 'Year 3', subjects: 'Clinical Medicine, Surgery I', icon: 'fa-heartbeat' },
    { year: 'Year 4', subjects: 'Surgery II, Paediatrics, OB/GYN', icon: 'fa-baby' },
    { year: 'Year 5', subjects: 'Internal Med., Community Health', icon: 'fa-users' }
  ];

  const newsItems = [
    { title: 'Clinical rotations start April', date: '2026-04-10', desc: 'Year 4 & 5 students to report to teaching hospitals.' },
    { title: 'BMS symposium 2026', date: '2026-05-22', desc: 'Register for the annual medical conference.' },
    { title: 'New resource library', date: '2026-03-28', desc: 'Access updated e-books and past papers.' },
    { title: 'Research grant available', date: '2026-06-01', desc: 'Apply for KIUT research fund.' }
  ];

  const crData = [
    { name: 'Aisha Nkosi', phone: '+255 712 345 678' },
    { name: 'David Mwangi', phone: '+255 755 432 109' },
    { name: 'Grace Atieno', phone: '+255 698 221 334' },
    { name: 'James Omondi', phone: '+255 784 556 789' }
  ];

  const facultyData = [
    { name: 'Prof. E. Kato', title: 'Dean, School of Medicine' },
    { name: 'Dr. M. Lwanga', title: 'Head, Department of Surgery' },
    { name: 'Dr. R. Nambusi', title: 'Head, Department of Medicine' }
  ];

  const scheduleData = [
    { day: 'Monday', time: '08:00 – 10:00', course: 'Anatomy (Y1)', venue: 'LH 203' },
    { day: 'Monday', time: '10:15 – 12:00', course: 'Pathology (Y2)', venue: 'LH 105' },
    { day: 'Tuesday', time: '09:00 – 11:00', course: 'Clinical Skills (Y3)', venue: 'Skills Lab' },
    { day: 'Wednesday', time: '10:00 – 12:30', course: 'Surgery II (Y4)', venue: 'LH 301' },
    { day: 'Thursday', time: '08:30 – 10:30', course: 'Community Health (Y5)', venue: 'Seminar Rm 4' },
    { day: 'Friday', time: '14:00 – 16:00', course: 'Integrated Cases (All years)', venue: 'Auditorium' }
  ];

  // ----- inject resources (year grid) -----
  function renderResources() {
    const grid = document.getElementById('yearGrid');
    if (!grid) return;
    grid.innerHTML = years.map(y => `
      <div class="year-card">
        <i class="fas ${y.icon}"></i>
        <h3>${y.year}</h3>
        <p>${y.subjects}</p>
        <span class="resource-badge"><i class="fas fa-download"></i> Materials</span>
      </div>
    `).join('');
  }

  // ----- inject news -----
  function renderNews() {
    const container = document.getElementById('newsGrid');
    if (!container) return;
    container.innerHTML = newsItems.map(n => `
      <div class="news-item">
        <h4>${n.title}</h4>
        <small><i class="far fa-calendar-alt"></i> ${n.date}</small>
        <p>${n.desc}</p>
      </div>
    `).join('');
  }

  // ----- inject CR contacts -----
  function renderCRs() {
    const list = document.getElementById('crList');
    if (!list) return;
    list.innerHTML = crData.map(c => `
      <li>
        <span><i class="fas fa-user-circle"></i> ${c.name}</span>
        <span class="phone"><i class="fas fa-phone-alt"></i> ${c.phone}</span>
      </li>
    `).join('');
  }

  // ----- inject faculty -----
  function renderFaculty() {
    const list = document.getElementById('facultyList');
    if (!list) return;
    list.innerHTML = facultyData.map(f => `
      <li>
        <span><i class="fas fa-chalkboard-teacher"></i> ${f.name}</span>
        <span class="phone">${f.title}</span>
      </li>
    `).join('');
  }

  // ----- inject schedule table -----
  function renderSchedule() {
    const wrap = document.getElementById('scheduleTableWrap');
    if (!wrap) return;
    let html = `<table class="schedule-table">
      <thead><tr><th>Day</th><th>Time</th><th>Course</th><th>Venue</th></tr></thead><tbody>`;
    scheduleData.forEach(row => {
      html += `<tr><td>${row.day}</td><td>${row.time}</td><td>${row.course}</td><td>${row.venue}</td></tr>`;
    });
    html += `</tbody></table>`;
    wrap.innerHTML = html;
  }

  // ----- WhatsApp link (demo) -----
  function setWhatsAppLink() {
    const link = document.getElementById('whatsappLink');
    if (link) {
      // use a placeholder group link – in real scenario replace with actual invite
      link.href = 'https://chat.whatsapp.com/YourBMSGroupInviteLink';
    }
  }

  // ----- mobile hamburger -----
  function setupHamburger() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav-links');
    if (hamburger && nav) {
      hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('open');
      });
      // close on link click (mobile)
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
      });
    }
  }

  // ----- init all -----
  document.addEventListener('DOMContentLoaded', function() {
    renderResources();
    renderNews();
    renderCRs();
    renderFaculty();
    renderSchedule();
    setWhatsAppLink();
    setupHamburger();
  });

})();