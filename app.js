(() => {
  const $ = (id) => document.getElementById(id);
  const page = document.body.dataset.page;

  const escapeHTML = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const valid = (value) => typeof value === "string" && value.trim() !== "";

  function setText(id, value) {
    const el = $(id);
    if (el && value !== undefined) el.textContent = value;
  }

  function renderParagraphs(id, paragraphs = []) {
    const el = $(id);
    if (!el) return;
    el.innerHTML = paragraphs
      .filter(valid)
      .map(p => `<p>${escapeHTML(p)}</p>`)
      .join("");
  }

  function base() {
    document.title = page === "philosophy"
      ? `Philosophy · ${SITE.name}`
      : SITE.name;

    setText("nav-name", SITE.name);
    setText("footer-name", SITE.name);
    setText("footer-year", new Date().getFullYear());

    const cv = $("nav-cv");
    if (cv) {
      if (valid(SITE.links?.cv)) cv.href = SITE.links.cv;
      else cv.style.display = "none";
    }

    const meta = $("meta-description");
    if (meta) {
      meta.setAttribute(
        "content",
        page === "philosophy"
          ? `Philosophy notes and essays by ${SITE.name}.`
          : `${SITE.name} — ${SITE.role}.`
      );
    }
  }

  function renderHome() {
    setText("hero-eyebrow", SITE.eyebrow);
    setText("hero-name", SITE.name);
    setText("hero-role", SITE.role);
    renderParagraphs("hero-bio", SITE.bio);

    const img = $("profile-image");
    if (img) {
      img.src = SITE.profileImage;
      img.alt = `${SITE.name} profile portrait`;
    }

    setText("profile-affiliation", SITE.affiliation);
    setText("profile-field", SITE.field);
    setText("profile-background", SITE.background);
    setText("profile-location", SITE.location);

    const linkMap = [
      ["Email", SITE.links?.email],
      ["Google Scholar", SITE.links?.scholar],
      ["GitHub", SITE.links?.github],
      ["ORCID", SITE.links?.orcid],
      ["CV", SITE.links?.cv]
    ];
    const heroLinks = $("hero-links");
    if (heroLinks) {
      heroLinks.innerHTML = linkMap
        .filter(([, url]) => valid(url))
        .map(([label, url]) =>
          `<a class="pill-link" href="${escapeHTML(url)}" target="${url.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener">${escapeHTML(label)}</a>`
        )
        .join("");
    }

    setText("research-intro", SITE.researchIntro);
    const rg = $("research-grid");
    if (rg) {
      rg.innerHTML = (SITE.research || []).map(item => `
        <article class="research-card">
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.description)}</p>
        </article>
      `).join("");
    }

    const news = $("news-list");
    if (news) {
      news.innerHTML = (SITE.news || []).map(item => `
        <article class="news-item">
          <div class="news-date">${escapeHTML(item.date)}</div>
          <p class="news-text">${escapeHTML(item.text)}</p>
        </article>
      `).join("");
    }

    const pubs = $("publication-list");
    if (pubs) {
      pubs.innerHTML = (SITE.publications || []).map(pub => `
        <article class="pub">
          <p class="pub-venue">${escapeHTML(pub.venue)}</p>
          <h3 class="pub-title">${escapeHTML(pub.title)}</h3>
          <p class="pub-authors">${pub.authorsHTML || ""}</p>
          ${valid(pub.note) ? `<p class="pub-note">${escapeHTML(pub.note)}</p>` : ""}
          ${(pub.links || []).some(l => valid(l.url)) ? `
            <div class="pub-links">
              ${(pub.links || []).filter(l => valid(l.url)).map(l =>
                `<a href="${escapeHTML(l.url)}" target="_blank" rel="noopener">${escapeHTML(l.label)} ↗</a>`
              ).join("")}
            </div>` : ""}
        </article>
      `).join("");
    }

    const edu = $("education-list");
    if (edu) {
      edu.innerHTML = (SITE.education || []).map(item => `
        <article class="edu-item">
          <div class="edu-year">${escapeHTML(item.period)}</div>
          <div>
            <h3>${escapeHTML(item.institution)}</h3>
            <p>${escapeHTML(item.degree)}</p>
            ${valid(item.detail) ? `<p>${escapeHTML(item.detail)}</p>` : ""}
          </div>
        </article>
      `).join("");
    }

    setText("philosophy-teaser", SITE.philosophyTeaser);
    setText("more-note", SITE.moreNote);

    const more = $("more-links");
    if (more) {
      more.innerHTML = (SITE.moreLinks || [])
        .filter(l => valid(l.url))
        .map(l => `<a href="${escapeHTML(l.url)}" target="_blank" rel="noopener">${escapeHTML(l.label)} ↗</a>`)
        .join("");
    }
  }

  function renderPhilosophy() {
    renderParagraphs("philosophy-intro", SITE.philosophyIntro);

    const interests = $("philosophy-interests");
    if (interests) {
      interests.innerHTML = (SITE.philosophyInterests || [])
        .map(x => `<span class="tag">${escapeHTML(x)}</span>`)
        .join("");
    }

    const essays = $("essay-list");
    if (essays) {
      essays.innerHTML = (SITE.essays || []).map(item => `
        <article class="essay-item">
          <h3>
            ${valid(item.url)
              ? `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener">${escapeHTML(item.title)}</a>`
              : escapeHTML(item.title)}
          </h3>
          <p>${escapeHTML(item.date)}${valid(item.description) ? ` · ${escapeHTML(item.description)}` : ""}</p>
        </article>
      `).join("");
    }

    const reading = $("reading-list");
    if (reading) {
      reading.innerHTML = (SITE.reading || []).map(item => `
        <article class="reading-item">
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.status)}${valid(item.note) ? ` · ${escapeHTML(item.note)}` : ""}</p>
        </article>
      `).join("");
    }

    setText("philosophy-scope-note", SITE.philosophyScopeNote);
  }

  base();
  if (page === "home") renderHome();
  if (page === "philosophy") renderPhilosophy();
})();
