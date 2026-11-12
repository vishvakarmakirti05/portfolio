# Kirti Vishvakarma - Portfolio Website

A responsive personal portfolio built with only HTML, CSS and vanilla JavaScript.
No build step, no frameworks, no backend. It works directly on GitHub Pages.

## Folder structure

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg                  (your photo, already added)
│   │   ├── favicon.png                  (browser tab icon, already added)
│   │   ├── project-voting.svg           (cover image, replace with a screenshot)
│   │   ├── project-resume-analyzer.svg  (cover image, replace with a screenshot)
│   │   └── project-erp.svg              (cover image, replace with a screenshot)
│   └── documents/
│       ├── resume.pdf                   (your resume, already added)
│       └── certificates/
│           ├── ai-literacy.pdf
│           ├── enterprise-grade-ai.pdf
│           └── mongodb-intro.pdf
└── README.md
```

## Publish on GitHub Pages

1. Sign in to GitHub and click **New repository**.
2. Name it `vishvakarmakirti05.github.io` (your username + `.github.io`). Set it to **Public**.
3. Upload everything inside the `portfolio` folder (not the folder itself) so that `index.html` is at the top level of the repository.
4. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/ (root)**, then click **Save**.
5. Wait 1 to 2 minutes. Your site will be live at `https://vishvakarmakirti05.github.io/`.

If you use a different repository name (for example `portfolio`), the URL will be `https://vishvakarmakirti05.github.io/portfolio/`. All paths in this site are relative, so it works either way.

File names on GitHub Pages are case-sensitive. Keep every file name in lowercase, exactly as shown above.

## How to edit your content

Open `index.html` in any text editor. Look for the comments that say **EDIT HERE**.

| What to change | Where |
| --- | --- |
| Name, headline, intro | `<section class="hero">` |
| About text | `<section id="about">` |
| Education | `<ol class="timeline">` |
| Skills | `<div class="skills-grid">` (add or delete `<li>` items) |
| Contact details | `<section id="contact">` |
| Colors | top of `css/style.css` (the `:root` variables) |

## Replace the photo, resume and project images

- **Photo:** replace `assets/images/profile.jpg` with a new file of the same name.
- **Resume:** replace `assets/documents/resume.pdf` with a new file of the same name.
- **Project images:** the three project covers are simple illustrations. Take a screenshot of each project, save it as `project-voting.jpg`, `project-resume-analyzer.jpg` and `project-erp.jpg` in `assets/images/`, then change the `src` in the matching project card in `index.html` (for example `assets/images/project-voting.jpg`).

## Add a new project

1. In `index.html`, find the `<article class="card project reveal">` blocks.
2. Copy one whole block and paste it after the last one.
3. Change the image, title, description, contribution and technology tags.
4. To show a GitHub or demo button, find the commented `project-links` block inside the card, put your link in it and remove the comment marks (`<!--` and `-->`).

## Add a new certificate

1. In `index.html`, find the `<li class="cert reveal">` blocks in the Certifications section.
2. Copy one block and paste it at the top or bottom of the list.
3. Change the title and issuer. If you have no link, delete the `<a>` button.
4. To link a PDF, save it in `assets/documents/certificates/` and point the link to it.

## Items to review before publishing

- **Site URL:** in the `<head>` of `index.html`, replace `[YOUR-SITE-URL]` (two places, in the Open Graph tags) with your final URL.
- **Project links:** none of the projects have a GitHub or demo link yet. Add them when your code is on GitHub.
- **Project images:** replace the three cover illustrations with real screenshots.
- **Email:** the site uses `vishvakarmakirti05@gmail.com`. Your resume shows `Vkirti168@gmail.com`. Use the same email in both places.
- **Certificates without a link:** AI for All (Intel) and Professional Edge (NIIT) have no link or file yet. Add one if you have it.
- **LinkedIn:** the URL contains "vishwakarma" while your name is spelled "Vishvakarma". Open the link to make sure it goes to your profile.
- **Resume date check:** the resume shows Higher Secondary as 2017 and Senior Secondary as 2015. Confirm these years are correct.

## Test on your computer

Double-click `index.html` to open it in your browser. The Google Fonts need an internet connection. Without it, the site falls back to system fonts.
