# WEB103 Project 2 - AI Startups Hub

Submitted by: Barry **Barry Barnes Niyonzima**

About this web app: **AI Startups Hub is a small directory of education-focused AI startups presented as neon-themed cards. Users can browse the list, view a concise preview for each startup, and click through to a dedicated detail page for the full information. The project uses an Express backend that serves startup data and static pages.**

Time spent: **2.5** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [X] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [X] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.***

The following **optional** features are implemented:

- [x] The web app displays items in a unique format (cards with animated gradients and neon glow rather than plain lists)

The following **additional** features are implemented:

- [x] Custom neon AI/tech theme (CSS variables, animated gradients, sheen, neon borders)
- [x] Responsive grid layout that wraps neatly on smaller screens
- [x] Description truncation to first 15 words in the list view
- [x] Semantic markup for cards and detail pages (accessible roles and focus outlines)
- [x] Express server route (`/startUpList`) serving JSON list and a detail page template at `/startUpList/:id`

## Video Walkthrough

**Note: please be sure to

Here's a walkthrough of implemented required features:

<img src='./wlkThroug.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  Add GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- When implementing the detail page, be careful to use absolute paths for scripts and styles (for example `/scripts/startUp.js` and `/style.css`). Serving the detail page from a route like `/startUpList/:id` with relative script paths caused the browser to request `/startUpList/scripts/startUp.js` and resulted in 404s.
- The project uses Vite for client-side bundling in development. The production build outputs into `server/public` (see `client/vite.config.js`), so the Express server can serve built assets.
- The project currently uses a custom CSS theme rather than Picocss; if Picocss styling is required, it can be integrated in place of the current styles.

## License

Copyright 2025 Your Name Here

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
