# Jenny Kao — Personal Website

🔗 **https://kaojia.github.io**

Personal website on AI & cross-border e-commerce, showcasing an AI project portfolio and professional experience.

## Features

- 🌐 Chinese / English language toggle
- ☀️ Light / dark mode toggle (light by default)
- ✨ Interactive particle effect (gathers / scatters with the mouse) + glow parallax
- 📰 Amazon Market News AU/MENA — live news wall showcase
- 💬 LINE AI Agents — dual chat window simulation (ChatGPT API + Google Sheet)
- 📊 WBR Expansion Dashboard — interactive report showcase
- 📋 Cross-Border CRM Pipeline — multi-country status management showcase
- 📘 Amazon Seller Playbooks — seller launch guide previews

## Tech Stack

HTML / CSS / JavaScript (pure front end, no framework)

## Files

| File | Description |
|------|-------------|
| `index.html` | Main page |
| `style.css` | Styles |
| `script.js` | Interactions, navigation, animations |
| `i18n.js` | Chinese / English translation engine |
| `particles.js` | Hero particle system |
| `favicon.svg` / `apple-touch-icon.png` | Site icons |
| `og-image.png` | Preview image shown when shared on LINE, LinkedIn, etc. (1200×630) |

## Updating

After changing `style.css` or any `.js` file, also bump the `?v=` version suffix on those file URLs in `index.html` (e.g. `?v=20261023e` → `?v=20261101a`) so browsers fetch the new version instead of serving the old cached file.
