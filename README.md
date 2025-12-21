# Social Networking Platform

A modern social networking platform inspired by Bluesky, built with SvelteKit, Svelte 5, and Supabase. Focused on creating a streamlined posting and content-sharing experience with a clean, user-centric interface.

## Overview

This is a centralized social networking platform that prioritizes the core posting experience—enabling users to share and discover content through a fast, intuitive interface without unnecessary distractions. Built with modern web standards for optimal performance and accessibility.

## Core Features

- **Post Creation & Sharing**: Create and share posts with text, media, and rich formatting
- **Timeline Feed**: Chronological feed of posts from accounts you follow
- **User Profiles**: Customizable profiles with bio, avatar, and activity history
- **Social Interactions**: Like, repost, and reply to posts
- **Authentication**: Secure registration and login powered by Supabase
- **Modern UI**: Responsive design with dark mode support

## Technical Stack

- **Frontend**: Svelte 5 with SvelteKit
- **Backend**: Supabase (PostgreSQL database, authentication, real-time subscriptions)
- **Styling**: Tailwind CSS v4 with Shadcn Svelte components
- **Type Safety**: TypeScript throughout
- **Form Handling**: SvelteKit Superforms with validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn
- Supabase account and project

### Installation

1. Clone the repository:

```sh
git clone <repository-url>
cd skp
```

2. Install dependencies:

```sh
npm install
# or
pnpm install
# or
yarn install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Supabase credentials:
   ```
   PUBLIC_SUPABASE_URL=your_supabase_url
   PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## Developing

Start the development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with:

```sh
npm run preview
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Design Philosophy

This platform is designed with a focus on the core posting experience. The goal is to provide a fast, intuitive interface that lets users share and discover content without distractions, built with modern web standards for performance and accessibility.
