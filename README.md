# Academic CV Website — GitHub Pages

A framework-free academic homepage designed for `Chuck-Chae.github.io`.

## The only file you normally edit

**`content.js`**

That file contains:
- name / title / biography
- email / Google Scholar / GitHub / ORCID / CV link
- research interests
- news
- publications
- education
- philosophy interests / essays / reading notes

The layout is generated automatically by `app.js`.

## Add your profile photo

1. Put your image at:
   `assets/profile.jpg`
2. In `content.js`, change:

```js
profileImage: "assets/profile-placeholder.svg",
```

to:

```js
profileImage: "assets/profile.jpg",
```

## Add your CV

Put your PDF in the root folder as:

`CV.pdf`

If you use another filename, change this line in `content.js`:

```js
cv: "CV.pdf"
```

## Publish on GitHub Pages

Create a public repository named exactly:

`Chuck-Chae.github.io`

Upload all files in this folder to the repository root.

Then open:

`Settings → Pages → Build and deployment → Deploy from a branch`

Select:

- Branch: `main`
- Folder: `/(root)`

Your site will be available at:

`https://chuck-chae.github.io/`

## Files

- `index.html` — academic homepage
- `philosophy.html` — separate philosophy page
- `content.js` — **all editable content**
- `app.js` — renders content; normally do not edit
- `styles.css` — design; normally do not edit
- `assets/profile-placeholder.svg` — replace with your photo
- `assets/favicon.svg` — favicon
- `.nojekyll` — tells GitHub Pages to serve files directly
