// public/scripts/header.js

const renderHeader = () => {
  const header = document.querySelector('header');
  header.classList.add('site-header');

  // Logo / Title container
  const logoWrap = document.createElement('div');
  logoWrap.classList.add('logo');
  const mark = document.createElement('div');
  mark.classList.add('mark');
  logoWrap.appendChild(mark);

  const headTitle = document.createElement('div');
  headTitle.classList.add('head-title');
  const h1 = document.createElement('h1');
  h1.textContent = 'AI Startups Hub';
  const p = document.createElement('p');
  p.textContent = 'Discover the best AI startups for education';
  headTitle.appendChild(h1);
  headTitle.appendChild(p);

  header.appendChild(logoWrap);
  header.appendChild(headTitle);

  // Navigation
  const nav = document.createElement('div');
  nav.classList.add('nav');

  const links = [
    { name: 'Home', href: 'index.html' },
    { name: 'Startups', href: 'index.html' },
    { name: 'About', href: 'about.html' },
    { name: 'Contact', href: 'contact.html' }
  ];

  links.forEach(l => {
    const btn = document.createElement('a');
    btn.classList.add('nav-btn');
    btn.textContent = l.name;
    btn.href = l.href;
    btn.setAttribute('role', 'button');
    nav.appendChild(btn);
  });

  header.appendChild(nav);
};

// Run immediately
renderHeader();
