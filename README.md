# 🌸 Soft Pink Corner

A small, gentle web app made as a safe and warm place for someone I love.

This project is not about productivity, performance, or “fixing” emotions.  
It’s about **being nearby**, **soft reassurance**, and **care without pressure**.

---

## 💗 What this is

**Soft Pink Corner** is a mobile-first Next.js app that contains:
- “Open when…” cards for different emotional states  
- A soft **appreciation jar** with gentle notes  
- A **memories gallery** with photos and captions  
- Animated **Bubu & Dudu** stickers for warmth and personality  

Everything is intentionally calm, pink, and non-overwhelming.

---

## ✨ Features

### 🫶 Open When Cards
Small cards that can be opened during different emotional moments:
- sadness
- guilt
- overthinking
- anger
- anxiety
- loneliness
- exhaustion
- sleep

Each card contains:
- personal, reassuring text
- a hidden note revealed on tap
- a short calming ritual (breathing, grounding, etc.)

---

### 🫙 Appreciation Jar
A place to receive one gentle note at a time:
- random loving messages
- no pressure to react
- soft animations on interaction
- designed to feel safe, not loud

---

### 📸 Soft Memories
A scrapbook-style photo gallery:
- mobile-first layout
- tap a photo to view fullscreen
- swipe / arrow navigation
- captions instead of comments
- subtle bounce animations on tap

---

### 🐱 Stickers
Animated stickers are used instead of emojis:
- Bubu & Dudu themed
- `.webm` with `.mp4` fallback for iOS/Safari
- gentle float and pop animations
- no autoplay sound

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment)

No external UI libraries.  
No analytics.  
No tracking.

---

## 📁 Project Structure
```
├── app/
│ ├── page.tsx # Home
│ ├── open/[slug]/page.tsx # Open when pages
│ ├── notes/page.tsx # Appreciation jar
│ └── memories/page.tsx # Memories gallery
│
├── components/
│ ├── Sticker.tsx # Sticker with MP4/WebM fallback
│ ├── PinkShell.tsx # Layout wrapper
│
├── lib/
│ ├── content.ts # All texts and cards
│ └── stickers.ts # Sticker paths
│
├── public/
│ ├── stickers/ # Bubu & Dudu stickers (.webm + .mp4)
│ └── memories/ # Photos for gallery
│
└── README.md
```

---

## 📦 Stickers & iOS Support

iOS Safari and Telegram WebView do not reliably support `.webm`.

To ensure stickers work everywhere:
- every sticker has **two files**:
  - `name.webm`
  - `name.mp4`
- the `Sticker` component uses `<source>` fallback:
  - MP4 first (Safari)
  - WebM second (Chrome/Android)

This is required for proper rendering on iPhones.

---

## 🚀 Deployment

The project is deployed on **Vercel**.

### Steps:
1. Push to GitHub
2. Import repository in Vercel
3. No special config required
4. Every push triggers auto-deploy

---

## 🌱 Philosophy

This app follows a few simple rules:
- no pressure
- no loud animations
- no “fixing” emotions
- no forcing communication

Just presence, softness, and care.

---

## 🫂 Who this is for

Originally made for **one specific person**.  
But the idea can be reused for:
- emotional support apps
- relationship care projects
- gentle UX experiments
- personal creative coding

---

## 📄 License

This project is personal and not intended for commercial use.

Feel free to learn from it, adapt ideas, or reuse patterns —  
but please treat the emotional intent with respect.

---

Made with care, patience, and a lot of pink 💗
