# TaxPal Tailwind

A pixel-faithful clone of [Salient](https://tailwindcss.com/plus/templates/salient), a SaaS marketing landing page template by the Tailwind CSS team. Built as a hands-on practice project to sharpen my skills with Tailwind CSS utility classes, custom classes, and mobile-first development.

> **Note:** This is a UI-only clone built for learning purposes. Interactivity (mobile menu, animations, etc.) is not yet implemented. The focus was entirely on replicating the layout and visual design.

---

## What It Is

TaxPal Tailwind is a static HTML recreation of the Salient template. The original is built with React and Next.js. This version strips all of that away and rebuilds it from scratch using plain HTML and Tailwind CSS via CDN, which made it a great exercise in understanding how utility-first CSS actually works under the hood, without a build step or framework doing the heavy lifting.

The page includes all the major sections from the original design: hero, feature sections, pricing, testimonials, and footer, all fully responsive across mobile, tablet, and desktop.

---

## Tech Stack

- **HTML5**
- **Tailwind CSS** (via CDN)

No build tools, no frameworks, no dependencies to install.

---

## Goals and What I Learned

The main goal was to get comfortable with Tailwind CSS as a utility-first framework by working through a real, well-designed template rather than a toy project. Some of the specific things I focused on:

**Utility classes in practice.** Working through a design this detailed pushed me to learn a wide range of Tailwind's utility classes, not just the common ones. Spacing, typography, borders, shadows, colors, and layout all got a solid workout here.

**Custom classes.** Where utility classes alone weren't quite cutting it, I practiced extending Tailwind with custom class definitions, which helped me understand where the line is between using the framework and fighting it.

**Mobile-first development.** Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.) follow a mobile-first approach, and rebuilding a polished multi-section layout really drilled that workflow in. Every section was designed for mobile first, then scaled up.

**Reading and replicating production-quality design.** Staying close to the original Salient design meant paying close attention to details like spacing rhythm, type hierarchy, and layout structure. That kind of close reading is genuinely useful as a learning exercise.

---

## What's Next

JavaScript interactivity is the next step. Things like the mobile navigation toggle and any scroll-based behavior aren't wired up yet. That'll be the focus of the next phase of this project.

---

## Original Template

This project is based on the [Salient template](https://tailwindcss.com/plus/templates/salient) by [Tailwind Labs](https://tailwindcss.com). All design credit goes to their team. This clone was built purely for educational purposes and is not intended for commercial use.
