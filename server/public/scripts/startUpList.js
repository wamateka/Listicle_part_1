const renderStartups = async () => {
  try {
    const response = await fetch('/startUpList'); // adjust if your route is different
    const data = await response.json();

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ""; // clear existing content

    // create or reuse a grid container so CSS layout applies
    let grid = document.querySelector('.cards-grid');
    if (!grid) {
      grid = document.createElement('section');
      grid.classList.add('cards-grid');
      mainContent.appendChild(grid);
    } else {
      grid.innerHTML = '';
    }

    if (data && data.length > 0) {
      data.forEach(startup => {
        const card = document.createElement('article');
        card.classList.add('card');

        // Top area (animated gradient or placeholder image)
        const topContainer = document.createElement('div');
        topContainer.classList.add('card-top');
        const placeholder = document.createElement('div');
        placeholder.classList.add('placeholder');
        placeholder.textContent = 'Preview';
        topContainer.appendChild(placeholder);

        // Body
        const bottomContainer = document.createElement('div');
        bottomContainer.classList.add('card-body');

        // Title
        const name = document.createElement('h3');
        name.classList.add('title');
        name.textContent = startup.name;
        bottomContainer.appendChild(name);

        // Description (first 15 words only)
        const desc = document.createElement('p');
        desc.classList.add('description');
        const words = (startup.description || '').split(/\s+/);
        desc.textContent = words.length > 15 ? words.slice(0, 15).join(' ') + ' …' : startup.description;
        bottomContainer.appendChild(desc);

        // AI Features (as chips)
        const featuresWrap = document.createElement('div');
        featuresWrap.classList.add('features');
        (startup.AIFeatures || '').split(',').map(s => s.trim()).filter(Boolean).forEach(f => {
          const span = document.createElement('span');
          span.classList.add('feature');
          span.textContent = f;
          featuresWrap.appendChild(span);
        });
        bottomContainer.appendChild(featuresWrap);

        // Footer: rating + actions
        const footer = document.createElement('div');
        footer.classList.add('card-footer');

        const rating = document.createElement('div');
        rating.classList.add('rating');
        rating.textContent = '★ ' + (startup.effectivenessRating ?? '—');
        footer.appendChild(rating);

        const link = document.createElement('a');
        link.classList.add('read-more');
        link.textContent = 'Read More';
        link.setAttribute('role', 'button');
        link.href = `/startUpList/${startup.id}`;
        footer.appendChild(link);

        bottomContainer.appendChild(footer);

        card.appendChild(topContainer);
        card.appendChild(bottomContainer);
        grid.appendChild(card);
      });
    } else {
      const message = document.createElement('h2');
      message.textContent = 'No Startups Available 😞';
      mainContent.appendChild(message);
    }
  } catch (err) {
    console.error(err);
    const message = document.createElement('h2');
    message.textContent = 'Error fetching startups ❌ ' + err;
    document.getElementById('main-content').appendChild(message);
  }
};

renderStartups();
// const requestedUrl = window.location.href.split('/').pop();
// if (requestedUrl) {
//   window.location.href = '../404.html';
// } else {

// }
