# LWS XStream - Next.js Video Management App

A video streaming platform built with Next.js 14, featuring dynamic video management, parallel routing, and multi-language support.

[Live Demo](your_vercel_link_here)

## Features

- 📌 **Dynamic Content Loading**

  - Dynamic import of video data
  - Efficient code splitting and lazy loading

- 🎥 **Video Management**

  - View all videos with card layout
  - Video details in modal view
  - Dynamic routing for video pages

- 🛣 **Advanced Routing**

  - Parallel routing implementation
  - Intercepting routes for modal/page views
  - Custom 404 pages for both general and video-specific routes

- 🌐 **Multi-language Support**

  - English and Bengali language options
  - Auto-detection of browser language preference
  - Easy language switching from navbar

- 🔧 **RESTful API Endpoints**
  - GET /api/videos - List all videos
  - GET /api/videos/{id} - Get specific video
  - PATCH /api/videos/{id} - Update video title/description
  - DELETE /api/videos/{id} - Remove video

## Tech Stack

- Next.js 14
- Tailwind CSS
- React Portal for Modals
- Server Components
- App Router

## Key Implementation Details

- Custom modal implementation with React Portal
- Dynamic JSON imports for video data
- Parallel and intercepting routes for enhanced UX
- Dedicated error handling and 404 pages
- Language switching with localization
- RESTful API implementation

## Installation

1. Clone the repository

```bash
git clone https://github.com/abdulaziz-bd/lws-stream
```

2. Install dependencies

```bash
cd lws-stream
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

- Next.js
- Tailwind CSS
- React

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   └── videos/
│   │       └── [id]/
│   ├── api/
│   │   └── videos/
│   └── components/
├── data/
│   └── videos.json
└── dictionaries/
    ├── en.json
    └── bn.json
```

## 👤 Author

**Md Abdul Aziz**

- Github: [@abdulaziz-bd](https://github.com/abdulaziz-bd)
- LinkedIn: [abdulazizfahad](https://linkedin.com/in/abdulazizfahad)

## 📝 License

This project is [MIT](./LICENSE) licensed.
