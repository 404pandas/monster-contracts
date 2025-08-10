# 🐺 The Monster Contracts Ledger

> _"Evil is evil. Lesser, greater, middling… makes no difference. Pay’s the only thing that matters — and even then, best get it in writing."_  
> — Geralt of Rivia

A Witcher’s job board built with React, Vite, Tailwind CSS, and JSON-Server, where you may post, accept, and fulfill monster contracts.  
Based on the [YouTube crash course by Brad Traversy](https://youtu.be/LDB4uaJ87e0).

---

## 📜 The Contract (About the Project)

A humble notice board for witchers and monster slayers to find work.  
Built for training purposes, this app lets you:

- 📄 View available monster contracts
- ✍️ Post new contracts for dangerous beasts
- 🪓 Mark contracts as fulfilled
- 💰 Receive payment (in crowns, or JSON)

---

## ⚔️ Tools of the Trade

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)
![JSON Server](https://img.shields.io/badge/JSON%20Server-1.0.0--alpha.23-000000?logo=json&style=flat-square)
![React Router](https://img.shields.io/badge/React%20Router%20DOM-6.22.3-CA4245?logo=react-router&logoColor=white&style=flat-square)
![React Icons](https://img.shields.io/badge/React%20Icons-5.0.1-FFCC00?logo=react&logoColor=white&style=flat-square)
![React Toastify](https://img.shields.io/badge/React%20Toastify-10.0.4-FF9800?logo=react&logoColor=white&style=flat-square)

---

## 🪶 Preparation (Installation)

First, fetch the scrolls and grimoires (dependencies):

```bash
git clone <your-repo-url>
cd monster-contracts
npm install
```

---

## 🐉 The Hunt (Running the App)

### 1️⃣ Light the Candle — Start the JSON Server

_For without a village to post notices, there can be no contracts._

```bash
npm run server
```

Server will run at **http://localhost:8000**

### 2️⃣ Sharpen Your Blades — Start the Vite Frontend

_Here begins the real hunt._

```bash
npm run dev
```

Frontend will run at **http://localhost:3000**

---

## 💰 Payment (Production Build)

Once your work is done, prepare it for delivery to the royal court:

```bash
npm run build
```

---

## 🔍 Inspect Your Trophies (Preview Build)

```bash
npm run preview
```

---

## 📂 The Witcher’s Satchel (Project Structure)

```
monster-contracts/
├── public/             # Glyphs and diagrams
├── src/                # React components, pages, styles
├── db.json              # Monster sightings and bounties
├── package.json
└── vite.config.ts
```

--

## 📜 Contract Loader

Location:
src/pages/ContractPage.jsx

Purpose:
The contractLoader is the Witcher’s way of preparing for the hunt before even stepping into the village square. In development terms, it’s a data loader for the ContractPage that tells our React Router to fetch a specific contract’s details before rendering the page.

Why We Use It:
Just like a witcher studies his prey before drawing his silver sword, our loader ensures that the ContractPage has the necessary contract information ready to display—avoiding empty UI flashes and reducing the risk of “loading limbo.”

How It Works:

The contractLoader listens for the id parameter in the URL.

It sends a fetch request to /api/contracts/:id (served by our JSON Server).

Once the contract data is retrieved, React Router passes it to the page via useLoaderData().

This gives our ContractPage instant access to the details, such as the title, type, description, reward, and location—just like a notice board entry in The Witcher 3.

Example Flow:

Geralt clicks on a contract in the “Recent Contracts” list.

The contractLoader retrieves the monster’s details from the mock backend.

The page renders with the full posting—ready for negotiation, preparation, and eventual monster-slaying.

---

## 📜 The Fine Print (Dev Dependencies)

- **TypeScript types**: `@types/react`, `@types/react-dom`
- **Guild Codex Checks**: `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- **Build Alchemy**: `vite`, `@vitejs/plugin-react`, `postcss`, `autoprefixer`
- **Mock Town Criers**: `json-server`

---

## 🦴 Disclaimer

This ledger is for training purposes only.  
Neither the author nor the Witcher’s Guild is responsible for injuries, curses, hexes, drowners, or accidental summoning of higher vampires.

---
