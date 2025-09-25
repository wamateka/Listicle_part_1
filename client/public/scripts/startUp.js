// Fetch and render a single startup based on ?id= query parameter

async function fetchStartups() {
  const res = await fetch('/startUpList');
  if (!res.ok) throw new Error('Failed to fetch startups');
  return res.json();
}

function getIdFromQuery() {
  const requestedID = parseInt(window.location.href.split("/").pop());
  return requestedID;
}

function createDetailCard(startup) {
  const card = document.createElement('article');
  card.classList.add('card');

  const top = document.createElement('div');
  top.classList.add('card-top');
  const placeholder = document.createElement('div');
  placeholder.classList.add('placeholder');
  placeholder.textContent = 'Preview';
  top.appendChild(placeholder);

  const body = document.createElement('div');
  body.classList.add('card-body');

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = startup.name;
  body.appendChild(title);

  const desc = document.createElement('p');
  desc.classList.add('description');
  desc.textContent = startup.description || '';
  body.appendChild(desc);

  // Detailed features list
  const featuresTitle = document.createElement('h3');
  featuresTitle.textContent = 'AI Features';
  featuresTitle.classList.add('muted');
  body.appendChild(featuresTitle);

  const features = document.createElement('div');
  features.classList.add('features');
  (startup.AIFeatures || '').split(',').map(s => s.trim()).filter(Boolean).forEach(f => {
    const span = document.createElement('span');
    span.classList.add('feature');
    span.textContent = f;
    features.appendChild(span);
  });
  body.appendChild(features);

  // Additional metadata
  const metaWrap = document.createElement('div');
  metaWrap.style.marginTop = '12px';
  const grade = document.createElement('div');
  grade.classList.add('muted');
  grade.textContent = `Grade/Subject: ${startup.gradeOrSubject || '—'}`;
  metaWrap.appendChild(grade);

  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.style.marginTop = '6px';
  rating.textContent = `★ ${startup.effectivenessRating ?? '—'}`;
  metaWrap.appendChild(rating);

  body.appendChild(metaWrap);

  // Actions
  const footer = document.createElement('div');
  footer.classList.add('card-footer');
  footer.style.marginTop = '18px';

  const back = document.createElement('a');
  back.classList.add('btn');
  back.href = '../index.html';
  back.textContent = '← Back to list';
  footer.appendChild(back);

  const external = document.createElement('a');
  external.classList.add('read-more');
  external.href = '#';
  external.textContent = 'Visit site';
  footer.appendChild(external);

  body.appendChild(footer);

  card.appendChild(top);
  card.appendChild(body);

  return card;
}

async function render() {
  const root = document.getElementById('startup-root');
  root.innerHTML = '';
  try {
    const id = getIdFromQuery();
    const list = await fetchStartups();
    const startup = list.find(s => String(s.id) === String(id));
    if (!startup) {
      root.innerHTML = '<h2 class="muted">Startup not found</h2>';
      return;
    }
    const card = createDetailCard(startup);
    root.appendChild(card);
  } catch (err) {
    console.error(err);
    root.innerHTML = '<h2 class="muted">Error loading startup data</h2>';
  }
}

render();
