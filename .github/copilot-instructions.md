# Copilot Instructions for hossainkhan.com

## Project Overview
This is a **static portfolio website** for Hossain Khan, hosted on GitHub Pages at [hossainkhan.com](https://hossainkhan.com/). It is a Bootstrap-based theme showcasing engineering portfolio, projects, and testimonials. No server-side build is required - the site is served directly as static HTML/CSS/JS.

### Tech Stack
- **Languages**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5 for styling
- **Icons**: FontAwesome (local)
- **Fonts**: Google Fonts (Lato, Montserrat)
- **Hosting**: GitHub Pages with custom domain
- **Node.js**: v22.x (for CI validation tools only)

---

## Build & Validation Commands

### Prerequisites
Always run these commands from the repository root directory.

### Install Dependencies
```bash
npm install
```
This installs Lighthouse CI and related devDependencies. Only needed for performance monitoring tools.

### HTML Validation (CI-enforced)
```bash
npm install -g html-validate@8.21.0
html-validate index.html
```
- CI validates `index.html` (primary file)
- The CI workflow also references `_template.html` but it doesn't exist in root
- Exit code 0 means success (no output on success)
- Configuration: `.htmlvalidate.json`

### CSS Validation (CI-enforced)
```bash
npm install -g csstree-validator@3.0.0
csstree-validator assets/css/
```
- Validates all CSS files in `assets/css/`
- Exit code 0 means success (no output on success)

### Local Development Server
```bash
python3 -m http.server 8080
```
Then visit: http://localhost:8080/

Alternative:
```bash
npm install --global http-server
http-server ./ -a 127.0.0.1 --port 8080
```

### Performance Audit (optional)
```bash
npm run lighthouse:ci
```
Requires local server running on port 8080.

---

## Project Structure

```
/
├── index.html              # Main portfolio page (primary file)
├── testimonials.html       # Testimonials page
├── assets/
│   ├── css/styles.css      # Main stylesheet (CI validated)
│   ├── js/main.js          # Main JavaScript
│   ├── fontawesome/        # FontAwesome icons (local)
│   ├── images/             # Site images
│   └── plugins/            # Bootstrap, dark-mode-switch, etc.
├── archive/                # Historical content (excluded from CI)
├── scripts/check-budget.js # Performance budget checker
├── .github/workflows/
│   ├── validator.yml       # HTML/CSS validation CI
│   ├── lighthouse-ci.yml   # Performance monitoring CI
│   └── jekyll.yml          # Jekyll build + HTML5 validator
├── .htmlvalidate.json      # HTML validator config
├── lighthouserc.json       # Lighthouse CI config
├── performance-budget.json # Performance thresholds
├── resume.json             # JSON Resume data
├── CNAME                   # GitHub Pages custom domain
└── package.json            # npm scripts and devDependencies
```

---

## CI/CD Workflows

### 1. Validate Workflow (`validator.yml`)
Runs on: `push` and `pull_request` to `main`
- Installs `html-validate@8.21.0` and `csstree-validator@3.0.0`
- Validates HTML: `index.html` (CI also references `_template.html` but it doesn't exist)
- Validates CSS: `assets/css/`

### 2. Lighthouse CI Workflow (`lighthouse-ci.yml`)
Runs on: `push` to `main`/`develop`, `pull_request` to `main`
- Starts local server on port 8080
- Runs Lighthouse performance audit
- Uses baseline thresholds (not strict - see `CI-BASELINE.md`)

### 3. Jekyll Workflow (`jekyll.yml`)
Runs on: `push` (any branch)
- Builds with Jekyll in Docker
- Runs HTML5 validation (blacklists `archive` and `assets` directories)

---

## Key Development Rules

1. **Always validate HTML/CSS before committing:**
   ```bash
   html-validate index.html && csstree-validator assets/css/
   ```
   For comprehensive validation, also check `testimonials.html`:
   ```bash
   html-validate index.html testimonials.html && csstree-validator assets/css/
   ```

2. **Main editable files:**
   - `index.html` - Primary portfolio content
   - `testimonials.html` - Testimonials section
   - `assets/css/styles.css` - Custom styles
   - `assets/js/main.js` - Custom JavaScript

3. **Do not modify `archive/` directory** - Contains historical snapshots and third-party plugin sources

4. **Images go in `assets/images/`** - Use WebP format when possible for performance

5. **Bootstrap components are in `assets/plugins/bootstrap/`** - Use existing Bootstrap utilities rather than custom CSS when possible

---

## Common Issues & Solutions

### HTML Validation Fails
- Check for unclosed tags, invalid attributes
- Ensure proper `alt` attributes on images
- Use semantic HTML elements

### CSS Validation Fails
- Check for vendor prefixes not recognized
- Configuration allows `prefer-native-element: off`

### Performance Budget Exceeded
- Large images are the main cause (see `PERFORMANCE.md`)
- Use lazy loading: `loading="lazy"` on images
- Current baseline is lenient - see `lighthouserc.json` for thresholds

---

## Documentation References
- `README.md` - Setup and development tips
- `PERFORMANCE.md` - Performance optimization roadmap
- `CI-BASELINE.md` - Explains CI threshold strategy
- `LIGHTHOUSE-GITHUB-SETUP.md` - GitHub integration for Lighthouse

---

**Trust these instructions first.** Only search the codebase if information here is incomplete or incorrect.
