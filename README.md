# Siddharth Verma Assignment - E-Commerce

This is an E-Commerce web application built using [Next.js](https://nextjs.org). This project is a submission for StrategyWerks.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/example/repository.git
cd repository
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

### Design Decisions and Patterns
```bash
Next.js
This project is built using Next.js, a React framework that enables server-side rendering and static site generation. Next.js provides a great developer experience with features like file-based routing, API routes, and built-in CSS support.

React Query
We use React Query for data fetching and state management. React Query simplifies data fetching, caching, and synchronization with the server.

Tailwind CSS
The application uses Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework that allows for rapid UI development with a consistent design system.
```

## Component Structure
The application is structured with reusable components to ensure maintainability and scalability. Key components include:

```bash
ProductList: Displays a list of products with infinite scrolling.
ProductCard: Represents a single product card.
ProductModal: Displays detailed information about a selected product.
Filters: Provides filtering options for sorting products by category, price range, and rating.
Error Handling
Error handling is implemented in key components to provide feedback to users when data fetching fails. Error messages are displayed in a user-friendly manner.
```

### Optimizations
```bash
Lazy Loading: Images are lazy-loaded to improve performance and reduce initial load time.
```
```bash
Responsive Design: The application is designed to be responsive and works well on mobile, tablet, and desktop devices.
```
```bash
Code Splitting: Next.js automatically splits code to improve load times and performance.
```

### Known Limitations
```bash
API Rate Limiting: The application relies on a third-party API for product data. Rate limiting may affect the application's performance during high traffic.
```
```bash
Limited Filtering Options: The current implementation provides basic filtering options. Advanced filtering and sorting features can be added in future iterations.
```
```bash
Accessibility: While basic accessibility features are implemented, further improvements can be made to ensure the application is fully accessible to all users.
```

Repository
You can find the code repository on my GitHub:

https://github.com/sv-siddharth/Siddharth-Verma-StrategyWerks

License
This project is licensed under the MIT License. See the LICENSE file for details.