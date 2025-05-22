
# DashFlow

**Developer:** Firebase Studio AI (Generated)

## Project Summary

DashFlow is a modern dashboard application built with Next.js, ShadCN UI components, and Tailwind CSS. It features Google OAuth authentication, a personalized user dashboard, and a page for managing pizza orders with sorting and filtering capabilities. The application supports light and dark modes and is designed to be responsive across various devices.

## Core Features

-   **Google OAuth Authentication**: Secure sign-in using NextAuth.js.
-   **Personalized Dashboard**: Greets users by their Google name.
-   **Pizza Orders Management**: Displays a table of pizza orders with:
    -   Sorting by Order ID and Order Date.
    -   Filtering by order Status.
    -   Color-coded status badges.
-   **Light/Dark Mode**: Theme switching support.
-   **Responsive Design**: Adapts to mobile, tablet, and desktop screens.
-   **Protected Routes**: Dashboard and orders pages require authentication.
-   **Custom Error Pages**: User-friendly 404 and general error pages.

## Tech Stack

-   Next.js (App Router)
-   React
-   TypeScript
-   Tailwind CSS
-   ShadCN UI
-   NextAuth.js
-   Lucide Icons

## Getting Started

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn or pnpm

### Running Locally

1.  **Clone the repository (or set up from Firebase Studio):**
    ```bash
    # If you have the project files, navigate to the project directory
    cd your-dashflow-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root of your project and add the following environment variables:

    ```env
    # Google OAuth Credentials
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

    # NextAuth Configuration
    NEXTAUTH_URL=http://localhost:9002 # Adjust port if different
    NEXTAUTH_SECRET=your_random_strong_secret # Generate a strong secret (e.g., using `openssl rand -base64 32`)
    ```

    **How to get Google OAuth Credentials:**
    *   Go to the [Google Cloud Console](https://console.cloud.google.com/).
    *   Create a new project or select an existing one.
    *   Navigate to "APIs & Services" > "Credentials".
    *   Click "Create Credentials" > "OAuth client ID".
    *   Choose "Web application" as the application type.
    *   Add an "Authorized JavaScript origin": `http://localhost:9002` (during development).
    *   Add an "Authorized redirect URI": `http://localhost:9002/api/auth/callback/google` (during development).
    *   Click "Create". Copy your Client ID and Client Secret.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    The application will be available at `http://localhost:9002` (or the port specified in your `dev` script).

## Implemented Bonus Features

-   **Custom 404 Page**: A user-friendly page for routes that are not found, with a link back to the dashboard.
-   **Custom Error Page**: A global error boundary page that catches unhandled errors and provides options to retry or go to the dashboard.
-   **UI Animations**:
    -   Subtle fade-in animations for page content loading using CSS keyframes.
    -   Hover/focus transitions on buttons and interactive elements (standard with Tailwind/ShadCN).
    -   Table row cells have a subtle `table-row-animation` on initial render (though this is more for illustrative purposes with static data).

## Third-Party Libraries Used

-   `next-auth`: For authentication.
-   `next-themes`: For light/dark mode theme switching.
-   `lucide-react`: For icons.
-   `@tanstack/react-table`: For the orders data table.
-   `date-fns`: For formatting dates in the orders table.
-   ShadCN UI components (various, see `components/ui`).

This README provides a comprehensive guide to understanding, setting up, and running the DashFlow application.
