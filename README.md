# Demo flights

http://145.223.96.63/ - Demo host

https://github.com/user-attachments/assets/ba2772cb-1edb-4c46-b1e1-edf5c12ecd65

## Flights Management Tool

**Demo flights** is an flights management tool built with **React-Admin** and **TypeScript**. It allows users to view, search, filter flights data in an efficient and user-friendly interface.

### Features

- **React-Admin Integration** for easy CMS and table management
- **Material-UI** for a modern and responsive UI design
- **SCSS** for styling
- **React Hook Form** for seamless form handling
- **React-Query** for data fetching

## Tech Stack

The project utilizes several open-source technologies to provide a rich user experience:

- [React-Admin](https://marmelab.com/react-admin/Demos.html): A powerful tool for building CMS
 applications.
- [TypeScript](https://www.typescriptlang.org/): A statically typed language for better maintainability.
- [React Hook Form](https://react-hook-form.com/): For handling forms with ease.
- [SCSS](https://sass-lang.com/): For robust styling.

# Project Overview

This project uses **TypeScript**, **React-Admin** ([Documentation](https://marmelab.com/react-admin/Demos.html)), a great tool for building CMS, tables, and other powerful features. It also leverages **React-Query** for efficient data fetching, caching, and synchronization with the server, ensuring a smoother user experience. The project uses **SCSS** for styling and **React-Hook-Form** for form handling.

## Installation

To ensure the correct Node.js version, this project uses an `.nvmrc` file. If you are using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager), you can run the following command to automatically use the appropriate version:


## Project Installation

Follow these steps to set up the project:

1. Copy the example environment file and create your `.env`:

   ```sh
   cp .env.example .env
2. Set env variables in .env file:
    ```sh
    VITE_SKY_SCRAPPER_HOST=
    VITE_SKY_SCRAPPER_API=
    VITE_SKY_KEY=
    VITE_MAP_JSON=
    ```
Install the dependencies:

```sh
npm i
```
Start the development server:

```sh
npm run dev
```

# Dockerfile and Docker Compose Environment Variables Setup

In `docker-compose.yml`, ensure that the environment variables are set for use in your application:

```Dockerfile
VITE_SKY_SCRAPPER_HOST=
VITE_SKY_SCRAPPER_API=
VITE_SKY_KEY=
VITE_MAP_JSON=
