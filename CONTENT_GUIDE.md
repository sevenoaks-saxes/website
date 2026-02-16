# Content Management Guide

This guide is for anyone who needs to update the text, events, or pages on the Sevenoaks Saxes website. You don't need to know how to code to make these changes, but you will need to edit **Markdown** files.

## Where is the Content?

All website content is located in the `src/content/` folder:

- `src/content/pages/`: Contains the main pages of the site (Home, Contact, Privacy) and the "About" sub-pages.
- `src/content/events/`: Contains individual files for each event (concerts, rehearsals, etc.).

---

## Editing Pages

Pages are made of two parts: the **Frontmatter** (settings at the top) and the **Content** (the text of the page).

### General Pages

Files like `home.md`, `contact.md`, and `privacy.md` are in `src/content/pages/`.

Example of page structure:

```markdown
---
title: 'About Us'
description: 'Learn more about Sevenoaks Saxes.'
---

Your content goes here...
```

### The "About" Section

The "About" section uses a special folder. Files placed in `src/content/pages/about/` will automatically become sub-pages (e.g., `about/our-groups.md` becomes the page `/about/our-groups`).

### Home Page Hero

The home page (`home.md`) has extra settings for the large "Hero" section at the top:

```yaml
hero:
  title: 'Sevenoaks Saxes'
  description: 'A community saxophone ensemble and orchestra.'
  primary_cta: 'Upcoming Events'
  secondary_cta: 'Learn More'
```

---

## Adding & Editing Events

### File Naming Convention

Event files must follow a specific naming format to ensure they are ordered correctly:
`yyyymmdd-event-name.md`

For example: `20250412-spring-concert.md`

### Event Settings (Frontmatter)

Every event file **must** have these settings at the top:

```yaml
---
name: 'Spring Concert'
description: 'An evening of jazz and classical favorites.'
date: 2024-05-15
time: '19:30'
location: 'Sevenoaks Community Centre'
type: 'concert' # Must be one of: concert, rehearsal, play day, or other
tags: ['jazz', 'classical']
---
```

- **type**: This must be exactly `concert`, `rehearsal`, `play day`, or `other`.
- **date**: Use the format `YYYY-MM-DD`.

---

## Markdown Basics

Markdown is a simple way to format text using symbols.

- **Headings**: Use `##` for a section heading and `###` for a sub-heading.
- **Bold**: Wrap text in double asterisks like `**this**`.
- **Italic**: Wrap text in single asterisks like `*this*`.
- **Links**: `[Link Text](https://example.com)`
- **Lists**:
  ```text
  - Item 1
  - Item 2
  ```

## Images

If you want to add an image to a page or event:

1. Place the image file in the `public/` folder (or a subfolder like `public/images/`).
2. Reference it in your Markdown file using `/imagename.jpg` or `/images/imagename.jpg`.

Example:

```markdown
![Description of image](/images/my-photo.jpg)
```

For events, you can also add an `image` field to the settings at the top:

```yaml
image: '/images/event-poster.jpg'
```

---

## How to Save Your Changes

1. **Edit** the file on GitHub (or your local editor).
2. **Commit** the changes (save them with a short description of what you changed).
3. If editing on GitHub, committing to the `main` branch will automatically update the live website within a few minutes.
