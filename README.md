# 💸 TaxPal Tailwind

![HTML](https://img.shields.io/badge/HTML-5-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Project-Practice%20Build-success)


A pixel-faithful clone of the **Salient** SaaS landing page template created by the Tailwind CSS team.

This project was built as a hands-on exercise to strengthen my understanding of **Tailwind CSS utility classes**, **mobile-first design**, and **vanilla JavaScript interactivity**, all without relying on frameworks.

Instead of using the original React and Next.js stack, I rebuilt the entire page from scratch using only **HTML**, **Tailwind via CDN**, and bit of **plain JavaScript**. The goal was simple: understand how everything works under the hood when a framework isn't doing the heavy lifting.

### Live Demo

🔗 **View the project here:**  
[arjunajay95.github.io/taxpal-tailwind/](https://arjunajay95.github.io/taxpal-tailwind/)

<br>

## What This Project Is

**TaxPal Tailwind** is a static recreation of the **Salient** marketing landing page.

The original template is built with React and Next.js. In this version, all of that was removed and replaced with simple HTML structure, Tailwind utility classes, and small pieces of JavaScript to control interactivity.

Working this way forces you to really understand:

- how layouts are constructed  
- how utility classes stack together  
- how UI state is managed through the DOM  

The page includes the main sections from the original design:

Hero section, feature sections, pricing tables, testimonials, and footer.  
Everything is fully responsive across **mobile, tablet, and desktop**.

<br>

## Tech Stack

Simple and minimal by design.

- **HTML5**
- **Tailwind CSS** (CDN version)
- **Vanilla JavaScript**

There are **no build tools**, **no frameworks**, and **no dependencies to install**.

Just open the HTML file and it runs.

<br>

## Features

### 📱 Mobile Navigation Toggle

The mobile navigation menu opens and closes smoothly on small screens using a simple JavaScript toggle. The overlay and menu states are controlled through class changes.

<p align="center">
<img src="https://github.com/user-attachments/assets/2c6ca86d-3312-4f0f-bbab-c56f07455b2c" width="360">
</p>

<br>

### 🔁 Interactive Feature Image Swap

Selecting different feature items updates the image displayed in the feature preview area. The behavior mimics the scrolling interaction used in the original Salient design.

<p align="center">
<img src="https://github.com/user-attachments/assets/37679a6e-325f-411c-ba3d-9ef51d6c4597" width="650">
</p>

<br>

### 🧩 Active Card Selection

Clicking a card activates it while automatically deactivating the previously selected one. This keeps the interface clean and predictable without needing any UI library.

<p align="center">
<img src="https://github.com/user-attachments/assets/41224e0a-0d47-44d4-ac4d-c7b4b823b732" width="650">
</p>

<br>

## Goals and What I Learned

The real goal of this project wasn't just recreating a page visually. It was about **understanding the mechanics behind modern UI development**.

Working through a full production-quality layout forced me to pay attention to details that are easy to overlook in small practice projects.

### 🛠 Utility Classes in Practice

Rebuilding a detailed design meant using a wide range of Tailwind utilities. Spacing, typography, shadows, colors, layout, and responsive rules all came into play. It was a good way to move past the basic classes and get comfortable with the full system.

### 🔧 Custom Classes

Sometimes utility classes alone weren't enough. In those cases I experimented with small custom classes to keep things clean. It helped me understand where Tailwind works best and where a tiny bit of custom CSS makes things easier.

### 📱 Mobile-First Workflow

Tailwind's responsive prefixes (`sm`, `md`, `lg`, etc.) naturally push you toward a mobile-first workflow. Every section started as a mobile layout and then scaled upward.

After a few sections this approach starts to feel very natural.

### 📊 Vanilla JavaScript DOM Manipulation

Since there were no frameworks involved, all interactivity had to be handled directly through the DOM.

That meant working with:

- event listeners  
- class toggling  
- simple UI state management  

It's a good reminder of what libraries like React are abstracting away.

### 🧠 Studying Real Design

Replicating the Salient template forced me to pay attention to spacing rhythm, typography hierarchy, and layout consistency.

That kind of close observation is surprisingly valuable when learning frontend development.

<br>

## Original Template Credit

This project is based on the **Salient** template by **Tailwind Labs**.

🔗 https://tailwindcss.com/plus/templates/salient

All design credit goes to their team.  
This clone was created **purely for educational purposes** and is not intended for commercial use.

⭐ If you found this project useful or interesting, feel free to star the repo!
