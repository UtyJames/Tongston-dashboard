# Tongston Dashboard

## What I Built
This project is a modern, responsive web application dashboard built to manage support requests and provide an overview of active engineering workstreams. It features:
- A dynamic **Support Requests Table** allowing users to filter issues by Category, Priority, and Status.
- A **"Create New" Support Request Flow** that enables users to quickly log new issues with detailed metadata.
- A **Delivery Snapshot (T-World)** view, styled precisely using Tailwind CSS, providing a high-level overview of Active Issues, Pull Requests, and Pipeline Velocity.
- A sleek, interactive sidebar for viewing and managing individual request details.

## How to Run the Project
1. **Clone the repository** and navigate to the project directory (if not already there):
   ```bash
   cd tongston-dashboard
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **View the application**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## File Structure
```text
tongston-dashboard/
├── app/
│   ├── api/
│   │   └── requests/
│   │       ├── data.ts              # Mock backend data for requests
│   │       └── route.ts             # Next.js App Router API endpoint (GET /api/requests)
│   ├── favicon.ico
│   ├── globals.css                  # Global CSS and Tailwind directives
│   ├── layout.tsx                   # Main application layout
│   └── page.tsx                     # Main dashboard view containing tabs and state management
├── components/
│   ├── CreateRequestModal.tsx       # Modal form for creating new support requests
│   ├── DetailSidebar.tsx            # Slide-out sidebar for viewing request details
│   ├── FilterBar.tsx                # Filtering controls and action buttons
│   ├── Header.tsx                   # Application top navigation header
│   ├── RequestTable.tsx             # Data table for displaying support requests
│   ├── SummaryCards.tsx             # KPI summary cards
│   ├── TabsNav.tsx                  # Tab navigation (Support vs. T-World)
│   └── TWorldSection.tsx            # Delivery snapshot layout built with Tailwind CSS
├── public/                          # Static assets
├── package.json                     # Project dependencies and scripts
└── tsconfig.json                    # TypeScript configuration
```

## What Assumptions I Made
- **Local State Over Database:** I assumed that for the current phase of the dashboard, persisting new support requests in local React state (via the mock backend) is sufficient without connecting to a real external database.
- **Icon Strategy:** I assumed the use of `@mui/icons-material` was preferable since the dependencies were already present, despite styling the Delivery Snapshot heavily with Tailwind CSS to match specific design requirements.
- **Screen Sizing:** I assumed the dashboard should primarily be optimized for desktop and wide-screen layouts, expanding to `100%` width for the Delivery Snapshot tab to maximize data visibility.

## What is Missing or Simplified
- **Simplified Theming & UI Framework:** I used **Material UI** for uniform theming and rapidly structuring complex interactive components (like the Data Table, Sidebar, and Modal). However, the T-World Snapshot was custom-built with **Tailwind CSS** to achieve pixel-perfect design alignment.
- **API Integration:** I created a simple API route inside this same Next.js application (`/app/api/requests/route.ts`) to serve initial mock data. It does not yet connect to an external database (e.g., PostgreSQL, MongoDB), and the "Create New" request logic currently updates the frontend state directly rather than executing a `POST` request to a persistent layer.
- **Authentication:** There is no user authentication or authorization system implemented. All users see the same data and have admin-level control.

## What I Would Improve Next
- **Backend Persistence:** Connect the Next.js API routes to a real database using an MongoDB to permanently store support requests and handle complete CRUD operations.
- **Form Validation:** Add robust form validation (using libraries like Zod or React Hook Form) to the `CreateRequestModal` to ensure data integrity before submission.
- **Dark Mode:** Implement a system-wide dark mode toggle leveraging Tailwind's dark mode capabilities and Material UI's theme provider.
- **Pagination & Sorting:** Introduce backend pagination and column-sorting capabilities to the `RequestTable` to handle larger datasets gracefully.
